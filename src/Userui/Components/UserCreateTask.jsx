import React from 'react'
import { motion } from 'framer-motion';
import { ButtonComp } from '../../assets/Components/ButtonComp';

const UserCreateTask = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory">
      <div className="  text-4xl flex  text-green-700  mx-5  pt-24 ml-10 font-bold flex-col">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, y: { type: "spring" } }}
          className="flex items-center"
        >
          Create Team
        </motion.div>
        <div className=" w-full mt-5 rounded-md pl-5">
          <div className='w-56'>
            {/* <ButtonComp children="Add Team" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreateTask;