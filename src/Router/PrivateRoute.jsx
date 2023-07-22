import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Shared/Loading/loading";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
