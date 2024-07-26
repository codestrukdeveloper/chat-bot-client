// ProtectedRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthProfile } from "./hooks/useAuthProfile";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, loading } = useAuthProfile();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("services");

  // Handle loading state
  if (loading || isAuthenticated === null) {
    return <div>Loading...</div>; // Or a spinner component
  }

  // Check if the current path is '/dashboard' and the 'services' query parameter is missing
  const isDashboardWithoutQuery =
    (location.pathname === "/dashboard" && query === null) || query === "";

  if (isAuthenticated && isDashboardWithoutQuery) {
    return <Navigate to="/services" replace />;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  // Render the component if authenticated and the query parameter is present or not on /dashboard
  return <Component {...rest} />;
};

export default ProtectedRoute;
