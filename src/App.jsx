import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/Login';
import Navbar from './assets/Components/Navbar';
import Home from './landing/Home';
import AboutUs from './landing/AboutUs';


function App() {
  

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
