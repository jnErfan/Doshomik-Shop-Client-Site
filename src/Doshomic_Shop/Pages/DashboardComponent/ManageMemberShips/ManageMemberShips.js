import { Box } from "@mui/material";
import React from "react";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const membershipPlans = [
  {
    service: "Youtube View",
    price: "10 bdt",
    limit: "10 PTC",
    bonus: "Upto 0 Level",
    validity: "Life Time",
  },
  {
    service: "Facebook Like",
    price: "10 bdt",
    limit: "10 PTC",
    bonus: "Upto 0 Level",
    validity: "Life Time",
  },
  {
    service: "Earn Life Time",
    price: "500 bdt",
    limit: "5 PTC",
    bonus: "Upto 0 Level",
    validity: "Life Time",
  },
  {
    service: "Earn Life Smart",
    price: "1000 bdt",
    limit: "100 PTC",
    bonus: "Upto 8 Level",
    validity: "Life Time",
  },
  {
    service: "Earn Expert",
    price: "2000 bdt",
    limit: "200 PTC",
    bonus: "Upto 10 Level",
    validity: "Life Time",
  },
  {
    service: "Earn King",
    price: "5000 bdt",
    limit: "500 PTC",
    bonus: "Upto 10 Level",
    validity: "Life Time",
  },
];

const ManageMemberShips = () => {
  const SubscribeButton = styled(Button)(({ theme }) => ({
    background: "#003BFF",
    color: "#fff",
    fontWeight: "bold",
    transition: "1s",
    "&:hover": {
      outline: "2px solid #003BFF",
      color: "#003BFF",
      transition: "500ms",
    },
  }));
  return (
    <Box>
      <Container sx={{ mt: "100px", mb: "150px" }}>
        <Box sx={{ textAlign: "center", mb: "50px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: "20px", color: "#101536" }}
          >
            Manage All Memberships
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
                    {price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: "30px",
                  }}
                >
                  <Typography
                    variant="h6"
                    className="text-secondary fw-bold text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Plan Details
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Daily Limit : {limit}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Referral Bonus : {bonus}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Plan Price : {price}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Validity : {validity}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <SubscribeButton sx={{ mt: "20px", px: "15px" }}>
                    Edit <i className="far fa-edit ms-1"></i>
                  </SubscribeButton>
                  <SubscribeButton sx={{ mt: "20px", px: "15px" }}>
                    Delete <i className="fas fa-trash ms-1"></i>
                  </SubscribeButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageMemberShips;
