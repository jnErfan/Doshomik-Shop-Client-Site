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

function App() {
  let location = window.location.pathname;
  console.log(location);
  return (
    <Box className="App" sx={{ overflowX: "hidden" }}>
      <Router>
        <Box
          sx={
            (location === "/dashboard" && { display: "none" }) ||
            (location === "/dashboard/dashboardHome" && { display: "none" }) ||
            (location === "/dashboard/manageOrders" && { display: "none" }) ||
            (location === "/dashboard/manageMemberShips" && {
              display: "none",
            }) ||
            (location === "/dashboard/manageUsers" && { display: "none" }) ||
            (location === "/dashboard/addMemberShips" && { display: "none" }) ||
            (location === "/dashboard/settings" && { display: "none" })
          }
        >
          <Navbar />
        </Box>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="home" element={<HomeContainer />} />
          <Route path="memberShip" element={<MemberShips />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:blogId" element={<BlogDetails />} />
          <Route path="contract" element={<Contract />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Box
          sx={
            (location === "/dashboard" && { display: "none" }) ||
            (location === "/dashboard/dashboardHome" && { display: "none" }) ||
            (location === "/dashboard/manageOrders" && { display: "none" }) ||
            (location === "/dashboard/manageMemberShips" && {
              display: "none",
            }) ||
            (location === "/dashboard/manageUsers" && { display: "none" }) ||
            (location === "/dashboard/addMemberShips" && { display: "none" }) ||
            (location === "/dashboard/settings" && { display: "none" })
          }
        >
          <Footer />
        </Box>
      </Router>
    </Box>
  );
}

export default App;
