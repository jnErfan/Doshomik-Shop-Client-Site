import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./Navbar.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollChange, setSrollChainge] = useState(false);

  const onScrollHeader = () => {
    window.scrollY >= 10 ? setSrollChainge(true) : setSrollChainge(false);
  };
  window.addEventListener("scroll", onScrollHeader);
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="transparent"
          className={scrollChange ? "d-none" : ""}
          sx={{ boxShadow: 0, borderBottom: "1px solid #9fb6fc4f" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Box component="div" sx={{ flexGrow: 1 }}>
              <PublicIcon sx={{ color: "#fff" }} />{" "}
              <select className="bg-transparent border-0 text-white">
                <option className="text-dark" selected>
                  English
                </option>
                <option className="text-dark">Bangla</option>
                <option className="text-dark">Hindi</option>
                <option className="text-dark">Spanish</option>
              </select>
            </Box>
            <Box>
              <Button
                className="rounded-pill"
                variant="text"
                sx={{ color: "#fff", mx: "10px", fontSize: "15px" }}
              >
                <ExitToAppIcon sx={{ fontSize: "20px", mr: "5px" }} />
                Login
              </Button>
              <Button
                className="rounded-pill"
                variant="text"
                sx={{ color: "#fff", mx: "10px" }}
              >
                <HowToRegIcon />
                Registration
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={scrollChange ? { backgroundColor: "#006EF2" } : { boxShadow: 0 }}
          className={
            scrollChange
              ? "animate__animated  animate__fadeInDown animate__faster py-2"
              : "onScrollWeb bg-transparent position-fixed"
          }
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#fff" }}
            >
              DOSHOMIK𒆜Sᴴᴼᴾ
            </Typography>
            <Box>
              <Button
                className="navItem rounded-pill px-3 mx-2"
                variant="text"
                sx={{
                  fontWeight: "600",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                <Link
                  to="/home"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  HOME
                </Link>
              </Button>
              <Button
                className="navItem rounded-pill px-3 mx-2"
                variant="text"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  ABOUT
                </Link>
              </Button>
              <Button
                className="navItem rounded-pill px-3 mx-2"
                variant="text"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                <Link
                  to="/faq"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  FAQ
                </Link>
              </Button>
              <Button
                className="navItem rounded-pill px-3 mx-2"
                variant="text"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                <Link
                  to="/blog"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  BLOGS
                </Link>
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "600",
                  borderRadius: "50px",
                  px: "20px",
                  py: "11px",
                  mx: "10px",
                  fontSize: "15px",
                  backgroundColor: "#0099FF",
                  "&:hover": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                <Link
                  to="/contract"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  CONTACT
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
