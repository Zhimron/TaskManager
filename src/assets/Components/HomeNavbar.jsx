import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import HomeNavBarIcon from './HomeNavbarIcon';

export class HomeNavbar extends Component {
  render() {
    return (
      <div className="shadow-md w-screen h-20 pb-5 pl-5 pt-5 flex justify-between bg-royalblue bg-opacity-50">
        <div className="font-bold font-body text-3xl text-royalblue ml-14 ">
         
            Tusk Manager 
        
        </div>
        <div className=" flex font-body font-medium text-xl mr-14">
          <NavLink to="/">
            <HomeNavBarIcon text={"Home"} />
          </NavLink>
          <NavLink to="/Aboutus">
            <HomeNavBarIcon text={"About Us"} />
          </NavLink>
          <NavLink to="/Login">
            <HomeNavBarIcon text={"Login"} />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;