import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

// 404 Page Not Fount Component
const NotFound = () => {
  return (
    <Box sx={{textAlign: 'center', mt:'100px'}}>
     <img Width="40%" src="https://i.ibb.co/W2yZJCs/undraw-Page-not-found-re-e9o6.png" alt="" />
      <h1 style={{fontWeight: 'bold', color:"#1976D2", marginBottom:"50px"}}>Page Not Found</h1>

      <Link to="/">Back to Home</Link>
    </Box>
  );
};

export default NotFound;
