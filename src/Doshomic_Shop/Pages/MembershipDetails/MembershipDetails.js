import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Banner from "../SharedItem/Banner";

const MembershipDetails = () => {
  const navigate = useNavigate();
  const { memberShipDetailsId } = useParams();
  const [membership, setMembership] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
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
      inputPlaceholder: "Enter Ordered Item Profile/Video Link",
    });
    if (name && number && url) {
      Swal.fire({
        title: "Order Confirm ?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Confirmed",
        cancelButtonText: "Cancel",
      }).then((result) => {
        const date = new Date().toDateString();
        const orderDetail = membership;
        const detailOrder = {
          name: name,
          email: user.email,
          number: number,
          url: url,
          date,
          orderDetail,
        };
        axios
          .post(
            "https://doshomik-shop-server.herokuapp.com/membershipOrder",
            detailOrder
          )
          .then((res) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              if (result.isConfirmed) {
                Swal.fire({
                  icon: "success",
                  title: "Your Order Successful",
                  text: "Your Order We Will Be Delivered Soon",
                });
                navigate("/myOrders");
              }
            }, 3000);
          });
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
      {isLoading && (
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: "9999",
          }}
        >
          <img
            style={{}}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}
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
            </Container>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            <Container
              sx={{
                my: "50px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  width="80%"
                  style={{ marginBottom: "-36px", marginTop: "20px" }}
                  src="https://readinghubforum.com/uploads/post_image/6a03606.png"
                  alt=""
                />
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: "20px",
                  fontWeight: "bold",
                  backgroundColor: "#4583ad",
                  borderRadius: "20px",
                }}
                onClick={orderInformation}
              >
                Proceed To Order
              </Button>
            </Container>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default MembershipDetails;
