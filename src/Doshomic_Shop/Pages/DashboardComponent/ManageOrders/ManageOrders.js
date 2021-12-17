import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ManageOrders.css";

const ManageOrders = () => {
  return (
    <Box sx={{ mt: "50px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0C163C" }}>
          Manage All Orders
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
                  <TableBody>
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
                          Youtube View
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "600", color: "#101536" }}
                        >
                          Limit: 1000 View
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "600", color: "#101536" }}
                        >
                          Bonus: 100 View
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "600", color: "#101536" }}
                        >
                          Price: 400 bdt
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bold", color: "#494949" }}
                        >
                          J.N.Erfan
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", color: "#494949" }}
                        >
                          j.n.erfan420@gmail.com
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: "bold", color: "#494949" }}
                        >
                          +8801978352135
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Link:{" "}
                          <a
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                            href="https://www.youtube.com/channel/UCRJ5d8nP2PBmv6rYdtNfFag"
                          >
                            Click For View
                          </a>
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
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
                          Placed
                        </Typography>
                        {/*  <Typography
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
                          Pending
                        </Typography>
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
                          Canceled
                        </Typography> */}
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {" "}
                          <Button
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
                          <Button
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
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManageOrders;
