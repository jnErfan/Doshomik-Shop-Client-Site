import React from "react";
import { Box, Typography } from "@mui/material";
import OurBlog from "../Home/OurBlog/OurBlog";
import Banner from "../SharedItem/Banner";

// Our Blog component
const Blog = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"Blog"} from={"Home"} />
      </Box>
      <Box sx={{ textAlign: "center", my: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Our Blog
        </Typography>
      </Box>
      <OurBlog />
    </Box>
  );
};

export default Blog;
