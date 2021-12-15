import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AboutDS from "../Home/AboutDS/AboutDS";
import PeopleSays from "../Home/PeopleSays/PeopleSays";
import EarnMoney from "../Home/EarnMoney/EarnMoney";
import Facilities from "../Home/Facilities/Facilities";

const About = () => {
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
              About
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
                About
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <AboutDS />
      <PeopleSays />
      <EarnMoney />
      <Facilities />
    </Box>
  );
};

export default About;
