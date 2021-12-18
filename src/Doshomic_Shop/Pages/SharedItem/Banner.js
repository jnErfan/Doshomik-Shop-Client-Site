import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";
import "./Banner.css";

const Banner = ({ pageName, from, secondFrom }) => {
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
          <Typography
            sx={{ color: "#fff", pb: "10px" }}
            className="bannerNames"
          >
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
            {secondFrom && (
              <Link
                underline="hover"
                color="inherit"
                href={"/" + secondFrom?.toLowerCase()}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                {secondFrom}
              </Link>
            )}
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
