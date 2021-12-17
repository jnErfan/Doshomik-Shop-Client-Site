import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";

const AddMemberShips = () => {
  return (
    <Box sx={{ my: "100px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0C163C" }}>
          Manage All Memberships
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0C163C",
              height: "5px",
              width: "100px",
              mt: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddMemberShips;
