import React from 'react'
import { DatePicker } from '../../assets/Components/DatePicker';
import InputDefault from '../../assets/Components/InputDefault';
import { TextArea } from '../../assets/Components/TextArea';
import { Combobox } from '../../assets/Components/Combobox';
import { MdOutlineTitle } from "react-icons/md";
import { ButtonComp } from '../../assets/Components/ButtonComp';



export const UserAddtask = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className=" w-full  pt-36  burger flex ">
        <div className="flex flex-col ml-10 rounded-xl bg-ivory bg-opacity-50 py-12 items-center w-3/6  ">
          <div className="  w-full flex flex-col px-10 ">
            <div className="font-body  text-4xl flex items-center text-crimson justify-between mx-5 ">
              <span className=" font-bold">Add Task</span> 
            </div>
            <div className="font-text text-lg flex items-center justify-between mx-5 mt-3 ">
              <span className=" font-bold">Start Date:</span> <DatePicker />
            </div>
            <div className=" font-text  text-lg flex  items-center justify-between mx-5 mt-2 ">
              <span className="font-bold">Deadline:</span> <DatePicker />
            </div>
          </div>

          <div className="w-full  flex flex-col font-body items-center   ">
            <InputDefault
              type="text"
              placeholder="Project Name"
             
            />
            <TextArea />
            <Combobox />
            <ButtonComp children={"Add Task"} />
          </div>
        </div>{" "}
        <div className="flex flex-col mx-10 rounded-xl bg-ivory bg-opacity-50 p-5 items-center  w-3/12"></div>
      </div>
    </div>
  );
}
