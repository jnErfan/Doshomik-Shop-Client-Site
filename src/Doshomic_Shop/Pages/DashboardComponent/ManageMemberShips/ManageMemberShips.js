import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import Swal from "sweetalert2";

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
  const [membership, setMembership] = useState([]);
  const [membershipDelete, setMembershipDelete] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/allMemberShips")
      .then((result) => result.json())
      .then((data) => {
        setMembershipDelete(data);
        setMembership(data);
      });
  }, [membershipDelete]);

  const deleteMembership = (id) => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "You Won't Be Delete This !",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        setTimeout(() => {
          axios
            .delete(
              `https://doshomik-shop-server.herokuapp.com/deleteMembership/${id}`
            )
            .then((result) => {
              if (result.data.deletedCount === 1) {
                setIsLoading(false);
                Swal.fire(
                  "Deleted!",
                  "Membership Has Been Deleted.",
                  "success"
                );
              } else {
                setIsLoading(false);
              }
            });
        }, 3000);
      }
    });
  };

  return (
    <Box>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "fixed",
              zIndex: "99999999",
            }}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}
      <Container sx={{ mt: "100px", mb: "150px" }}>
        <Box sx={{ textAlign: "center", mb: "50px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#0C163C" }}
          >
            Manage All Memberships
          </Typography>{" "}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#0C163C",
                height: "5px",
                width: "100px",
                mt: "10px",
              }}
            />
          </Box>
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
                  <SubscribeButton
                    onClick={() => deleteMembership(_id)}
                    sx={{ mt: "20px", px: "15px" }}
                  >
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
