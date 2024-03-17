import React, { memo } from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { MdOutlineAddTask } from "react-icons/md";
import NavBarIcon from './NavbarIcon';



const Navbar = memo(() => {
  return (
    <div className="bg-background h-screen w-20 absolute flex-col p-3 shadow-2xl bg-royalblue bg-opacity-50">
      <div className=" flex flex-col mt-1 ">
        <NavBarIcon icon={<FaHome size={32} />} text={"Home"} />
        <NavBarIcon icon={<IoMdAddCircle size={32} />} text={"User"} />
        <NavBarIcon icon={<MdOutlineAddTask size={32} />} text={"Task"} />
        <NavBarIcon icon={<GrTasks size={32} />} text={"Progress"} />
      </div>
    </div>
  );
})

export default Navbar