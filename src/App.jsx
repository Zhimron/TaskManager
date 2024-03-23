import { useState , useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './login/Login';
import Navbar from './assets/Components/Navbar';
import Home from './landing/Home';
import AboutUs from './landing/AboutUs';
import { UserHome } from './Userui/Components/UserHome';
import { UserAddtask } from "./Userui/Components/UserAddtask";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Userlanding } from './Userui/Userlanding';
import HomeNavbar from './assets/Components/HomeNavbar';



function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <HomeNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/Home" element={<UserHome />} />
            <Route path="/Userform" element={<Userlanding />} />
            <Route
              path="/Addtask"
              element={<UserAddtask />}
            />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
