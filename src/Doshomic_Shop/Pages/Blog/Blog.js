import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import OurBlog from "../Home/OurBlog/OurBlog";

const Blog = () => {
  return (
    <Box>
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
              Blog
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
                Blog
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", my: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Our Blog
        </Typography>
      </Box>
      <OurBlog />
    </Box>
  );
};

export default Blog;
