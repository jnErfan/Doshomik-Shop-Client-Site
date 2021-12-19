import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Membership = () => {
  const [membership, setMembership] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/memberShips")
      .then((result) => result.json())
      .then((data) => setMembership(data));
  }, []);
  const navigate = useNavigate();
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
        {membership.map(({ _id, service, price, limit, bonus, validity }) => (
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
              <SubscribeButton
                fullWidth
                sx={{ mt: "20px", py: "17px" }}
                onClick={() => navigate(`/memberShips/${_id}`)}
              >
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
