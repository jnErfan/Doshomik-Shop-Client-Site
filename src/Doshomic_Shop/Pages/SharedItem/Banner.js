import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import "./Banner.css";

const Banner = ({ pageName, from }) => {
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
            {pageName}
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
              {from}
            </Link>
            <Typography
              color="text.primary"
              style={{ color: "#fff", fontSize: "25px" }}
            >
              {pageName}
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
