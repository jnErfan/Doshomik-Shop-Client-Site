import { Box } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

// Private Route for those who are not logged in to the web site
const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: "99999",
          backgroundColor: "#a6e8fc",
          overflow: "hidden",
          width: "100%",
          position: "fixed",
        }}
      >
        <img
          width="40%"
          style={{
            filter:
              "drop-shadow(1px 1px 0 #fff) drop-shadow(-1px 1px 0 #ffffff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
          }}
          src="https://i.ibb.co/M5BKvzB/unnamed.gif"
          alt=""
        />
      </Box>
    );
  }
  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default PrivateRoute;
