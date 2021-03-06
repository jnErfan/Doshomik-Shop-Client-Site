import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./Doshomic_Shop/Pages/Home/HomeContainer/HomeContainer";
import NotFound from "./Doshomic_Shop/Pages/NotFound/NotFound";
import Navbar from "./Doshomic_Shop/Pages/Shared/Navbar/Navbar";
import Footer from "./Doshomic_Shop/Pages/Shared/Footer/Footer";
import { Box } from "@mui/material";
import About from "./Doshomic_Shop/Pages/About/About";
import Faq from "./Doshomic_Shop/Pages/Faq/Faq";
import Blog from "./Doshomic_Shop/Pages/Blog/Blog";
import Contract from "./Doshomic_Shop/Pages/Contract/Contract";
import BlogDetails from "./Doshomic_Shop/Pages/BlogDetails/BlogDetails";
import MemberShips from "./Doshomic_Shop/Pages/MemberShip/MemberShip";
import Dashboard from "./Doshomic_Shop/Pages/Dashboard/Dashboard";
import MyOrders from "./Doshomic_Shop/Pages/MyOrders/MyOrders";
import CustomerReview from "./Doshomic_Shop/Pages/CustomerReview/CustomerReview";
import Login from "./Doshomic_Shop/Pages/LoginMethod/Login/Login";
import SignUp from "./Doshomic_Shop/Pages/LoginMethod/SignUp/SignUp";
import AdminLogin from "./Doshomic_Shop/Pages/LoginMethod/AdminLogin/AdminLogin";
import AuthContext from "./Doshomic_Shop/Context/AuthContext";
import Profile from "./Doshomic_Shop/Pages/Profile/Profile";
import PrivateRoute from "./Doshomic_Shop/PrivateRoutes/PrivateRoute";
import AdminRoute from "./Doshomic_Shop/AdminRoutes/AdminRoute";
import MembershipDetails from "./Doshomic_Shop/Pages/MembershipDetails/MembershipDetails";
import LoginRoute from "./Doshomic_Shop/Pages/LoginRoute/LoginRoute";
import DashboardRoute from "./Doshomic_Shop/Pages/DashboardRoute/DashboardRoute";
import { useEffect, useState } from "react";
import Preloader from "./Doshomic_Shop/Preloader/Preloader";

function App() {
  let location = window.location.pathname;
  const [loading, setLoading] = useState(false);

  // Set Preloader Timing
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // All Component Main Ceil
  return (
    <Box>
      {loading ? (
        <Preloader />
      ) : (
        <AuthContext>
          <Box className="App" sx={{ overflowX: "hidden" }}>
            <Router>
              <Box
                sx={
                  (location === "/dashboard" && { display: "none" }) ||
                  (location === "/dashboard/dashboardHome" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageOrders" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageMemberShips" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageUsers" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/addMemberShips" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/settings" && { display: "none" })
                }
              >
                <Navbar />
              </Box>
              <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="home" element={<HomeContainer />} />
                <Route path="memberShip" element={<MemberShips />} />
                <Route
                  path="memberShips/:memberShipDetailsId"
                  element={
                    <PrivateRoute>
                      <MembershipDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="dashboard/*"
                  element={
                    <AdminRoute>
                      <Dashboard />
                    </AdminRoute>
                  }
                />
                <Route path="about" element={<About />} />
                <Route
                  path="faq"
                  element={
                    <PrivateRoute>
                      <Faq />
                    </PrivateRoute>
                  }
                />
                <Route path="blogs" element={<Blog />} />
                <Route
                  path="blogs/:blogId"
                  element={
                    <PrivateRoute>
                      <BlogDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="contract"
                  element={
                    <PrivateRoute>
                      <Contract />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="myOrders"
                  element={
                    <PrivateRoute>
                      <MyOrders />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="review"
                  element={
                    <PrivateRoute>
                      <CustomerReview />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="login"
                  element={
                    <LoginRoute>
                      <Login />
                    </LoginRoute>
                  }
                />
                <Route
                  path="signUp"
                  element={
                    <LoginRoute>
                      <SignUp />
                    </LoginRoute>
                  }
                />
                <Route
                  path="adminLogin"
                  element={
                    <DashboardRoute>
                      <AdminLogin />
                    </DashboardRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Box
                sx={
                  (location === "/dashboard" && { display: "none" }) ||
                  (location === "/dashboard/dashboardHome" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageOrders" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageMemberShips" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/manageUsers" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/addMemberShips" && {
                    display: "none",
                  }) ||
                  (location === "/dashboard/settings" && { display: "none" })
                }
              >
                <Footer />
              </Box>
            </Router>
          </Box>
        </AuthContext>
      )}
    </Box>
  );
}

export default App;
