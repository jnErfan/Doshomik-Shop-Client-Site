import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1111,
    img: "https://i.ibb.co/gtKsPnv/blog1.jpg",
    title: "Dit Boek Is Een Verhandeling Over De",
    des: "De verhandeling over de verbetering van het verstand tractatus de intellectus emendatione - en over de weg waarlangs dit het beste tot de ware kennis der",
  },
  {
    id: 1122,
    img: "https://i.ibb.co/hBt9zWJ/blog2.jpg",
    title: "Digital World Marketing And Digital Insights",
    des: "The latest global marketing and digital insights blog you need to know. Crypto, and Much More.delivers expert insights on the key trends shaping the real estate industry ",
  },
  {
    id: 1133,
    img: "https://i.ibb.co/PxJmrbX/blog3.jpg",
    title: "Das Keyboard Mechanical Keyboard",
    des: "Use Das Keyboard Q Software and Q Applets to Stay on Task and Become More Productive Throughout Your Day An unnecessary amount of time is spent every",
  },
];

const OurBlog = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mb: "100px" }}>
      <Box
        sx={{
          mt: "90px",
        }}
      >
        <Grid container spacing={3}>
          {blogs.map(({ id, img, title, des }) => (
            <Grid item xs={12} md={6} lg={4} key={id}>
              <Card
                onClick={() => navigate(`/blogs/${id}`)}
                sx={{
                  boxShadow: 0,
                  transition: "500ms",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "500ms",
                  },
                }}
                className="shadow-sm rounded-3"
              >
                <CardActionArea>
                  <CardMedia component="img" height="200" image={img} alt="" />
                  <CardContent sx={{ px: "30px" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", mb: "20px" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {des}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="text"
                    sx={{ px: "30px", mb: "30px" }}
                    onClick={() => navigate(`/blogs/${id}`)}
                  >
                    <ArrowForwardIcon
                      sx={{ fontSize: "30px", color: "black" }}
                    />
                  </Button>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurBlog;
