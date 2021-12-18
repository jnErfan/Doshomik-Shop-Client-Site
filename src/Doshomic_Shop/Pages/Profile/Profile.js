import { Box } from "@mui/material";
import React from "react";
import Banner from "../SharedItem/Banner";

const Profile = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"Profile"} from={"Home"} />
      </Box>
      <Box sx={{ textAlign: "center", mt: "50px" }}>
        <h1 style={{ fontWeight: "bold", color: "#101436", fontSize: "60px" }}>
          Profile
        </h1>
        <img src="https://diet-pillstore.com/images/comingsoon.gif" alt="" />
      </Box>
    </Box>
  );
};

export default Profile;
