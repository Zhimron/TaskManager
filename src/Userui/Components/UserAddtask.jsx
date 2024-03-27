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
      <div className=" font-body  text-4xl flex items-center text-crimson justify-between mx-5  pt-32 ml-10">
        <motion.div
          className="w-3/12 flex items-center justify-center bg-ivory bg-opacity-25 shadow-md p-1 rounded-md"
          whileTap={{ scale: 0.8 }}
          onClick={handleChange}
        >
          <Link>Task</Link>{" "}
          <IoMdAddCircle size={30} className="text-slate-800 ml-3" />
        </motion.div>
      </div>
      <div className=" w-full mt-5 burger flex ">
        {isShow ? (
          <div className="flex flex-col ml-10 rounded-xl bg-ivory bg-opacity-25 py-12 items-center w-3/6 shadow-md ">
            <div className="  w-full flex flex-col px-10 ">
              {/* <div className="font-text text-lg flex items-center justify-between mx-5 mt-3 ">
              <span className=" font-bold">Start Date:</span> <DatePicker />
            </div> */}
              <div className=" font-text  text-lg flex  items-center justify-between mx-5 mt-2 ">
                <span className="font-bold">Deadline:</span> <DatePicker />
              </div>
            </div>

            <div className="w-full  flex flex-col font-body items-center   ">
              <InputDefault type="text" placeholder="Project Name" />
              <TextArea />
              <Combobox />
              <ButtonComp children={"Add Task"} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col ml-10 rounded-xl bg-ivory bg-opacity-50 py-12 pl-16 w-3/6 shadow-md ">
            <div className='font-body'>Project</div>
            <p className='mt-10'>Description</p>
            <div>Prior</div>
            <div>Deadline</div>
          </div>
        )}
      </div>
    </div>
  );
}
