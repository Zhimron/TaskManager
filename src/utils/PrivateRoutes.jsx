import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  // Retrieve token from local storage
  const token = localStorage.getItem("access_token");

  // Check if token exists and is not expired (you might need additional logic for token expiration)
  const isAuthenticated = token !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
