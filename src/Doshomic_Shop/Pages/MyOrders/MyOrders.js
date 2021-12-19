import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Banner from "../SharedItem/Banner";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [changeOrders, setChangeOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setChangeOrders(data);
        setOrders(data);
      });
  }, [changeOrders]);
  //
  const allOrder = orders.filter((order) => order.email === user.email);

  async function orderCancel(id) {
    const { value: password } = await Swal.fire({
      icon: "question",
      title: "Cancel This Order",
      input: "text",
      inputLabel: "You Want To Cancel This, Type (CANCEL)",
      inputPlaceholder: "CANCEL",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    if (password === "CANCEL") {
      axios.delete(`http://localhost:5000/deleteOrder/${id}`).then((data) => {
        console.log(data.result);
        Swal.fire({
          icon: "success",
          title: "Order Cancel Success",
          padding: "3em",
          showConfirmButton: false,
          timer: 3000,
        });
      });
    } else {
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  return (
    <Box>
      <Box>
        <Banner pageName={"My Orders"} from={"Home"} />
      </Box>
      <Container sx={{ my: "100px" }}>
        {!orders.length ? (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "gray" }}>
              No Order
            </Typography>
          </Box>
        ) : (
          <Box>
            <Grid container spacing={3}>
              {allOrder.map(({ _id, status, orderDetail }) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  sx={{ textAlign: "center" }}
                  key={_id}
                >
                  <Box
                    sx={{
                      boxShadow: "1px 1px 10px gray",
                      p: "30px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", mt: "10px", color: "#31487D" }}
                    >
                      {orderDetail?.[0].service}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mt: "10px", color: "#363636" }}
                    >
                      Price: {orderDetail?.[0].price} ৳
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", mt: "10px", color: "#363636" }}
                    >
                      Limit : {orderDetail?.[0].limit}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        mt: "20px",
                      }}
                    >
                      <Box>
                        {status !== "Placed" && (
                          <Button
                            onClick={() => orderCancel(_id)}
                            variant="contained"
                            sx={{
                              fontWeight: "bold",
                              backgroundColor: "#ff0000",
                              display: "inline-block",
                              color: "#fff",
                              px: "25px",
                              py: "5px",
                              mx: "5px",
                              borderRadius: "25px",
                              "&:hover": {
                                backgroundColor: "#ff0000",
                              },
                            }}
                          >
                            Cancel
                          </Button>
                        )}
                        {status === "Placed" && (
                          <Link to="/review" style={{ textDecoration: "none" }}>
                            {" "}
                            <Button
                              variant="contained"
                              sx={{
                                fontWeight: "bold",
                                display: "inline-block",
                                backgroundColor: "#FFA500",
                                color: "#fff",
                                px: "25px",
                                py: "5px",
                                textTransform: "revert",
                                mx: "5px",
                                borderRadius: "25px",
                                "&:hover": {
                                  backgroundColor: "#FFA500",
                                  color: "#fff",
                                },
                              }}
                            >
                              Review
                            </Button>
                          </Link>
                        )}
                      </Box>
                      <Box>
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
                            <i className="far fa-check-circle"></i> Placed
                          </Typography>
                        )}
                        {status !== "Pending" && (
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
                            <i className="far fa-times-circle"></i> Canceled
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default MyOrders;
