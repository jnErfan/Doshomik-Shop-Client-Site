import { Button, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
const UserButton = styled(Button)(({ theme }) => ({
  background: "#003BFF",
  color: "#fff",
  fontWeight: "bold",
  transition: "1s",
  "&:hover": {
    background: "#00DDF7",
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
  const [allUsers, setUsers] = useState([]);
  const [change, setChange] = useState("");
  const { users } = useAuth();

  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/allUsers")
      .then((result) => result.json())
      .then((data) => {
        setChange(data);
        setUsers(data);
      });
  }, [change]);

  const makeAdmin = (email) => {
    console.log(email);
    axios
      .put(`https://doshomik-shop-server.herokuapp.com/makeAdmin/${email}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Make User To Admin Successful",
          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  const makeModerator = (email) => {
    axios
      .put(`https://doshomik-shop-server.herokuapp.com/makeModerator/${email}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Make User To Moderator Successful",
          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  const makeUser = (email) => {
    axios
      .put(`https://doshomik-shop-server.herokuapp.com/makeUser/${email}`)
      .then((res) => {
        Swal.fire({
          icon: "error",
          title: "Demote To User Successful",
          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
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
        {allUsers.map(({ _id, name, email, number, position }) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={_id}>
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
                <h5>{name} </h5>
                <p>{email}</p>
                <h5>{number}</h5>
                <hr />
                {position === "Admin" || position === "Moderator" ? (
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "start", fontWeight: "bold" }}
                  >
                    {position}
                  </Typography>
                ) : (
                  <Typography
                    variant="h5"
                    sx={{ textAlign: "start", fontWeight: "bold" }}
                  >
                    Promote To
                  </Typography>
                )}

                <Box
                  sx={{
                    backgroundColor: "#003BFF",
                    height: "4px",
                    width: "100px",
                  }}
                />
                {position === "Admin" || position === "Moderator" ? (
                  <UserButtonDemote
                    onClick={() => makeUser(email)}
                    sx={{ mt: "20px", px: "15px", textTransform: "revert" }}
                  >
                    Remove To {position}{" "}
                    <i className="fas fa-user-times ms-1"></i>
                  </UserButtonDemote>
                ) : (
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {users.position === "Moderator" ? (
                      <Button
                        variant="contained"
                        style={{
                          marginTop: "20px",
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          backgroundColor: "gray",
                          cursor: "not-allowed",
                        }}
                      >
                        Admin
                      </Button>
                    ) : (
                      <UserButton
                        sx={{ mt: "20px", px: "15px" }}
                        onClick={() => makeAdmin(email)}
                      >
                        Admin
                      </UserButton>
                    )}
                    <UserButton
                      onClick={() => makeModerator(email)}
                      sx={{ mt: "20px", px: "15px" }}
                    >
                      Moderator
                    </UserButton>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageUsers;
