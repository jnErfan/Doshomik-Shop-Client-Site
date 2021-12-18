import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "../SharedItem/Banner";

const MembershipDetails = () => {
  const navigate = useNavigate();
  const { memberShipDetailsId } = useParams();
  const [membership, setMembership] = useState([]);

  useEffect(() => {
    fetch(
      `https://doshomik-shop-server.herokuapp.com/memberShips/${memberShipDetailsId}`
    )
      .then((result) => result.json())
      .then((data) => setMembership(data));
  }, [memberShipDetailsId]);
  async function orderInformation() {
    const { value: name } = await Swal.fire({
      title: "Your Name",
      input: "text",
      inputLabel: "Your Name",
      inputPlaceholder: "Enter Your Name",
    });
    const { value: email } = await Swal.fire({
      title: "Email Address",
      input: "email",
      inputLabel: "Your Email Address",
      inputPlaceholder: "Enter Your Email Address",
    });
    const { value: number } = await Swal.fire({
      title: "Contact Number",
      input: "number",
      inputLabel: "Your Contact Number",
      inputPlaceholder: "Enter Contact Number",
    });
    const { value: url } = await Swal.fire({
      title: "Social Link",
      input: "url",
      inputLabel: "Link to Ordered MemberShip",
      inputPlaceholder: "Enter Youtube/Facebook Link",
    });
    if (name && email && number && url) {
      const orderDetails = {
        name: name,
        email: email,
        number: number,
        url: url,
      };
      console.log(orderDetails);
      Swal.fire({
        title: "Order Confirm ?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Confirmed",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Your Order Successful",
            text: "Your Order We Will Be Delivered Soon",
          });
          navigate("/myOrders");
        }
      });
    } else {
      Swal.fire(
        "Fill All Information",
        "You Have To Give All The Information To Confirm The Order",
        "error"
      );
    }
  }

  return (
    <Box>
      <Box>
        <Banner pageName={"Membership Info"} from={"Home"} />
      </Box>
      {membership.map(({ service, price, limit, bonus, validity }) => (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Container
              sx={{
                my: "50px",
              }}
            >
              <Box
                sx={{
                  p: "30px",
                  textAlign: "center",
                  backgroundColor: "#5985a3",
                  color: "#fff",
                  borderRadius: "20px",
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
                <Box
                  sx={{
                    px: "30px",
                  }}
                >
                  <Typography
                    variant="h6"
                    className="fw-bold text-center mt-4 pb-3"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Membership Details
                  </Typography>
                </Box>
                <ul style={{ textAlign: "start" }}>
                  <li>{limit}</li>
                  <li>{bonus} +</li>
                  <li>{validity}</li>
                </ul>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: "17px",
                  fontWeight: "bold",
                  backgroundColor: "#4583ad",
                }}
                onClick={orderInformation}
              >
                Proceed To Order
              </Button>
            </Container>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            <Container
              sx={{
                my: "50px",
              }}
            >
              <img
                width="80%"
                src="https://readinghubforum.com/uploads/post_image/6a03606.png"
                alt=""
              />
            </Container>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default MembershipDetails;
