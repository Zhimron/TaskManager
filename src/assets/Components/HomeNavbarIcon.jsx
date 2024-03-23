import React from "react";

const HomeNavBarIcon = ({ text , onClick }) => (
  <div >
    <span className="Home-navbar" onClick={onClick}>{text}</span>
  </div>
);
export default HomeNavBarIcon;
