import React from 'react'
import { DatePicker } from '../../assets/Components/DatePicker';


export const UserAddtask = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className=" w-full h-full  pt-36  burger ">
        <div className=" flex items-start pl-10">
          <div className="mt-2 font-body mr-5 ">From:</div>
          <DatePicker />
          <div className="mt-2 font-body mx-5 ">To:</div>
          <DatePicker />
        </div>
      </div>
    </div>
  );
}
