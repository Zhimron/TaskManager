import React from 'react'
import Navbar from "../assets/Components/Navbar";
import Dropdown from "../assets/Components/Dropdown";
import useLogout from "../Hooks/useLogout";
import { useNavigate } from 'react-router-dom';

export const Userlanding = () => {
    const handleLogout = useLogout();

    const handleLogoutClick = () => {
      handleLogout("Logout");
    };

  return (
    <div className="w-screen h- bg-gradient-to-l from-royalblue to-blue-200">
     
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
        <div className="flex justify-center font-body text-4xl"></div>
      </div>
    </div>
  );
}
