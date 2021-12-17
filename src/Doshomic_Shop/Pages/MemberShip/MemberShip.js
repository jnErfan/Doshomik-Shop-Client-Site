import { Box } from "@mui/material";
import React from "react";
import Membership from "../Home/Membership/Membership";
import Banner from "../SharedItem/Banner";

const MemberShips = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"MemberShip"} from={"Home"} />
      </Box>

      <Box sx={{ my: "100px" }}>
        <Membership />
      </Box>
    </Box>
  );
};

export default MemberShips;
