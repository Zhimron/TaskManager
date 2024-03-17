import React from "react";

const NavBarIcon = ({ icon, text  }) => (
  <div className="navbar-icon group">
    {icon}
    <span class="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default NavBarIcon;
