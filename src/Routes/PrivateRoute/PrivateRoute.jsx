import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import LoadingSpinner from "../../providers/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  // Loading
  if (loading) {
    return (
      <LoadingSpinner/>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login"  replace></Navigate>;
};

export default PrivateRoute;
