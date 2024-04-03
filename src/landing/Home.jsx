import React, { memo } from "react";
import HomeNavbar from "../assets/Components/HomeNavbar";
import {motion} from "framer-motion"

const Home = memo(() => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-t from-royalblue to-ivory flex flex-col items-center justify-center">
      {/* <HomeNavbar /> */}
      <div className="w-screen ">
        <div className=" flex  flex-col items-center text-center w-screen  ">
          <motion.h1
            className="text-ivory font-medium font-body  tracking-wider text-3xl md:text-8xl"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              x: {
                type: "spring",
              },
              duration: 1
            }}
          >
            Unleash the power of {" "}
          </motion.h1>
          <motion.h1
            className="text-ivory font-medium font-body  tracking-wider text-3xl md:text-8xl"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
              x: {
                type: "spring",
              },
            }}
          >
            productivity with{" "}
          </motion.h1>
          <motion.h1
            className="text-ivory font-medium font-body  tracking-wider text-3xl md:text-8xl"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
              x: {
                type: "spring",
              },
            }}
          >
            TuskManager{" "}
          </motion.h1>
          {/* <marquee className="animate-bounce duration-150 w-3/5"> */}{" "}
          <div className="w-2/4 items-center justify-center">
            <motion.h1
              className=" text-crimson font-medium md:text-4xl  text-xl font-text mt-5 tracking-wide "
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                y: {
                  type: "spring",
                },
              }}
            >
              where tasks are tamed and teams triumph!
            </motion.h1>
          </div>
          {/* </marquee> */}
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
