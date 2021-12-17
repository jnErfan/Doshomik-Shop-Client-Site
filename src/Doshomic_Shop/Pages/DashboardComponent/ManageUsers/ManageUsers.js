import { Button, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const UserButton = styled(Button)(({ theme }) => ({
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
const UserButtonDemote = styled(Button)(({ theme }) => ({
  outline: "2px solid red",
  color: "red",
  fontWeight: "bold",
  transition: "1s",
  "&:hover": {
    background: "red",
    transition: "500ms",
    color: "#fff",
  },
}));

const users = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0tIHNcX1KiwFaVYxny0VCJgHrHi2I5IOQ&usqp=CAU",
    name: "J.N.Erfan",
    email: "j.n.erfan@gmail.com",
    number: "+8801978352135",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0tIHNcX1KiwFaVYxny0VCJgHrHi2I5IOQ&usqp=CAU",
    name: "J.N.Erfan",
    email: "j.n.erfan@gmail.com",
    number: "+8801978352135",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0tIHNcX1KiwFaVYxny0VCJgHrHi2I5IOQ&usqp=CAU",
    name: "J.N.Erfan",
    email: "j.n.erfan@gmail.com",
    number: "+8801978352135",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0tIHNcX1KiwFaVYxny0VCJgHrHi2I5IOQ&usqp=CAU",
    name: "J.N.Erfan",
    email: "j.n.erfan@gmail.com",
    number: "+8801978352135",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0tIHNcX1KiwFaVYxny0VCJgHrHi2I5IOQ&usqp=CAU",
    name: "J.N.Erfan",
    email: "j.n.erfan@gmail.com",
    number: "+8801978352135",
  },
];

const ManageUsers = () => {
  return (
    <Box sx={{ my: "100px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0C163C" }}>
          Manage All Users
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
        {users.map(({ image, name, email, number }) => (
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ p: "30px" }}>
              {" "}
              <Box
                sx={{
                  textAlign: "center",
                  p: "25px",
                  borderRadius: "10px",
                  boxShadow: "1px 1px 10px gray",
                }}
              >
                <img
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "100%", marginBottom: "20px" }}
                  src={image}
                  alt=""
                />
                <h5>{name}</h5>
                <h5>{email}</h5>
                <h5>{number}</h5>
                <hr />
                <Typography
                  variant="h5"
                  sx={{ textAlign: "start", fontWeight: "bold" }}
                >
                  Promote To
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#003BFF",
                    height: "4px",
                    width: "100px",
                  }}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <UserButton sx={{ mt: "20px", px: "15px" }}>Admin</UserButton>
                  <UserButton sx={{ mt: "20px", px: "15px" }}>
                    Moderator
                  </UserButton>
                </Box>
                <UserButtonDemote sx={{ mt: "20px", px: "15px" }}>
                  Make User <i className="fas fa-user-times ms-1"></i>
                </UserButtonDemote>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageUsers;
