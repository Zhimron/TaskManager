import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import { motion } from 'framer-motion';
import { useCustomFetch } from '../../Hooks/useCustomFetch';



export const UserAssignTask = () => {

  const url_getTask = "http://127.0.0.1:8000/api/showteam";

  const { data } = useCustomFetch(url_getTask);

  return (
    <div className="w-full h-screen bg-gradient-to-t from-royalblue to-ivory flex  ">
      <div className="  w-3/6 text-4xl flex text-green-700  mx-5  pt-32 ml-10 font-bold flex-col">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, y: { type: "spring" } }}
          className="flex items-center mb-10"
        >
          Assign Task <MdAssignmentAdd className=" text-slate-800 ml-3 " />
        </motion.div>
        {data &&
          data.map((item) => (
            <motion.div
              className=" w-52 h-20  mt-2 "
              whileHover={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              initial={{ scale: 1, opacity: 0 }}
              key={item.id}
            >
              {" "}
              {item.team_name}
            </motion.div>
          ))}
      </div>
      <div className="  w-full pt-32">
        <div className="text-green-700 font-text text-4xl">TEAM SAMPLE</div>
        <div className="border-2 mr-5 rounded-xl overflow-y-scroll h-5/6 mt-5  ">
          <table className="table table-xs table-pin-rows table-pin-cols ">
            {/* head */}
            <thead>
              <tr className="text-body text-lg   ">
                <th></th>
                <th></th>
                <th>Task Assigned</th>
                <th>severity</th>
                <th>Report</th>
                <th>Task Created</th>
                <th>DeadLine</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="font-text">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <td>1</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>SAMPLE</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        {/* <div className="flex justify-evenly border-red-100 bor">
          <div>Task ASSIGNED</div>
          <div className="ml-5">severity</div>
          <div className="ml-5">Report By</div>
          <div className="ml-5">Task Created</div>
          <div className="ml-5">DeadLine</div>
        </div> */}
      </div>
    </div>
  );
}
