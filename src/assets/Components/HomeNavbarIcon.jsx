import React from "react";
import { motion } from "framer-motion";

const HomeNavBarIcon = ({ text, onClick, icon }) => (
  <motion.div whileTap={{ scale: 0.8 }}>
    <span className="Home-navbar" onClick={onClick}>
      {text} <div className="ml-5">{icon}</div>
    </span>
  </motion.div>
);
export default HomeNavBarIcon;
