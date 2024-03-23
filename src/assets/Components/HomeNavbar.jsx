import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HomeNavBarIcon from "./HomeNavbarIcon";
import { motion } from "framer-motion";
import { MdScale } from "react-icons/md";
import NavBarIcon from "./NavbarIcon";
import { FaHome, FaUserCog } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { MdOutlineAddTask, MdGroupAdd } from "react-icons/md";

const HomeNavbar = () => {
  const location = useLocation();
  const [changeCol, setChangeCol] = useState(location.pathname === "/Login");
  const [showList, setShowList] = useState(false);
 
  const handleClick = () =>{
   setShowList((prevState) => !prevState); 
  }


  useEffect(() => {
    setChangeCol(location.pathname === "/Login");
  }, [location.pathname]);

  // const handleChange = () => {
  //   setChangeCol(false);
  // };

  const handleChangeBack = () => {
    setChangeCol(false);
  };

  return (
    <div className="shadow-md w-screen h-20 pb-5 pl-5 pt-5 flex justify-between bg-royalblue bg-opacity-50 absolute">
      <div
        className={`font-bold font-body md:text-3xl tracking-wider ${
          changeCol ? "text-white" : "text-royalblue"
        } md:ml-28`}
      >
        Tusk Manager
      </div>
      {/* <div className="flex "> */}
      <div className="flex font-body font-medium text-xl mr-14 scale-0 md:scale-100">
        <NavLink to="/">
          <HomeNavBarIcon text={"Home"} onClick={handleChangeBack} />
        </NavLink>
        {/* <NavLink to="/Aboutus">
          <HomeNavBarIcon text={"About Us"} onClick={handleChangeBack} />
        </NavLink> */}
        <NavLink to="/Login">
          <HomeNavBarIcon text={"Login"} />
        </NavLink>
        {/* <div className="Home-navbar">hashash</div> */}
        <motion.div onClick={handleClick} >
          <HomeNavBarIcon text={"Menu"} />
          {showList && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className="bg-red-5 flex flex-col items-end bg-serenity bg-opacity-50  rounded-lg "
            >
              <NavBarIcon
                icon={<FaHome size={30} />}
                text={"Home"}
                to={"/Home"}
              />
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
              <NavBarIcon
                icon={<MdGroupAdd size={30} />}
                text={"Create Team"}
              />
              <NavBarIcon icon={<FaUserCog size={30} />} text={"User Roles"} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeNavbar;
