import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HomeNavBarIcon from "./HomeNavbarIcon";

class HomeNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeCol: true,
    };
  }

  handleChange = () => {
    this.setState({ changeCol: false });
  };
  handleChangeBack = () => {
    this.setState({ changeCol: true });
  };

  render() {
    const { changeCol } = this.state;

    return (
      <div className="shadow-md w-screen h-20 pb-5 pl-5 pt-5 flex justify-between bg-royalblue bg-opacity-50 absolute">
        <div
          className={`font-bold font-body md:text-3xl tracking-wider ${
            changeCol ? "text-royalblue" : "text-white"
          } md:ml-28`}
        >
          Tusk Manager
        </div>
        <div className="flex font-body font-medium text-xl mr-14 scale-0 md:scale-100">
          <NavLink to="/">
            <HomeNavBarIcon text={"Home"} onClick={this.handleChangeBack} />
          </NavLink>
          {/* <NavLink to="/Aboutus">
            <HomeNavBarIcon text={"About Us"} onClick={this.handleChangeBack} />
          </NavLink> */}
          <NavLink to="/Login">
            <HomeNavBarIcon text={"Login"} onClick={this.handleChange} />
          </NavLink>
          {/* <div className="Home-navbar">hashash</div> */}
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
