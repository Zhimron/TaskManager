import React from "react";
import Navbar from "../assets/Components/Navbar";
import Dropdown from "../assets/Components/Dropdown";
import { useCustomMutation } from "../Hooks/useCustomMutation";
import { useNavigate } from "react-router-dom";

export const UserHome = () => {
  const url_logout = "http://127.0.0.1:8000/api/logout";
  const { data, mutate } = useCustomMutation(url_logout, "POST");
  const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Assuming you've stored the token in localStorage

        await mutate({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // If the logout request succeeds, navigate to the login page
        navigate("/Login");
      } catch (error) {
        console.error("Logout failed:", error);
        // Handle logout failure here
      }
    };

  return (
    <div className="w-screen h-screen bg-gradient-to-l from-royalblue to-blue-200">
      <Navbar />
      <div className="container-div">
        <div className="flex justify-end items-center">
          <div className="flex flex-col font-text mr-4 justify-end items-end">
            <div className="text-xl">player 1</div>
            <div className="text-sm">player 1</div>
          </div>
          <Dropdown
            information="D"
            childInfo="Log Out"
            onClick={handleLogout}
          />
        </div>
        <div className="flex justify-center font-body text-4xl">Home</div>
      </div>
    </div>
  );
};
