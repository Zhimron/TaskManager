import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { BiSolidErrorAlt } from "react-icons/bi";
import { HiMiniInformationCircle } from "react-icons/hi2";


function Modal({messageBool , Info}) {
    const [message, setMessage] = useState(messageBool);
    useEffect(() => {
      if (message) {
        setMessage(true);
        
      } else {
        setMessage(false);
      }
    }, [messageBool]);
    
  return (
    <motion.div
      className=" flex absolute w-full  justify-center scale-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="modal-box">
        {message ? (
          <h3 className="font-bold text-lg font-text flex items-center justify-center  ">
            {" "}
            <HiMiniInformationCircle className="text-green-700 text-3xl" />{" "}
            <span className="ml-1 text-3xl">Success</span>
          </h3>
        ) : (
          <h3 className="font-bold text-lg   font-text flex items-center justify-center    ">
            {" "}
            <BiSolidErrorAlt className="text-crimson text-3xl" />{" "}
            <span className="ml-1 text-3xl"> Failed </span>
          </h3>
        )}

        <p className="py-4 flex items-center justify-center ">{Info}</p>
      </div>
    </motion.div>
  );
}

export default Modal