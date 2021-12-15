import React from "react";
import AboutDS from "../AboutDS/AboutDS";
import Banner from "../Banner/Banner";
import EarnMoney from "../EarnMoney/EarnMoney";
import Facilities from "../Facilities/Facilities";
import FrequentlyQuestion from "../FrequentlyQuestion/FrequentlyQuestion";
import Membership from "../Membership/Membership";
import PeopleSays from "../PeopleSays/PeopleSays";
import OurBlog from "../OurBlog/OurBlog";
import { Box, Typography } from "@mui/material";

const HomeContainer = () => {
  return (
    <div>
      <Banner />
      <AboutDS />
      <Membership />
      <Facilities />
      <EarnMoney />
      <FrequentlyQuestion />
      <PeopleSays />
      <Box sx={{ textAlign: "center", my: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Our Latest Blog
        </Typography>
        <Typography variant="body1" className="text-secondary px-5">
          Our newest blogger Pam Hamilton looks at how teams can deal with
          negativity. In her latest blog, recent research pieces Blog Articles.{" "}
          <br /> All Articles Case Study Content Design Gaming Marketing Network
          Read our Blog. Check out our latest blog post.
        </Typography>
      </Box>
      <OurBlog />
    </div>
  );
};

export default HomeContainer;
