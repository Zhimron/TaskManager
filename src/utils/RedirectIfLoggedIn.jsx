import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectIfLoggedIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
     navigate("/Userform");
    }
  }, []);

  return null; // or you can return any other component if needed
};

export default RedirectIfLoggedIn;
