import React from "react";
import { CalendarComp } from "../../assets/Components/CalendarComp";


export const UserHome = () => {
 


  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className=" w-full h-full  pt-28 flex flex-col items-center burger">
       <CalendarComp/>
      </div>
    </div>
  );
};
