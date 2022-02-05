import React from "react";
import { Box } from "@mui/material";
import AboutDS from "../Home/AboutDS/AboutDS";
import PeopleSays from "../Home/PeopleSays/PeopleSays";
import Facilities from "../Home/Facilities/Facilities";
import Banner from "../SharedItem/Banner";

//  About Us Component
const About = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"About"} from={"Home"} />
      </Box>
      <AboutDS />
      <PeopleSays />
      <Facilities />
    </Box>
  );
};

export default About;
