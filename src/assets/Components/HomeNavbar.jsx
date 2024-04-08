import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import HomeNavBarIcon from "./HomeNavbarIcon";
import { motion } from "framer-motion";
import { MdScale } from "react-icons/md";
import NavBarIcon from "./NavbarIcon";
import { FaHome, FaUserCog } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GrTasks } from "react-icons/gr";
import { MdOutlineAddTask, MdGroupAdd } from "react-icons/md";
import useLogout from "../../Hooks/useLogout";
import Dropdown from "./Dropdown";
import UseZustandLogin from "../../context/UseZustandLogin";
import { jwtDecode } from "jwt-decode";
import { useCustomFetch } from "../../Hooks/useCustomFetch";
import UseZustandGetId from "../../context/UseZustandGetId";


const HomeNavbar = () => {
  const location = useLocation();
  const [changeCol, setChangeCol] = useState(location.pathname === "/Login");
  const [showList, setShowList] = useState(false);
  const [showLogout,setShowLogout] = useState(false);
  const [isUser, setUser] = useState('');


  const handleLogout = useLogout();

  const handleLogoutClick = () => {
    handleLogout("Logout");
  };

  const { isAuthenticatedId, toggleAuthToTrueId,  GetId } = UseZustandGetId();
  const { email, GetUser, isAuthenticated, toggleAuthToTrue } =
    UseZustandLogin();

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
   
  

  const access_token = localStorage.getItem("access_token");
  // const navigate = useNavigate();

   useEffect(() => {
     if (!access_token) {
       setShowLogout(false);
     } else {
      const decodedToken = jwtDecode(access_token);

      const timestamp = decodedToken.exp;
      const milliseconds = timestamp * 1000;

      const dateObject = new Date(milliseconds).toLocaleString("en-US", {
        timeZone: "Asia/Manila",
      });
      const currentDateObject = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Manila",
      });
      
      if (currentDateObject > dateObject) {
         localStorage.removeItem("access_token");
      }
       setShowLogout(true);
       // Decode JWT token
       GetUser(decodedToken.name);
       setUser(decodedToken.name);
       toggleAuthToTrue();
       
      
     }
   }, [access_token, toggleAuthToTrue,]);

   const url_getID = "http://127.0.0.1:8000/api/user/" + isUser;
   const { data } = useCustomFetch(url_getID);
     
         
     useEffect(() => {
       if (data) {
         toggleAuthToTrueId();
          GetId(data.identifier);
       }
     }, [data,toggleAuthToTrueId]);

  return (
    <motion.div
      className="shadow-md w-screen h-20 pb-5 pl-5 pt-5 flex justify-between bg-royalblue bg-opacity-50 absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <div
        className={`font-bold font-body md:text-3xl tracking-wider ${
          changeCol ? "text-white" : "text-royalblue"
        } md:ml-5`}
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
        {!showLogout && (
          <NavLink to="/Login">
            <HomeNavBarIcon text={"Login"} />
          </NavLink>
        )}
        {/* <div className="Home-navbar">hashash</div> */}
        {showLogout && (
          <motion.div onClick={handleClick}>
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
                className="bg-red-5 flex flex-col items-end p-5 bg-serenity rounded-2xl  bg-opacity-50  "
              >
                <NavBarIcon
                  icon={<FaHome size={30} />}
                  text={"DashBoard"}
                  to={"/Home"}
                />
                <NavBarIcon
                  icon={<IoMdAddCircle size={30} />}
                  text={"Task"}
                  to={"/Addtask"}
                />
                {/* <NavBarIcon
                  icon={<MdOutlineAddTask size={30} />}
                  text={"Assign Task"}
                  to={"/AssignTask"}
                />
                <NavBarIcon icon={<GrTasks size={30} />} text={"Progress"} />
                <NavBarIcon
                  icon={<MdGroupAdd size={30} />}
                  text={"Create Team"}
                />
                <NavBarIcon
                  icon={<FaUserCog size={30} />}
                  text={"User Roles"}
                /> */}
              </motion.div>
            )}
          </motion.div>
        )}
        {showLogout && (
          <Dropdown
            information={`${email}`}
            childInfo="Log Out"
            onClick={handleLogoutClick}
          />
        )}
      </div>
    </motion.div>
  );
};

export default HomeNavbar;
