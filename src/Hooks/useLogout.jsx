import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseZustandLogin from "../context/UseZustandLogin";
import UseZustandGetId from "../context/UseZustandGetId";

const useLogout = (children) => {
  const navigate = useNavigate();
  const { toggleAuthentication } = UseZustandLogin();
  const { toggleAuthenticationId } = UseZustandGetId();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw new Error("No access token found");
      }
      
      const url_logout = "http://127.0.0.1:8000/api/logout"; // Specify your logout endpoint
      const response = await fetch(url_logout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to logout");
      }
       
      // Assuming successful logout, clear token and navigate to login page
      localStorage.removeItem("access_token");
      toggleAuthentication();
      toggleAuthenticationId();
      navigate("/Login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error here, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    if(children === "Logout"){
      handleLogout();
    }
         
  }, []); 

  return handleLogout;
};

export default useLogout;
