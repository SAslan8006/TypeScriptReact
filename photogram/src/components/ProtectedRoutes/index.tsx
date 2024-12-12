import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {};

const ProtectedRoutes = (props: Props) => {
  const isAuthenticated: boolean = true;
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
