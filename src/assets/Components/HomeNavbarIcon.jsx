import React from "react";
import { motion } from "framer-motion";

const HomeNavBarIcon = ({ text, onClick }) => (
  <motion.div whileTap={{ scale: 0.8 }}>
    <span className="Home-navbar" onClick={onClick}>
      {text}
    </span>
  </motion.div>
);
export default HomeNavBarIcon;
