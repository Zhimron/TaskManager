import React, { memo } from 'react'
import HomeNavbar from "../assets/Components/HomeNavbar";

const AboutUs = memo(() => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-t from-royalblue to-ivory flex flex-col items-center">
      <HomeNavbar />
      <div className="w-full h-full flex justify-center p-10  ">
        <div className="flex flex-col items-center w-2/3 rounded-lg">
          <img
            src="/src/assets/pictures/walrus.png"
            className="w-40 h-40  mb-10"
          />
          {/* <h1 className="text-serenity font-light  text-4xl font-text whitespace-normal indent-10 text-wrap">
            Welcome to TuskManager, your premier destination for overseeing and
            organizing the mighty tusks of tasks within your workforce herd!
            With TuskManager, you can efficiently corral and track every tusk,
            ensuring your employees stay on the right trunk of productivity.
            Let's tuskle through those tasks together!
          </h1> */}
          <h1 className="text-serenity font-light  text-4xl font-text whitespace-normal indent-10 text-wrap">
            TuskManager is the brainchild of a passionate team committed to
            simplifying task management for businesses of all sizes. Our
            platform is designed to be intuitive, efficient, and flexible,
            ensuring that users can effortlessly corral their tasks and steer
            their teams towards success. With a focus on innovation and user
            experience, TuskManager aims to be the go-to solution for businesses
            seeking to tame their workload and unleash their productivity
            potential. Join us on the journey to efficient task management and
            watch your business thrive with TuskManager by your side
          </h1>
        </div>
      </div>
    </div>
  );
})

export default AboutUs