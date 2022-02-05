import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashboardHome from "../DashboardComponent/Dashboard/DashboardHome";
import ManageOrders from "../DashboardComponent/ManageOrders/ManageOrders";
import ManageMemberShips from "../DashboardComponent/ManageMemberShips/ManageMemberShips";
import ManageUsers from "../DashboardComponent/ManageUsers/ManageUsers";
import AddMemberShips from "../DashboardComponent/AddMemberShips/AddMemberShips";
import Settings from "../DashboardComponent/Settings/Settings";
import useAuth from "../../Hooks/useAuth";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShieldIcon from "@mui/icons-material/Shield";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const Dashboard = () => {
  //  Use Auth Context Api
  const { users, logOutAll, user } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // User Toggle Button
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Dashboard Component Handler
  return (
    <Box className="dashboardContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            lg={2}
            sx={{ backgroundColor: "#101536", height: "110vh" }}
            className="dashboardBackgroundImage"
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#fff", p: "10px", fontWeight: "bold" }}
              >
                DOSHOMIK
                <span
                  style={{
                    color: "#0099FF",
                  }}
                >
                  𒆜Sᴴᴼᴾ
                </span>
              </Typography>
              <Box sx={{ mr: "10px", mt: "50px" }} className="buttonContainer">
                <Link
                  to="dashboardHome"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i className="fas fa-laptop-house"></i> Dashboard
                  </Button>
                </Link>
                <Link
                  to="manageOrders"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> Manage Orders
                  </Button>
                </Link>
                <Link
                  to="manageMemberShips"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i class="fas fa-server"></i> Memberships
                  </Button>
                </Link>
                <Link
                  to="manageUsers"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i className="far fa-user"></i> Manage Users
                  </Button>
                </Link>
                <Link
                  to="addMemberShips"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i className="far fa-calendar-plus"></i> Membership Add
                  </Button>
                </Link>
                <Link
                  to="settings"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      my: "30px",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    <i className="fas fa-tools"></i> Settings
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Box sx={{ mb: "65px" }}>
              <AppBar
                position="absolute"
                sx={{
                  backgroundColor: "#101536",
                  boxShadow: 0,
                  width: "85%",
                }}
                className="dashboardBackgroundImage2"
              >
                <Toolbar variant="dense">
                  <Box sx={{ flexGrow: 1 }}>
                    {" "}
                    <a
                      href="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      <Button sx={{ color: "#fff", fontWeight: "bold" }}>
                        <span
                          style={{
                            color: "#0099FF",
                          }}
                        >
                          Client
                        </span>
                        𒆜HOME
                      </Button>
                    </a>
                  </Box>
                  <Box>
                    <Button
                      sx={{ color: "#fff", fontWeight: "bold" }}
                      onClick={handleOpenUserMenu}
                    >
                      {users.position}
                      {users.position === "Moderator" && (
                        <ShieldIcon sx={{ fontSize: "25px", ml: "10px" }} />
                      )}
                      {users.position === "Admin" && (
                        <AdminPanelSettingsIcon
                          sx={{ fontSize: "25px", ml: "10px" }}
                        />
                      )}
                    </Button>
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
                      <Box className="profilePopover">
                        <Box>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Avatar
                              className="animate__animated animate__pulse animate__slower animate__infinite"
                              alt="users"
                              src={user.photoURL}
                              sx={{
                                width: "100px",
                                height: "100px",
                              }}
                            />
                          </IconButton>
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Button
                              className="animate__animated animate__pulse animate__slower animate__infinite"
                              onClick={() => navigate("/")}
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
                          <MenuItem
                            onClick={handleCloseUserMenu}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                textTransform: "revert",
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "gray",
                                fontSize: "13px",
                                mt: "-20px",
                              }}
                            >
                              {user.email}
                            </Typography>
                          </MenuItem>
                          <a href="/" style={{ textDecoration: "none" }}>
                            <MenuItem onClick={handleCloseUserMenu}>
                              <Button
                                className="animate__animated animate__pulse animate__slower animate__infinite"
                                variant="contained"
                                style={{
                                  backgroundColor: "#0099FF",
                                  color: "#fff",
                                  fontWeight: "bold",
                                  borderRadius: "50px",
                                  width: "100%",
                                }}
                              >
                                Home
                              </Button>
                            </MenuItem>
                          </a>
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Button
                              className="animate__animated animate__pulse animate__slower animate__infinite"
                              onClick={() => logOutAll()}
                              variant="contained"
                              style={{
                                backgroundColor: "#c40000",
                                weight: "10px",
                                borderRadius: "50px",
                                width: "100%",
                                padding: "2px 30px",
                              }}
                            >
                              <LogoutIcon
                                sx={{ fontSize: "30px", ml: "5px" }}
                              />
                            </Button>
                          </MenuItem>
                        </Box>
                      </Box>
                    </Menu>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
            <Box className="border1" />
            <Box className="border2" />
            <Box className="dashboardOverflow">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="dashboardHome" element={<DashboardHome />} />
                <Route path="manageOrders" element={<ManageOrders />} />
                <Route
                  path="manageMemberShips"
                  element={<ManageMemberShips />}
                />
                <Route path="manageUsers" element={<ManageUsers />} />
                <Route path="addMemberShips" element={<AddMemberShips />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
              {/* All Dashboard Item */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
