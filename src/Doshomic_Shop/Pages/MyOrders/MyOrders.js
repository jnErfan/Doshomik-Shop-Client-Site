import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../SharedItem/Banner";

const MyOrders = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"My Orders"} from={"Home"} />
      </Box>
      <Container sx={{ my: "100px" }}>
        <Box>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  boxShadow: "1px 1px 10px gray",
                  p: "30px",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mt: "10px", color: "#31487D" }}
                >
                  Youtube Subscriber
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", mt: "10px", color: "#363636" }}
                >
                  Price: 1000 ৳
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", mt: "10px", color: "#363636" }}
                >
                  Limit : 1000 Subscriber
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: "20px",
                  }}
                >
                  <Box>
                    {/*  <Button
                      variant="contained"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#ff0000",
                        display: "inline-block",
                        color: "#fff",
                        px: "25px",
                        py: "5px",
                        mx: "5px",
                        borderRadius: "25px",
                        "&:hover": {
                          backgroundColor: "#ff0000",
                        },
                      }}
                    >
                      Cancel
                    </Button> */}
                    <Link to="/review" style={{ textDecoration: "none" }}>
                      {" "}
                      <Button
                        variant="contained"
                        sx={{
                          fontWeight: "bold",
                          display: "inline-block",
                          backgroundColor: "#FFA500",
                          color: "#fff",
                          px: "25px",
                          py: "5px",
                          textTransform: "revert",
                          mx: "5px",
                          borderRadius: "25px",
                          "&:hover": {
                            backgroundColor: "#FFA500",
                            color: "#fff",
                          },
                        }}
                      >
                        Review
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#079100",
                        display: "inline-block",
                        color: "#fff",
                        px: "25px",
                        py: "5px",
                        borderRadius: "25px",
                      }}
                    >
                      Placed
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#dbaf00",
                        display: "inline-block",
                        color: "#fff",
                        px: "25px",
                        py: "5px",
                        mx: "5px",

                        borderRadius: "25px",
                      }}
                    >
                      Pending
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#ff0000",
                        display: "inline-block",
                        color: "#fff",
                        px: "25px",
                        py: "5px",
                        mx: "5px",

                        borderRadius: "25px",
                      }}
                    >
                      Canceled
                    </Typography> */}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MyOrders;
