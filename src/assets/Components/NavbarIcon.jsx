import React from "react";
import { Link } from "react-router-dom";

const NavBarIcon = ({ icon, text, onClick, to }) => (
  <Link to={to}>
    <div className="navbar-icon group" onClick={onClick}>
      {icon}

      <span class="navbar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);
export default NavBarIcon;
