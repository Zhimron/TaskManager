import React, { memo } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import InputDefault from "../assets/Components/InputDefault";
import { ButtonComp } from "../assets/Components/ButtonComp";
import { motion } from "framer-motion";

const Login = memo(() => {
  return (
    <div className="w-screen h-screen bg-royalblue flex justify-center items-center">
      <div className="flex justify-center bg-ivory bg-opacity-25 w-2/6 h-3/5 rounded-md">
        <div className="flex flex-col mt-16 items-center w-2/3 h-2/3">
          <motion.img
            src="/src/assets/pictures/walrus.png"
            className="w-20 h-20 mb-5"
            initial={{ y: -20 }}
            animate={{ y: 0 }} 
            transition={{
              y: {
                type: "spring",
                repeat: Infinity, 
                repeatType: "reverse",
              
              },
            }}
          />
          <h1 className="font-body text-3xl">Tusk Manager</h1>
          <h1 className="font-body text-3xl">Login </h1>
          <InputDefault type="text" placeholder="Username" icon={FaUser} />
          <InputDefault type="Password" placeholder="Password" icon={FaLock} />
          <ButtonComp>Login</ButtonComp>
        </div>
      </div>
    </div>
  );
});

export default Login;
