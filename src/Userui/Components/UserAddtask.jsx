import React, { useState } from 'react'
import { DatePicker } from '../../assets/Components/DatePicker';
import InputDefault from '../../assets/Components/InputDefault';
import { TextArea } from '../../assets/Components/TextArea';
import { Combobox } from '../../assets/Components/Combobox';
import { MdOutlineTitle } from "react-icons/md";
import { ButtonComp } from '../../assets/Components/ButtonComp';
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export const UserAddtask = () => {
  const [isShow,SetIsShow] = useState(false);
  const handleChange = () =>{
    SetIsShow((prevState) => !prevState);
   
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className="  text-4xl flex items-center text-green-700  mx-5  pt-32 ml-10">
        <motion.div
          className="w-3/12 flex items-center justify-start p-1 pl-16 font-body "
          whileTap={{ scale: 0.7 }}
          onClick={handleChange}
          whileHover={{ scale: 0.8 }}
        >
          <Link>Task</Link>{" "}
          <IoMdAddCircle size={30} className="text-slate-800 ml-3" />
        </motion.div>
        <div className="ml-96 pl-10 flex items-center justify-end p-1 font-text ">
          <Link>About The Task</Link>{" "}
        </div>
      </div>

      <div className=" w-full mt-5 burger flex ">
        {isShow ? (
          <div className="flex flex-col ml-10 rounded-3xl bg-ivory bg-opacity-25 py-12 items-center w-3/6 shadow-md h-[37em] ">
            <div className="  w-full flex flex-col px-12 ">
              {/* <div className="font-text text-lg flex items-center justify-between mx-5 mt-3 ">
              <span className=" font-bold">Start Date:</span> <DatePicker />
            </div> */}
              <div className=" font-text  text-lg flex  items-center justify-between mx-5 mt-2 ">
                <span className="font-bold">Deadline:</span> <DatePicker />
              </div>
            </div>

            <div className="w-full flex flex-col font-body items-center   ">
              <InputDefault type="text" placeholder="Project Name" />
              <TextArea />
              <Combobox />
              <ButtonComp children={"Add Task"} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col ml-10 rounded-3xl bg-ivory bg-opacity-25 py-5 px-10 w-3/6 shadow-md h-[37em] overflow-auto">
            <div className="flex ">
              <div className="p-5 w-full">
                <div className="font-body bg-slate-500 rounded-md pl-3 py-5 bg-opacity-50  ">
                  Project Title
                </div>
                <div className="font-body pl-3 mt-2">Priority</div>
                <div className="font-body pl-3 mt-2">Deadline</div>
              </div>
              <div className="divider divider-horizontal font-text pl-10">
                Team{" "}
              </div>
              <div className="p-5 w-full">
                <div className="font-body">Team Assigned..</div>
                <progress
                  className="progress progress-success w-56 mt-5"
                  value="65"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col mx-10 rounded-3xl bg-ivory bg-opacity-50 py-5 px-10 w-3/6 shadow-md h-[37em]">
          <div className="flex">
            <div className="p-5 w-full">
              <div className="font-body bg-slate-500 rounded-md pl-3 py-5 bg-opacity-50  ">
                Project Title
              </div>
              <div className="font-body pl-3 mt-2">Priority</div>
              <div className="font-body pl-3 mt-2">Deadline</div>
            </div>
            <div className="divider divider-horizontal font-text pl-10">
              Team{" "}
            </div>
            <div className="p-5 w-full">
              <div className="font-body">Team Assigned..</div>
            </div>
          </div>
          <div className="p-5 w-full">
            <div className="font-text">Information</div>
          </div>
        </div>
      </div>
    </div>
  );
}
