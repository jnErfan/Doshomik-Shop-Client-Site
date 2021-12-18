import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Stack
        sx={{
          width: "100%",
          position: "fixed",
          zIndex: "99999",
          backgroundColor: "#081E3E",
          height: "100vh",
          overflow: "hidden",
        }}
        spacing={2}
      >
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  }
  return user?.email === "hypereyegaming@gmail.com" ? (
    children
  ) : (
    <Navigate to="/adminLogin" state={{ from: location.pathname }} />
  );
};

export default AdminRoute;
