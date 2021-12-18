import React, { Fragment, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useAuth from "../../../Hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  List,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Navbar = () => {
  const [scrollChange, setSrollChainge] = useState(false);
  const navigate = useNavigate();
  const onScrollHeader = () => {
    window.scrollY >= 10 ? setSrollChainge(true) : setSrollChainge(false);
  };
  window.addEventListener("scroll", onScrollHeader);

  const { user, logOutAll } = useAuth();

  const logOut = () => {
    logOutAll();
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();

  const useStyle = makeStyles({
    navItemRes: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navItemResUp: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  });
  const { navItemRes, navItemResUp } = useStyle();

  const [state, setState] = useState(false);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="transparent"
          className={scrollChange ? "d-none" : ""}
          sx={{ boxShadow: 0, borderBottom: "1px solid #9fb6fc4f" }}
        >
          <Toolbar className={navItemRes}>
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {user.email === "Admin" && (
                <a
                  href="/dashboard"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                      borderRadius: "50px",
                      px: "15px",
                      py: "5px",
                      mx: "10px",
                      fontSize: "15px",
                      backgroundColor: "#006EF2",
                      "&:hover": {
                        backgroundColor: "#0099FF",
                        color: "#fff",
                        transition: "500ms",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {" "}
                    Dashboard
                  </Button>
                </a>
              )}
              {user.email && (
                <Link
                  to="/myOrders"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "30px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "600",
                      borderRadius: "50px",
                      px: "15px",
                      py: "5px",
                      mx: "10px",
                      fontSize: "15px",
                      backgroundColor: "#006EF2",
                      "&:hover": {
                        backgroundColor: "#0099FF",
                        color: "#fff",
                        transition: "500ms",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <ShoppingCartIcon />
                    My Orders
                  </Button>
                </Link>
              )}
              {!user.email ? (
                <Box
                  sx={{
                    display: "inline",
                  }}
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    {" "}
                    <Button
                      className="rounded-pill"
                      variant="text"
                      sx={{ color: "#fff", mx: "10px", fontSize: "15px" }}
                    >
                      <ExitToAppIcon sx={{ fontSize: "20px", mr: "5px" }} />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signUp" style={{ textDecoration: "none" }}>
                    <Button
                      className="rounded-pill"
                      variant="text"
                      sx={{ color: "#fff", mx: "10px" }}
                    >
                      <HowToRegIcon />
                      Registration
                    </Button>
                  </Link>
                </Box>
              ) : (
                <Box sx={{ flexGrow: 2 }}>
                  <Tooltip
                    title="Profile"
                    sx={{
                      display: "inline",
                    }}
                  >
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{
                        display: "inline",
                      }}
                    >
                      <Avatar
                        alt="users"
                        src={user.photoURL}
                        sx={{
                          width: "60px",
                          height: "60px",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "70px" }}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        className="animate__animated animate__heartBeat animate__slower animate__infinite"
                        onClick={() => navigate("/profile")}
                        sx={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "#000",
                          fontSize: "20px",
                          width: "100%",
                        }}
                      >
                        {user.displayName}
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => navigate("/profile")}
                        sx={{
                          textTransform: "revert",
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "gray",
                          fontSize: "13px",
                        }}
                      >
                        {user.email}
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => navigate("/profile")}
                        variant="contained"
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                          fontWeight: "bold",
                          width: "100%",
                          borderRadius: "50px",
                        }}
                      >
                        Profile
                      </Button>
                    </MenuItem>
                    <a href="/dashboard" style={{ textDecoration: "none" }}>
                      {" "}
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: "bold",
                            borderRadius: "50px",
                            width: "100%",
                          }}
                        >
                          Dashboard
                        </Button>
                      </MenuItem>
                    </a>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => navigate("/myOrders")}
                        variant="contained"
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                          fontWeight: "bold",
                          borderRadius: "50px",
                          width: "100%",
                        }}
                      >
                        My Orders
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={logOut}
                        variant="contained"
                        style={{
                          backgroundColor: "#c40000",
                          weight: "10px",
                          borderRadius: "50px",
                          width: "100%",
                          padding: "2px 30px",
                        }}
                      >
                        <LogoutIcon sx={{ fontSize: "30px", ml: "5px" }} />
                      </Button>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
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
              onClick={() => navigate("/")}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
                "&:hover": {
                  transform: "scale(1.01)",
                  color: "#0099FF",
                },
              }}
            >
              DOSHOMIK𒆜Sᴴᴼᴾ
            </Typography>
            <Box className={navItemRes}>
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
                  CONTACT
                </Button>
              </Link>
            </Box>
            <Button className={navItemResUp} onClick={() => setState(true)}>
              <MenuIcon sx={{ color: "#fff", fontSize: "40px" }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box className={navItemResUp}>
        <Fragment>
          <SwipeableDrawer open={state} onClose={() => setState(false)}>
            <Box
              sx={{
                width: 150,
                backgroundColor: "#111111",
                height: "150vh",
              }}
              role="presentation"
              onClick={() => setState(false)}
              onKeyDown={() => setState(false)}
            >
              <List>
                <Box component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {!user.email ? (
                    <Box
                      sx={{
                        display: "block",
                        mt: "20px",
                      }}
                    >
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        {" "}
                        <Button
                          className="rounded-pill"
                          variant="text"
                          sx={{ color: "#fff", fontSize: "15px" }}
                        >
                          <ExitToAppIcon sx={{ fontSize: "15px", mr: "5px" }} />
                          Login
                        </Button>
                      </Link>
                      <Link to="/signUp" style={{ textDecoration: "none" }}>
                        <Button
                          className="rounded-pill"
                          variant="text"
                          sx={{ color: "#fff" }}
                        >
                          <HowToRegIcon />
                          Registration
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Box sx={{ flexGrow: 2, textAlign: "center", my: "40px" }}>
                      <Tooltip
                        title="Profile"
                        sx={{
                          display: "inline",
                        }}
                      >
                        <IconButton
                          onClick={handleOpenUserMenu}
                          sx={{
                            display: "inline",
                          }}
                        >
                          <Avatar
                            alt="users"
                            src={user.photoURL}
                            sx={{
                              width: "60px",
                              height: "60px",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "70px" }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button
                            className="animate__animated animate__heartBeat animate__slower animate__infinite"
                            onClick={() => navigate("/profile")}
                            sx={{
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              textAlign: "center",
                              color: "#000",
                              fontSize: "20px",
                              width: "100%",
                            }}
                          >
                            {user.displayName}
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button
                            onClick={() => navigate("/profile")}
                            sx={{
                              textTransform: "revert",
                              fontWeight: "bold",
                              textAlign: "center",
                              color: "gray",
                              fontSize: "13px",
                            }}
                          >
                            {user.email}
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button
                            onClick={() => navigate("/profile")}
                            variant="contained"
                            style={{
                              backgroundColor: "#fff",
                              color: "#000",
                              fontWeight: "bold",
                              width: "100%",
                              borderRadius: "50px",
                            }}
                          >
                            Profile
                          </Button>
                        </MenuItem>
                        <a href="/dashboard" style={{ textDecoration: "none" }}>
                          {" "}
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#fff",
                                color: "#000",
                                fontWeight: "bold",
                                borderRadius: "50px",
                                width: "100%",
                              }}
                            >
                              Dashboard
                            </Button>
                          </MenuItem>
                        </a>

                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button
                            onClick={logOut}
                            variant="contained"
                            style={{
                              backgroundColor: "#c40000",
                              weight: "10px",
                              borderRadius: "50px",
                              width: "100%",
                              padding: "2px 30px",
                            }}
                          >
                            <LogoutIcon sx={{ fontSize: "30px", ml: "5px" }} />
                          </Button>
                        </MenuItem>
                      </Menu>
                    </Box>
                  )}
                </Box>
                <Box>
                  <Link
                    to="/home"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Button
                      className="navItem rounded-pill px-3 my-3"
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
                      className="navItem rounded-pill px-3 my-3"
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
                      className="navItem rounded-pill px-3 my-3"
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
                      className="navItem rounded-pill px-3 my-3"
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
                      className="navItem rounded-pill px-3 my-3"
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
                      className="navItem rounded-pill px-3 my-3"
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
                      CONTACT
                    </Button>
                  </Link>
                </Box>
              </List>
            </Box>
          </SwipeableDrawer>
        </Fragment>
      </Box>
    </Box>
  );
};

export default Navbar;
