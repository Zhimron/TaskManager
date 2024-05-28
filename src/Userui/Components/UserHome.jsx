import React, { useState, useEffect } from "react";
import { CalendarComp } from "../../assets/Components/CalendarComp";
import InputDefault from "../../assets/Components/InputDefault";
import UseZustandGetId from "../../context/UseZustandGetId";
import { useCustomMutation } from "../../Hooks/useCustomMutation";

export const UserHome = () => {

  const { userid } = UseZustandGetId();
  //post nalang
  const url_getTask = "http://127.0.0.1:8000/api/gettask";

  const [events, setEvents] = useState([]);

  const { data:dataGettask , mutate:mutateGetTask } =useCustomMutation(url_getTask,"POST");
  const url_AssignedTask = "http://127.0.0.1:8000/api/DashboardTask";
  const { data: dataAssignedTask, mutate: mutateAssignedTask } =
    useCustomMutation(url_AssignedTask, "POST");
  useEffect(()=>{
    mutateGetTask({
      user_id: userid,
    });
    mutateAssignedTask({
      user_id: userid,
    });
  },[]);

    useEffect(() => {
      if(dataGettask){
          setEvents(
            dataGettask.map((event) => ({
              localizer: event.task_description,
              title: event.project_name,
              start: new Date(event.deadline),
              end: new Date(event.deadline),
            }))
          );
      }
      
    }, [dataGettask,]);
 
// bg-gradient-to-t from-royalblue to-ivory
  return (
    <>
      <section className="w-screen h-screen flex justify-evenly  bg-gradient-to-t from-royalblue to-ivory px-10">
        <section className="w-full h-full pt-28 flex flex-col items-center burger  pr-5 ">
          <div className="text-green-700 font-body">Task Deadline </div>
          <div className=" mt-5 outline rounded-md p-5">
            <CalendarComp events={events} />
          </div>
        </section>
        <section className="w-full h-full  pt-16">
          <div>
            <InputDefault type="text" placeholder="Search Project" />
          </div>
          <div className=" outline rounded-md h-[37.5em] mt-5 overflow-auto custom-scrollbar">
            <div className="sticky top-0 w-full px-1">
              <div className="w-full  bg-blue-200 h-10 rounded-md flex items-center px-2 outline justify-evenly font-body text-green-900">
                <h1 className="w-1/4">Team</h1>
                <h1 className="w-full">Task Title</h1>
                <h1 className="w-1/4">Status</h1>
              </div>
            </div>
            <div className="px-1">
              {Array.isArray(dataAssignedTask) &&
                dataAssignedTask.map((Assigned, index) => (
                  <div
                    className="w-full my-3 h-20 rounded-md flex items-center px-2 outline outline-slate-500 justify-evenly font-text "
                    key={index}
                  >
                    <h1 className="w-1/4">{Assigned.team_name}</h1>
                    <h1 className="w-full">{Assigned.task_description}</h1>
                    <h1 className="w-1/4">{Assigned.status}</h1>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
