import React, { memo,useState } from 'react'
import HomeNavbar from "../assets/Components/HomeNavbar";
import { motion } from "framer-motion";


const AboutUs = memo(() => {
  const [focus,mouseFocus] = useState(false);

  const onHover = () =>{
    mouseFocus(true);
  }
  const outHover = () => {
    mouseFocus(false);
  };


  return (
    <div className=" w-screen h-screen bg-gradient-to-t from-royalblue to-ivory flex flex-col items-center">
      <HomeNavbar />
      <div className="w-full h-full flex justify-center p-10  ">
        <div className="flex flex-col items-center w-2/3 rounded-lg">
          <motion.img
            src="/src/assets/pictures/walrus.png"
            className="w-40 h-40  mb-10"
            initial={{ rotate: -5}}
            animate={{ rotate: 0 }}
            transition={{
              rotate: {
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
          {/* <h1 className="text-serenity font-light  text-4xl font-text whitespace-normal indent-10 text-wrap">
            Welcome to TuskManager, your premier destination for overseeing and
            organizing the mighty tusks of tasks within your workforce herd!
            With TuskManager, you can efficiently corral and track every tusk,
            ensuring your employees stay on the right trunk of productivity.
            Let's tuskle through those tasks together!
          </h1> */}
          <motion.h1
            className="text-serenity font-light  text-4xl font-text whitespace-normal text-center text-wrap tracking-wider "
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              rotate: {
                type: "spring",
              },
            }}
          >
            Where task wrangling meets team triumph! Spice up your workflow,
            tame your workload, and watch your business soar with our intuitive
            platform. Let's turn your to-do list into a to-done list{" "}
            <motion.span
              onHoverStart={onHover}
              onHoverEnd={outHover}
              className="font-bold text-crimson"

            >
              together!{" "}
            </motion.span>
          </motion.h1>
          {focus && (
            <motion.img
              initial={{ y: 50}}
              animate={{ y: 0 }}
              transition={{duration: 1       
              }}
              src="/src/assets/pictures/giphy.gif"
              className="rounded-3xl mt-5 "
            />
          )}
        </div>
      </div>
    </div>
  );
})

export default AboutUs