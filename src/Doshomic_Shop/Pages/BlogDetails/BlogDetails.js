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
  const { img, title, des } = blogDetails[0];

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
                  variant="h5"
                  sx={{ mt: "20px", fontWeight: "bold", color: "#363636" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: "15px", color: "#666666" }}
                >
                  {des}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mt: "50px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Share This Post
                </Typography>
                <Box className="footar-icon" sx={{ mt: "20px" }}>
                  <a
                    href="https://www.facebook.com/profile.php?id=100070357800423"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i
                      className="fab fa-facebook fb"
                      style={{ marginLeft: "15px" }}
                    ></i>{" "}
                  </a>
                  <a
                    href="https://www.instagram.com/j.n_erfan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-instagram ins"
                      style={{ marginLeft: "15px" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/j-n-erfan-8368b0216/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-linkedin link"
                      style={{ marginLeft: "15px" }}
                    ></i>
                  </a>

                  <a
                    href="https://twitter.com/JNErfan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-twitter twt "
                      style={{ marginLeft: "15px" }}
                    ></i>
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Recent Posts
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#006EF2",
                    width: "30px",
                    height: "3px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: "30px",
                }}
              >
                {blogsDes.map(({ img, title }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1px solid #e8e8e8",
                      py: "10px",
                      "&:hover": {
                        transform: "scale(1.05)",
                        color: "#000",
                      },
                    }}
                  >
                    <Box>
                      {" "}
                      <img width="80px" src={img} alt="" />
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "#363636",
                          cursor: "pointer",
                          ml: "15px",
                          "&:hover": {
                            color: "#0099FF",
                          },
                        }}
                      >
                        {title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogDetails;
