import React, { memo ,useEffect,useState } from 'react'
import { FaHome, FaUserCog } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { MdOutlineAddTask, MdGroupAdd } from "react-icons/md";
import NavBarIcon from './NavbarIcon';



const Navbar = memo(() => {
  
  return (
    <div className="bg-background h-full w-15 absolute flex-col p-3 shadow-2xl bg-royalblue bg-opacity-50">
      <div className=" flex flex-col mt-1 ">
        <NavBarIcon icon={<FaHome size={30} />} text={"Home"} to={"/Home"} />
        <NavBarIcon
          icon={<IoMdAddCircle size={30} />}
          text={"Add Task"}
          to={"/Addtask"}
        />
        <NavBarIcon
          icon={<MdOutlineAddTask size={30} />}
          text={"Assign Task"}
        />
        <NavBarIcon icon={<GrTasks size={30} />} text={"Progress"} />
        <NavBarIcon icon={<MdGroupAdd size={30} />} text={"Create Team"} />
        <NavBarIcon icon={<FaUserCog size={30} />} text={"User Roles"} />
      </div>
    </div>
  );
})



export default Navbar