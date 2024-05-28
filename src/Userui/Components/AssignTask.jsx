import React, { useState,useEffect } from "react";
import { ComboboxTeams } from "../../assets/Components/ComboboxTeams";
import { useCustomFetch } from "../../Hooks/useCustomFetch";
import { ButtonComp } from "../../assets/Components/ButtonComp";
import UseZustandGetId from "../../context/UseZustandGetId";
import { useCustomMutation } from "../../Hooks/useCustomMutation";
import Modal from "../../assets/Components/Modal";


export const AssignTask = ( {children}) => {
  // const { userid } = UseZustandGetId();

  const url_getID = `http://127.0.0.1:8000/api/showTask`;
  const { data: datas, mutate: mutateGet } = useCustomMutation(url_getID,"POST");

  useEffect(() => {
      mutateGet({
      user_id : children,
    });
}, [children]);

  const [selectedTaskIds, setSelectedTaskIds] = useState([]);

  const handleCheckboxChange = (taskId) => {
    setSelectedTaskIds((prevSelectedTaskIds) =>
      prevSelectedTaskIds.includes(taskId)
        ? prevSelectedTaskIds.filter((id) => id !== taskId)
        : [...prevSelectedTaskIds, taskId]
    );
  };

  useEffect(() => {
    console.log("Currently selected task IDs:", selectedTaskIds);
  }, [selectedTaskIds]);

  const [teams, setTeams] = useState("");
  const [showModals, setshowModal] = useState(false);
  const [showMessage, setshowMessage] = useState("");
  const url_getAssignTask = "http://127.0.0.1:8000/api/assignTask";
  //post nalang
  const { data: dataFetch, mutate: mutateData } = useCustomMutation(
    url_getAssignTask,
    "POST"
  );

  const handleAssignClick = (e) => {
    e.preventDefault();
    // console.log("Assign button clicked");
    // console.log("Selected Task IDs:", selectedTaskIds);
    // console.log("Selected Team:", teams);
    if (teams != "Select Teams") {
      mutateData({
        task_id: selectedTaskIds,
        team_name: teams,
        status: "pending",
      });
      setshowModal(True);
      setshowMessage("Task Assigned to the Team");
    } else {
      setshowMessage("Select Team First");
    }
  };

  return (
    <div className="flex relative">
      {showModals && <Modal />}
      <div className="w-full h-full">
        <form onSubmit={handleAssignClick}>
          <ComboboxTeams
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
          />
          <div className="border-2 mr-5 overflow-y-scroll custom-scrollbar h-96 w-full mt-5">
            <table className="table table-xs table-pin-rows table-pin-cols">
              {/* head */}
              <thead>
                <tr className="text-body text-lg">
                  <th></th>
                  <th>#</th>
                  <th>Task Assigned</th>
                  <th>Severity</th>
                  <th>Report</th>
                  <th>Task Created</th>
                  <th>Deadline</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {/* {datas ? (
                  <> */}
                {Array.isArray(datas) &&
                  datas.map((task, index) => (
                    <tr className="font-text text-xl" key={task.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="checkbox p-4 m-2 flex justify-center"
                          onChange={() => handleCheckboxChange(task.id)}
                        />
                      </td>
                      <td className="text-green-600">{index + 1}</td>
                      <td>{task.project_name}</td>
                      <td>{task.task_category}</td>
                      <td>{task.task_category}</td>
                      <td>{task.created_at}</td>
                      <td>{task.deadline}</td>
                    </tr>
                  ))}
                {/* </>
                ) : (
                 <div className="flex justify-center items-center">No Task to Assign</div>
                )} */}
              </tbody>
            </table>
          </div>
          <ButtonComp>Assign</ButtonComp>
        </form>
      </div>
    </div>
  );
};
