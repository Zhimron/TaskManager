  import React, { memo ,useState, useEffect} from "react";
  import { useForm } from 'react-hook-form';
  import { FaUser, FaLock, FaUnlock, FaArrowRight } from "react-icons/fa";
  import InputDefault from "../assets/Components/InputDefault";
  import { ButtonComp } from "../assets/Components/ButtonComp";
  import { motion } from "framer-motion";
  import { MdEmail } from "react-icons/md";
  import { useCustomMutation } from "../Hooks/useCustomMutation";


  const Login = memo(() => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginerror,setloginError] = useState('');
    
    const url_log = "http://127.0.0.1:8000/api/login";
    const { data: datalogin, mutate: mutateLogin } = useCustomMutation(
      url_log,
      "POST"
    );
     const url_reg = "http://127.0.0.1:8000/api/user";
     const { data: dataregister, mutate: mutateRegister } = useCustomMutation(
       url_reg,
       "POST"
     );

    const handleSubmitLog = (e)=>{
      e.preventDefault();
      if (!username||!password) {
        setloginError("Complete all the fields");
        return;
      }
       mutateLogin({
         name: username,
         password: password,
       });
    }
      const [regUsername, setregUsername] = useState('');
      const [regPassword, setregPassword] = useState('');
      const [regEmail, setregEmail] = useState('');
      const [regReentrypassword, setregReentryPassword] = useState('');
      const [registererror, setRegisterError] = useState('');

      const handleSubmitReg = (e) => {
        e.preventDefault();
        if (!regUsername || !regEmail || !regPassword || !regReentrypassword) {
          setRegisterError("Complete all the fields");
          return;
        }
        if(regPassword !== regReentrypassword){
          setRegisterError("Password not Match");
          return;
        }
          mutateRegister({
            name: regUsername,
            email: regEmail,
            password: regPassword,
          });
      };

    const [signUp, toSignUp] = useState(false);
    
    const triggerSignUp = () =>{
      toSignUp(true);
      setloginError("");
    };
    const triggerLogIn = () => {
    toSignUp(false);
    setRegisterError("");
    };

    return (
      <div className="w-screen h-screen bg-royalblue flex justify-center items-center">
        {!signUp && (
          <motion.div
            className="flex justify-center bg-ivory bg-opacity-25 w-2/6 h-2/3 rounded-md"
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
              <form
                onSubmit={handleSubmitLog}
                className="flex flex-col justify-center items-center w-full"
              >
                <InputDefault
                  type="text"
                  placeholder="Username"
                  icon={FaUser}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputDefault
                  type="password"
                  placeholder="Password"
                  value={password}
                  icon={FaLock}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {loginerror && (
                  <p className="text-crimson mt-3">{loginerror}</p>
                )}
                <ButtonComp>log-in</ButtonComp>
              </form>
              <button
                className="w-full flex pt-3 justify-center"
                onClick={triggerSignUp}
              >
                <h1 className="font-text tracking-tighter text-black text-xl flex">
                  Sign-up?
                  <FaArrowRight className="mt-1 ml-2" />
                </h1>
              </button>
            </div>
          </motion.div>
        )}
        {signUp && (
          <motion.div
            className="flex justify-center bg-ivory bg-opacity-25 w-2/6 h-5/6 rounded-md"
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{
              scale: {
                // type: "spring",
                ease: "easeInOut",
                duration: 0.3,
              },
            }}
          >
            {/* <form onSubmit={handleFormSubmit}> */}

            <div className="flex flex-col mt-16 items-center w-2/3 h-2/3">
              <img
                src="/src/assets/pictures/walrus.png"
                className="w-1/4 h-1/4 mb-5"
              />
              <h1 className="font-body text-3xl">Tusk Manager</h1>
              <h1 className="font-body text-3xl mt-2">Sign Up </h1>
              <form
                onSubmit={handleSubmitReg}
                className="flex flex-col justify-center items-center w-full"
              >
                <InputDefault
                  type="email"
                  placeholder="Email"
                  icon={MdEmail}
                  onChange={(e) => setregEmail(e.target.value)}
                />
                <InputDefault
                  type="text"
                  placeholder="Username"
                  icon={FaUser}
                  onChange={(e) => setregUsername(e.target.value)}
                />
                <InputDefault
                  type="Password"
                  placeholder="Password"
                  icon={FaLock}
                  onChange={(e) => setregPassword(e.target.value)}
                />
                <InputDefault
                  type="Password"
                  placeholder="Re-entry Password"
                  icon={FaUnlock}
                  onChange={(e) => setregReentryPassword(e.target.value)}
                />
                {registererror && (
                  <p className="text-crimson mt-3">{registererror}</p>
                )}
                <ButtonComp>Sign-up</ButtonComp>
              </form>
              <button
                className="w-full flex pt-3  justify-center"
                onClick={(triggerLogIn)}
              >
                <h1 className=" font-text tracking-tighter text-black text-xl flex">
                  Log-in <FaArrowRight className="mt-1 ml-2" />
                </h1>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    );
  });

  export default Login;
