import React, { memo ,useState} from "react";
import { FaUser, FaLock, FaUnlock } from "react-icons/fa";
import InputDefault from "../assets/Components/InputDefault";
import { ButtonComp } from "../assets/Components/ButtonComp";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const Login = memo(() => {

  const [signUp,toSignUp] = useState(false);

  const triggerSignUp = () =>{
    toSignUp(true);
  }
  const triggerLogIn = () => {
  toSignUp(false);
  };

  return (
    <div className="w-screen h-screen bg-royalblue flex justify-center items-center">
      {!signUp && (
        <motion.div
          className="flex justify-center bg-ivory bg-opacity-25 w-2/6 h-3/5 rounded-md"
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{
            y: {
              type: "spring",
              duration: 1,
            },
          }}
        >
          <div className="flex flex-col mt-16 items-center w-2/3 h-2/3">
            <img
              src="/src/assets/pictures/walrus.png"
              className="w-20 h-20 mb-5"
              
            />
            <h1 className="font-body text-3xl">Tusk Manager</h1>
            <h1 className="font-body text-3xl mt-2">Login </h1>
            <InputDefault type="text" placeholder="Username" icon={FaUser} />
            <InputDefault
              type="Password"
              placeholder="Password"
              icon={FaLock}
            />
            <ButtonComp>log-in</ButtonComp>
            <h1
              className="mt-5 font-text tracking-tighter text-ivory"
              onClick={triggerSignUp}
            >
              Sign-up?
            </h1>
          </div>
        </motion.div>
      )}
      {signUp && (
        <motion.div
          className="flex justify-center bg-ivory bg-opacity-25 w-2/6 h-4/5 rounded-md"
          initial={{ y: 70 }}
          animate={{ y: 0 }}
          transition={{
            y: {
              type: "spring",
              duration: 1,
            },
          }}
        >
          <div className="flex flex-col mt-16 items-center w-2/3 h-2/3">
            <img
              src="/src/assets/pictures/walrus.png"
              className="w-20 h-20 mb-5"
            
            />
            <h1 className="font-body text-3xl">Tusk Manager</h1>
            <h1 className="font-body text-3xl mt-2">Sign Up </h1>
            <InputDefault type="email" placeholder="Email" icon={MdEmail} />
            <InputDefault type="text" placeholder="Username" icon={FaUser} />
            <InputDefault
              type="Password"
              placeholder="Password"
              icon={FaLock}
            />
            <InputDefault
              type="Password"
              placeholder="Re-entry Password"
              icon={FaUnlock}
            />
            <ButtonComp>Sign-up</ButtonComp>
            <h1
              className="mt-5 font-text tracking-tighter text-ivory"
              onClick={triggerLogIn}
            >
              Log-in?
            </h1>
          </div>
        </motion.div>
      )}
    </div>
  );
});

export default Login;
