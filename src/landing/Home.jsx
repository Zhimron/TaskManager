import React, { memo } from "react";
import HomeNavbar from "../assets/Components/HomeNavbar";
import {motion} from "framer-motion"

const Home = memo(() => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-t from-royalblue to-ivory flex flex-col items-center">
      <HomeNavbar />
      <div className="w-full h-full  ">
        <div className=" items-center text-center pt-20">
          <motion.h1
            className="text-ivory font-medium text-8xl font-body pt-20 tracking-wider "
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{
              rotate: {
                type: "spring",
              },
            }}
          >
            Unleash the power of productivity with TuskManager{" "}
          </motion.h1>
          <motion.h1
            className=" text-crimson font-medium text-4xl font-text mt-5 tracking-tighter"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              rotate: {
                type: "spring",
              },
            }}
          >
            where tasks are tamed and teams triumph!
          </motion.h1>

          {/* <h1 className="text-crimson font-light  text-4xl font-body whitespace-normal indent-10  ">
              Welcome to TuskManager, your premier destination for overseeing
              and organizing the mighty tusks of tasks within your workforce
              herd! With TuskManager, you can efficiently corral and track every
              tusk, ensuring your employees stay on the right trunk of
              productivity. Let's tuskle through those tasks together!
            </h1> */}
        </div>
      </div>
    </div>
  );
});

export default Home;
