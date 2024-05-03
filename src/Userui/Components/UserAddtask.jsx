import React, { useState,useEffect } from 'react'
import { DatePicker } from '../../assets/Components/DatePicker';
import InputDefault from '../../assets/Components/InputDefault';
import { TextArea } from '../../assets/Components/TextArea';
import { Combobox } from '../../assets/Components/Combobox';
import { MdOutlineTitle } from "react-icons/md";
import { ButtonComp } from '../../assets/Components/ButtonComp';
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import { useCustomMutation } from '../../Hooks/useCustomMutation';
import Modal from '../../assets/Components/Modal';
import UseZustandGetId from '../../context/UseZustandGetId';


export const UserAddtask = () => {
  const [isShow,SetIsShow] = useState(false);

  const handleChange = () =>{
    SetIsShow((prevState) => !prevState);
    
  }
  
  const [project, SetProject] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    SetProject(event.target.value.toLowerCase());
  };

  const {userid} = UseZustandGetId();

  
  const url_getTask = "http://127.0.0.1:8000/api/gettask";
  //post nalang
  const { data: dataFetch, mutate: mutateData } = useCustomMutation(
    url_getTask,
    "POST"
  );


  useEffect(() => {
  mutateData({
    user_id: userid,
  });
}, []);


useEffect(() => {
  if (dataFetch && project) {
    const lowercaseProject = project.toLowerCase(); // Convert project to lowercase
    const filteredTasks = dataFetch.filter(
      (task) =>
        task.project_name &&
        task.project_name.toLowerCase() .includes(lowercaseProject)
    );
    setFilteredData(filteredTasks);
  } else {
    setFilteredData(dataFetch);
  }
}, [dataFetch, project]);
  
   
  

  
   const [deadline, SetDeadline] = useState('');
  //  const [time, SetTime] = useState("");
   const [projectName,SetProjectName] = useState("");
   const [description, SetDescription] = useState('');
   const [typeOfTask, SetTypeOfTask] = useState("");
   const [error, setError] = useState("");

   const url_addTask = "http://127.0.0.1:8000/api/addtask";
   const { data: dataMutation , mutate: taskMutate } = useCustomMutation(url_addTask,"POST");

   const handleSubmitTask =(e)=>{
   e.preventDefault();
   if (!projectName || !deadline || !description || !typeOfTask) {
     setError("Complete All fields");
     console.log(error);
     return;
   }
    
     taskMutate({
       user_id: userid,
       project_name: projectName,
       task_description: description,
       task_category: typeOfTask,
       deadline: deadline,
     });   
   };
   
   const [showModal,SetShowModal] = useState(false);
   const [Message, SetMessage] = useState("");
   const [info, SetInfo] = useState("");

    useEffect(() => {
      let timerId;
      if (dataMutation) {
        if (dataMutation.Status != "Task Not Added") {

          SetShowModal(true);      
          SetMessage("Task not added");
          SetInfo("");

        } else {

          SetShowModal(true);
          SetMessage("Task added");
          SetInfo("projectName");

        }
      } 

      timerId = setTimeout(() => {
        SetShowModal(false);
      }, 1000);
      return ()=> {
        clearTimeout(timerId);
      }

    }, [dataMutation]);


   const url_GetTaskbyID = "http://127.0.0.1:8000/api/gettaskID";

   const { data: datataskID, mutate: taskIDMutate } = useCustomMutation(
      url_GetTaskbyID,
      "POST"
   );

  const handleShowId = (e) => {
    taskIDMutate({
      id:e
    });
    
  }
  
  

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-royalblue to-ivory ">
      <div className="  text-4xl flex items-center text-green-700  mx-5  pt-24 ml-10">
        <motion.div
          className="w-3/12 flex items-center justify-start p-1  font-body "
          whileTap={{ scale: 0.7 }}
          onClick={handleChange}
          whileHover={{ scale: 1 }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, y: { type: "spring" } }}
            className="flex items-center"
          >
            <Link>Task</Link>{" "}
            <IoMdAddCircle size={30} className="text-slate-800 ml-3" />
          </motion.div>
        </motion.div>
        <div className="w-3/12 pl-16">
          <InputDefault type="text" placeholder="Search Project" value={project}  onChange={handleInputChange}/>
        </div>
        <motion.div
          className="ml-96 pl-10 flex items-center justify-end p-1 font-text "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, y: { type: "spring" } }}
        >
          <Link>About The Task</Link>{" "}
        </motion.div>
      </div>
      <div className=" w-full mt-5 burger flex ">
        {showModal && <Modal messageBool={Message} Info={info} />}
        {isShow ? (
          <form
            onSubmit={handleSubmitTask}
            className="flex flex-col ml-10 rounded-3xl bg-ivory bg-opacity-25 py-12 items-center w-3/6 shadow-md h-[37em] "
          >
            <div className="  w-full flex flex-col px-12 ">
              {/* <div className="font-text text-lg flex items-center justify-between mx-5 mt-3 ">
              <span className=" font-bold">Start Date:</span> <DatePicker />
            </div> */}

              <div className=" font-text  text-lg flex  items-center justify-between mx-5 mt-2 ">
                <span className="font-bold">Deadline:</span>{" "}
                <div className="flex">
                  <DatePicker
                    value={deadline}
                    onChange={(e) => SetDeadline(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col font-body items-center   ">
              <InputDefault
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => SetProjectName(e.target.value)}
              />
              <TextArea
                placeholder="Description of Task"
                value={description}
                onChange={(e) => SetDescription(e.target.value)}
              />
              <Combobox
                value={typeOfTask}
                onChange={(e) => SetTypeOfTask(e.target.value)}
              />

              <ButtonComp children={"Add Task"} />
            </div>
          </form>
        ) : (
          <motion.div
            className="flex flex-col ml-10 rounded-3xl bg-ivory bg-opacity-25 py-5 px-10 w-3/6 shadow-md h-[37em] overflow-auto scroll-smooth snap-y"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredData ? (
              Array.isArray(filteredData) &&
              filteredData.map((field, index) => (
                <motion.div
                  className="flex font-text font-bold snap-center"
                  whileHover={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                  initial={{ scale: 1, opacity: 0 }}
                  //onClick={(e) => setId(e.target.value)}
                  key={index}
                  onClick={() => handleShowId(field.id)}
                >
                  <div className="p-5 w-full">
                    <div className=" text-lg text-crimson uppercase bg-slate-500 rounded-md pl-3 py-5 bg-opacity-50 tracking-wider ">
                      {field.project_name}
                    </div>
                    <div className=" pl-3 mt-2 text-blue-400">
                      <a className="text-green-800">Type:</a>{" "}
                      {field.task_category}
                    </div>
                    <div className=" pl-3 mt-2">
                      <a className="text-green-800">Deadline:</a>{" "}
                      {field.deadline}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center h-full font-body">
                Loading Task
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
          </motion.div>
        )}
        <motion.div
          className="flex flex-col mx-10 rounded-3xl bg-ivory bg-opacity-50 py-5 px-10 w-3/6 shadow-md h-[37em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* {Array.isArray(datataskID) &&
            datataskID.map((datas, index) => ( */}

          {datataskID ? (
            <div className="flex">
              <div className="p-5 w-full h-full">
                <div className="font-text font-bold text-3xl bg-slate-500 text-white uppercase rounded-md pl-3 py-5 bg-opacity-50 flex justify-center  ">
                  {datataskID.project_name}
                </div>
                <div className="pl-3  flex mt-5 ">
                  <p className="font-body text-green-800">Type:</p>{" "}
                  <p className="font-text">{datataskID.task_category} </p>
                </div>
                <div className=" pl-3 mt-5 flex">
                  <p className="font-body text-green-800">Deadline:</p>
                  <p className="font-text">{datataskID.deadline}</p>
                </div>
                <div className="p-5  tracking-wider  mt-5 rounded-lg font-text text-justify text-wrap break-all border-2 border-indigo-950">
                  {datataskID.task_description}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full font-body">
              Choose any Task To Show in this panel
              <span className="loading loading-dots loading-lg"></span>
            </div>
          )}

          {/* ))} */}
        </motion.div>
      </div>
    </div>
  );
}
