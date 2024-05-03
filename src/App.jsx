import { useState , useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './login/Login';
import Navbar from './assets/Components/Navbar';
import Home from './landing/Home';
import AboutUs from './landing/AboutUs';
import { UserHome } from './Userui/Components/UserHome';
import { UserAddtask } from "./Userui/Components/UserAddtask";
import PrivateRoutes from "./utils/PrivateRoutes";

import HomeNavbar from './assets/Components/HomeNavbar';
import { UserAssignTask } from './Userui/Components/UserAssignTask';
import UserCreateTask from './Userui/Components/UserCreateTask';


function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <HomeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/Home" element={<UserHome />} />
            <Route path="/Addtask" element={<UserAddtask />} />
            <Route path="/AssignTask" element={<UserAssignTask />} />
            <Route path="/CreateTask" element={<UserCreateTask />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
