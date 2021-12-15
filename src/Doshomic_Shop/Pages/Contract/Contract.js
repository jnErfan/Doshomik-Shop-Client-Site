import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./Contract.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Contract = () => {
  return (
    <Box className="BannerContainer">
      <Box
        className="BannerContainer2"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "end",
        }}
      >
        <Box sx={{ ml: "50px", mb: "50px" }}>
          <Typography variant="h1" sx={{ color: "#fff", pb: "10px" }}>
            Contract
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            style={{ color: "#fff", fontSize: "25px" }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/home"
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </Link>
            <Typography
              color="text.primary"
              style={{ color: "#fff", fontSize: "25px" }}
            >
              Contract
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
    </Box>
  );
};

export default Contract;
