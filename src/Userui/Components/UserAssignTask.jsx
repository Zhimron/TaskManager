import React from 'react'
import { MdAssignmentAdd } from "react-icons/md";
import { motion } from 'framer-motion';

export const UserAssignTask = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className="  text-4xl flex items-center text-green-700  mx-5  pt-32 ml-10 font-bold">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, y: { type: "spring" } }}
          className="flex items-center"
        >
          Assign Task <MdAssignmentAdd className=" text-slate-800 ml-3 " />
        </motion.div>
      </div>
    </div>
  );
}
