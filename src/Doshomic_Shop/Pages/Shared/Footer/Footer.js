import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box sx={{ mt: "100px", backgroundColor: "#1976D2" }}>
      <Typography variant="h5" sx={{ color: "#fff", py: "20px", ml: "50px" }}>
        DOSHOMIK𒆜Sᴴᴼᴾ
      </Typography>
      <Container sx={{ py: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Link
              to="#GetHelp"
              className="text-white footerText  py-0"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Terms & Conditions
            </Link>
            <Link
              to="#GetHelp"
              className="text-white footerText  py-0"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Private & Policies
            </Link>
            <Link
              to="#GetHelp"
              className="text-white footerText  py-0"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Our Faq
            </Link>
            <Link
              className="text-white footerText  py-0"
              to="#GetHelp"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Get Help
            </Link>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Link
              className="text-white footerText  py-0"
              to="#About"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              About
            </Link>
            <Link
              className="text-white footerText  py-0"
              to="#About"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Customer Care
            </Link>
            <Link
              className="text-white footerText  py-0"
              to="#Blog"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Read Our Blog{" "}
            </Link>
            <Link
              className="text-white footerText  py-0"
              to="#NearMe"
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Near You
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          backgroundColor: "#003BFF",
          height: "3px",
          width: "40%",
          borderRight: "5px solid #fff",
          borderRadius: "500px",
        }}
      ></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "4px",
            width: "20%",
            mt: "-3px",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          sx={{
            backgroundColor: "#003BFF",
            height: "3px",
            width: "40%",
            mt: "-4px",
            borderLeft: "5px solid #fff",
            borderRadius: "500px",
          }}
        ></Box>
      </Box>
      <Box sx={{ textAlign: "center", py: "10px" }}>
        <h6 style={{ color: "#fff" }}>
          <i className="far fa-copyright"></i> Design With{" "}
          <i style={{ color: "#01070C" }} className="fas fa-heart"></i> By
          <a
            style={{
              textDecoration: "none",
              color: "#01070C",
              marginLeft: "5px",
            }}
            href="https://www.linkedin.com/in/j-n-erfan-8368b0216/"
            target="_blank"
            rel="noreferrer"
          >
            J.N.Erfan
          </a>
        </h6>
      </Box>
    </Box>
  );
};

export default Footer;
