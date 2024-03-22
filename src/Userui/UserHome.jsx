import React from "react";
import Navbar from "../assets/Components/Navbar";
import Dropdown from "../assets/Components/Dropdown";
import useLogout from "../Hooks/useLogout";

export const UserHome = () => {
 const handleLogout = useLogout();
  const handleLogoutClick = () => {
    handleLogout("Logout");
  };


  return (
    <div className="w-screen h-screen bg-gradient-to-l from-royalblue to-blue-200">
      <Navbar />
      <div className="container-div">
        <div className="flex justify-end items-center">
          <div className="flex flex-col font-text mr-4 justify-end items-end">
            <div className="text-xl">player 1</div>
            <div className="text-sm">player 1</div>
          </div>
          <Dropdown
            information="D"
            childInfo="Log Out"
            onClick={handleLogoutClick}
          />
        </div>
        <div className="flex justify-center font-body text-4xl">Home</div>
      </div>
    </div>
  );
};
