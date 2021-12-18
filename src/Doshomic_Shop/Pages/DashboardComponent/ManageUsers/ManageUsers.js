import { Button, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/allUsers")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  }, []);

  const makeAdmin = (email) => {
    axios.put(`https://doshomik-shop-server.herokuapp.com/?email=${email}`);
  };

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
        {users.map(({ _id, name, email, number }) => (
          <Grid item xs={12} md={6} lg={4} key={_id}>
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
                <h5>{name}</h5>
                <p>{email}</p>
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
                  <UserButton
                    sx={{ mt: "20px", px: "15px" }}
                    onClick={() => makeAdmin(email)}
                  >
                    Admin
                  </UserButton>
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
