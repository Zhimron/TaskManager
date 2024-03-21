import { useState } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Login from './login/Login';
import Navbar from './assets/Components/Navbar';
import Home from './landing/Home';
import AboutUs from './landing/AboutUs';
import { UserHome } from './Userui/UserHome';


function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("accessToken") !== null; 
  };

  const ProtectedRoute = ({ element, path }) => {
    return isAuthenticated() ? element : <Navigate to="/Login" />;
  };
  

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Userform" element={<ProtectedRoute element={<UserHome />}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
