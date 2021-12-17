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
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  className="navItem rounded-pill px-3 mx-2"
                  variant="text"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#0099FF",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  HOME
                </Button>
              </Link>
              <Link
                to="/memberShip"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  className="navItem rounded-pill px-3 mx-2"
                  variant="text"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#0099FF",
                      color: "white",
                    },
                  }}
                >
                  Membership
                </Button>
              </Link>
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  className="navItem rounded-pill px-3 mx-2"
                  variant="text"
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#0099FF",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  ABOUT
                </Button>
              </Link>
              <Link
                to="/faq"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Button
                  className="navItem rounded-pill px-3 mx-2"
                  variant="text"
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#0099FF",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  FAQ
                </Button>
              </Link>
              <Link
                to="/blogs"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Button
                  className="navItem rounded-pill px-3 mx-2"
                  variant="text"
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#0099FF",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  BLOGS
                </Button>
              </Link>
              <Link
                to="/contract"
                style={{ color: "white", textDecoration: "none" }}
              >
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
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  CONTACT
                </Button>
              </Link>
              <a
                href="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
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
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  Dashboard
                </Button>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
