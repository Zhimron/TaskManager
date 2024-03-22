import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Navbar from './assets/Components/Navbar';
import Home from './landing/Home';
import AboutUs from './landing/AboutUs';
import { UserHome } from './Userui/UserHome';
import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/Userform" element={<UserHome />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
