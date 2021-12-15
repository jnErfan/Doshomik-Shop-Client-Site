import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../SharedItem/Banner";

const blogsDes = [
  {
    id: 1111,
    img: "https://i.ibb.co/gtKsPnv/blog1.jpg",
    title: "Dit Boek Is Een Verhandeling Over De",
    des: "De verhandeling over de verbetering van het verstand tractatus de intellectus emendatione - en over de weg waarlangs dit het beste tot de ware kennis der. There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration in some form by injected humour or the an randomised words which don't look even evry is and slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't is the anything aembarrassing hidden in the middle of text.Ipsum available but the majority have that suffered is alteration in some form by injected humour or randomised words.",
  },
  {
    id: 1122,
    img: "https://i.ibb.co/hBt9zWJ/blog2.jpg",
    title: "Digital World Marketing And Digital Insights",
    des: "The latest global marketing and digital insights blog you need to know. Crypto, and Much More.delivers expert insights on the key trends shaping the real estate industry. There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration in some form by injected humour or the an randomised words which don't look even evry is and slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't is the anything aembarrassing hidden in the middle of text.Ipsum available but the majority have that suffered is alteration in some form by injected humour or randomised words. ",
  },
  {
    id: 1133,
    img: "https://i.ibb.co/PxJmrbX/blog3.jpg",
    title: "Das Keyboard Mechanical Keyboard",
    des: "Use Das Keyboard Q Software and Q Applets to Stay on Task and Become More Productive Throughout Your Day An unnecessary amount of time is spent every. There are many variations of passages of Lorem Ipsum available, but the majority have suffered that the alteration in some form by injected humour or the an randomised words which don't look even evry is and slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isn't is the anything aembarrassing hidden in the middle of text.Ipsum available but the majority have that suffered is alteration in some form by injected humour or randomised words.",
  },
];

const BlogDetails = () => {
  const { blogId } = useParams();

  const blogDetails = blogsDes.filter((blog) => blog?.id === Number(blogId));
  const { id, img, title, des } = blogDetails[0];

  return (
    <Box>
      <Banner pageName={"Blog Details"} from={"Home"} secondFrom={"Blogs"} />
      <Container sx={{ my: "100px" }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={8}>
              <Box>
                <img src={img} alt="" />
                <Typography
                  variant="h4"
                  sx={{ mt: "20px", fontWeight: "bold" }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ mt: "15px" }}>
                  {des}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
