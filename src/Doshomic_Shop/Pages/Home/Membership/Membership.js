import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const membershipPlans = [
  {
    service: "Youtube Subscriber",
    price: "1000",
    limit: "1000 Subscriber",
    bonus: "50",
    validity: "Life Time",
  },
  {
    service: "Facebook Like",
    price: "300",
    limit: "500 React",
    bonus: "10",
    validity: "Life Time",
  },
  {
    service: "Instagram Like",
    price: "700",
    limit: "1200 Like",
    bonus: "100",
    validity: "Life Time",
  },
  {
    service: "Facebook Follower",
    price: "500",
    limit: "1000 Follower",
    bonus: "50",
    validity: "Life Time",
  },
  {
    service: "Instagram Follower",
    price: "1000",
    limit: "1500 Follower",
    bonus: "100",
    validity: "Life Time",
  },
  {
    service: "Facebook Video Boost",
    price: "2000",
    limit: "No Limit",
    bonus: "No Limit",
    validity: "Life Time",
  },
  {
    service: "Youtube Video Boost",
    price: "2500",
    limit: "No Limit",
    bonus: "No Limit",
    validity: "Life Time",
  },
  {
    service: "Youtube View",
    price: "400",
    limit: "1000 View",
    bonus: "100",
    validity: "Life Time",
  },
  {
    service: "Facebook View",
    price: "300",
    limit: "1000 View",
    bonus: "100",
    validity: "Life Time",
  },
  {
    service: "Youtube Watch Time",
    price: "1500",
    limit: "1000 Hours",
    bonus: "10 Level",
    validity: "Life Time",
  },
  {
    service: "Facebook Watch Time",
    price: "1000",
    limit: "1000 Hours",
    bonus: "10 Level",
    validity: "Life Time",
  },
  {
    service: "Youtube Comments",
    price: "250",
    limit: "500 Comments",
    bonus: "50",
    validity: "Life Time",
  },
  {
    service: "Facebook Comments",
    price: "80",
    limit: "100 Comments",
    bonus: "20",
    validity: "Life Time",
  },
  {
    service: "Linkedin Follower",
    price: "800",
    limit: "1000 Follower",
    bonus: "100",
    validity: "Life Time",
  },
  {
    service: "GitHub Follower",
    price: "700",
    limit: "1000 Follower",
    bonus: "10",
    validity: "Life Time",
  },
];

const Membership = () => {
  const SubscribeButton = styled(Button)(({ theme }) => ({
    background: "#003BFF",
    color: "#fff",
    fontWeight: "bold",
    transition: "1s",
    padding: "15px 30px",
    "&:hover": {
      outline: "2px solid #003BFF",
      color: "#003BFF",
      transition: "500ms",
    },
  }));
  return (
    <Container sx={{ mb: "100px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Membership Plans
        </Typography>
        <Typography variant="body1" className="text-secondary">
          {" "}
          Membership plan is a subscription to your organization that entitles
          the purchaser to certain benefits. <br /> Each member's plan makes
          them an active member for a specific period of time.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {membershipPlans.map(({ service, price, limit, bonus, validity }) => (
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                my: "50px",
              }}
              className="shadow-sm"
            >
              <Box
                sx={{
                  p: "30px",
                  textAlign: "center",
                  backgroundColor: "#003BFF",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: "20px" }}
                >
                  {service}
                </Typography>
                <Box sx={{ backgroundColor: "#fff" }}>
                  <Divider />
                </Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  {price} ৳
                </Typography>
              </Box>
              <Box
                sx={{
                  px: "30px",
                }}
              >
                <Typography
                  variant="h6"
                  className="fw-bold text-center mt-4 pb-3"
                  sx={{
                    borderBottom: "1px dotted rgb(197, 197, 197)",
                    color: "#3a3a3a",
                  }}
                >
                  Membership Details
                </Typography>
                <Typography
                  variant="body1"
                  className="text-center mt-4 pb-3"
                  sx={{
                    borderBottom: "1px dotted rgb(197, 197, 197)",
                    color: "#3a3a3a",
                  }}
                >
                  Limit : {limit}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-center mt-4 pb-3"
                  sx={{
                    borderBottom: "1px dotted rgb(197, 197, 197)",
                    color: "#3a3a3a",
                  }}
                >
                  Referral Bonus : Upto {bonus}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-center mt-4 pb-3"
                  sx={{
                    borderBottom: "1px dotted rgb(197, 197, 197)",
                    color: "#3a3a3a",
                  }}
                >
                  Membership Price : {price} ৳
                </Typography>
                <Typography
                  variant="body1"
                  className="text-center mt-4 pb-3"
                  sx={{
                    borderBottom: "1px dotted rgb(197, 197, 197)",
                    color: "#3a3a3a",
                  }}
                >
                  Validity : {validity}
                </Typography>
              </Box>
              <SubscribeButton fullWidth sx={{ mt: "20px", py: "17px" }}>
                Subscribe Now
              </SubscribeButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Membership;
