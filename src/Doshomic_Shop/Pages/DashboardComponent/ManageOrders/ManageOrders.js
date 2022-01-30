import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ManageOrders.css";
import axios from "axios";
import Swal from "sweetalert2";

const ManageOrders = () => {
  const [memberShips, setMemberships] = useState([]);
  const [orderChange, setOrderChange] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/membershipOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrderChange(data);
        setMemberships(data);
      });
  }, [orderChange]);

  const placedOrder = (id) => {
    Swal.fire({
      title: "Placed This Order ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#101536",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Placed",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://doshomik-shop-server.herokuapp.com/statusUpdate/${id}`,
            {
              status: "Placed",
            }
          )
          .then((result) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              if (result.data.modifiedCount) {
                Swal.fire("Placed", "This Order Shipped Successful", "success");
              }
            }, 3000);
          });
      }
    });
  };

  async function cancelOrder(id) {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Order Cancel Reason",
      inputPlaceholder: "Type Cancel Reason",
      inputAttributes: {
        "aria-label": "Type Cancel Reason",
      },
      showCancelButton: true,
      confirmButtonText: "Confirm",
    });

    if (text) {
      axios
        .put(`https://doshomik-shop-server.herokuapp.com/statusUpdate/${id}`, {
          status: "Canceled",
          reason: text,
        })
        .then((result) => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            if (result.data.modifiedCount) {
              Swal.fire(
                "Canceled Successful",
                "Cancel Reason Send Customer Mail",
                "success"
              );
            }
          }, 3000);
        });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Please Type Reason",
      });
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
            zIndex: "999",
            position: "fixed",
          }}
        >
          <img
            style={{}}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}
      <Box sx={{ mt: "50px" }}>
        <Box sx={{ textAlign: "center", mb: "50px" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#0C163C" }}
          >
            Manage All Orders
          </Typography>
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
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <Container>
                <TableContainer
                  component={Paper}
                  sx={{
                    maxHeight: "60vh",
                    boxShadow: "1px 1px 20px #afb3ce",
                    borderRadius: "10px",
                  }}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          className="header"
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#101536",
                            px: "50px",
                          }}
                        >
                          Order Details
                        </TableCell>
                        <TableCell
                          className="header"
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#101536",
                            px: "50px",
                          }}
                        >
                          Customer Details
                        </TableCell>
                        <TableCell
                          className="header"
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#101536",
                            px: "50px",
                          }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          className="header"
                          align="center"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            px: "50px",
                            color: "#101536",
                          }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    {!memberShips.length ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          position: "absolute",
                          ml: "25%",
                        }}
                      >
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: "bold", color: "gray" }}
                        >
                          No Order
                        </Typography>
                      </Box>
                    ) : (
                      <TableBody>
                        {" "}
                        {memberShips.map(
                          ({
                            _id,
                            name,
                            email,
                            number,
                            url,
                            date,
                            orderDetail,
                            status,
                          }) => (
                            <TableRow
                              sx={{
                                border: 0,
                                "&:hover": { backgroundColor: "#E3EEFA" },
                              }}
                            >
                              <TableCell align="left">
                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: "bold", color: "#101536" }}
                                >
                                  {orderDetail?.[0]?.service}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600", color: "#101536" }}
                                >
                                  Limit: {orderDetail?.[0]?.limit} View
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600", color: "#101536" }}
                                >
                                  Bonus: {orderDetail?.[0]?.bonus} View
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "600", color: "#101536" }}
                                >
                                  Price: {orderDetail?.[0]?.price} bdt
                                </Typography>
                              </TableCell>
                              <TableCell align="left">
                                <Typography
                                  variant="body1"
                                  sx={{ fontWeight: "bold", color: "#494949" }}
                                >
                                  {name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "bold", color: "#494949" }}
                                >
                                  {email}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "bold", color: "#494949" }}
                                >
                                  {number}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "bold", color: "#494949" }}
                                >
                                  Placed On: {date}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  Link:{" "}
                                  <a
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none" }}
                                    href={url}
                                  >
                                    Click For View
                                  </a>
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
                                {status === "Placed" && (
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
                                    <i className="far fa-check-circle"></i>{" "}
                                    Placed
                                  </Typography>
                                )}
                                {status === "Pending" && (
                                  <Typography
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
                                    <i className="fas fa-sync-alt"></i> Pending
                                  </Typography>
                                )}
                                {status === "Canceled" && (
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
                                    <i className="far fa-times-circle"></i>{" "}
                                    Canceled
                                  </Typography>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                  }}
                                >
                                  {status !== "Placed" && (
                                    <Button
                                      onClick={() => placedOrder(_id)}
                                      variant="contained"
                                      sx={{
                                        textTransform: "revert",
                                        mx: "10px",
                                        fontWeight: "bold",
                                        backgroundColor: "#079100",
                                        "&:hover": {
                                          backgroundColor: "#079100",
                                        },
                                      }}
                                    >
                                      Placed
                                    </Button>
                                  )}
                                  {status === "Placed" && (
                                    <Button
                                      variant="contained"
                                      disabled
                                      sx={{
                                        textTransform: "revert",
                                        mx: "10px",
                                        fontWeight: "bold",
                                        cursor: "not-allowed",
                                        backgroundColor: "#079100",
                                        "&:hover": {
                                          backgroundColor: "#079100",
                                        },
                                      }}
                                    >
                                      Shipped
                                    </Button>
                                  )}
                                  {status !== "Canceled" && (
                                    <Button
                                      onClick={() => cancelOrder(_id)}
                                      variant="contained"
                                      sx={{
                                        textTransform: "revert",
                                        fontWeight: "bold",
                                        mx: "10px",
                                        backgroundColor: "#ff0000",
                                        "&:hover": {
                                          backgroundColor: "#ff0000",
                                        },
                                      }}
                                    >
                                      Cancel
                                    </Button>
                                  )}
                                  {status === "Canceled" && (
                                    <Button
                                      disabled
                                      variant="contained"
                                      sx={{
                                        textTransform: "revert",
                                        fontWeight: "bold",
                                        mx: "10px",
                                        cursor: "not-allowed",
                                        backgroundColor: "#ff0000",
                                        "&:hover": {
                                          backgroundColor: "#ff0000",
                                        },
                                      }}
                                    >
                                      Canceled
                                    </Button>
                                  )}
                                </Box>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    )}
                  </Table>
                </TableContainer>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageOrders;
