import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBarIcon = ({ icon, text, onClick, to }) => (
  <Link to={to}>
    <motion.div
      className="navbar-icon group"
      onClick={onClick}
      whileHover={{ scale: 0.85 }}
      transition={{duration: 0.01}}
    >
      {icon}

      <span class="navbar-tooltip group-hover:scale-100">{text}</span>
    </motion.div>
  </Link>
);
export default NavBarIcon;
