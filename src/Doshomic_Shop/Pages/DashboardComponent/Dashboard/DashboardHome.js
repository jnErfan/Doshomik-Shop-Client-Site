import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const [allUsers, setUsers] = useState([]);
  const navigate = useNavigate();
  const [change, setChange] = useState("");
  const [memberShips, setMemberships] = useState([]);
  const [orderChange, setOrderChange] = useState([]);
  const [membership, setMembership] = useState([]);

  // Total Users
  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/allUsers")
      .then((result) => result.json())
      .then((data) => {
        setChange(data);
        setUsers(data);
      });
  }, [change]);

  // Total Order
  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/membershipOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrderChange(data);
        setMemberships(data);
      });
  }, [orderChange]);

  //  Filtering All Status
  const pending = memberShips.filter((order) => order.status === "Pending");
  const reject = memberShips.filter((order) => order.status === "Canceled");
  const shipped = memberShips.filter((order) => order.status === "Placed");
  const earn = memberShips.filter((order) => order.status === "Placed");

  let Earn = 0;
  for (const totalEarn of earn) {
    Earn = Number(totalEarn.orderDetail[0].price) + Earn;
  }

  // All Membership
  useEffect(() => {
    fetch("https://doshomik-shop-server.herokuapp.com/allMemberShips")
      .then((result) => result.json())
      .then((data) => setMembership(data));
  }, []);

  // Dashboard Cards
  const dashboardShort = [
    {
      number: allUsers.length,
      title: "Total Users",
      image:
        "https://www.mittalskinclinic.com/wp-content/uploads/2017/08/client-icon-18.png",
      color1: "#8757E9",
      color2: "#5171E6",
      degree: "0deg",
      viewLink: "/dashboard/manageUsers",
    },
    {
      number: memberShips.length,
      title: "Total Orders",
      image: "https://icon-library.com/images/orders-icon/orders-icon-5.jpg",
      color1: "#32E280",
      color2: "#129B8E",
      degree: "30deg",
      viewLink: "/dashboard/manageOrders",
    },
    {
      number: pending.length,
      title: "Pending Order",
      image: "https://image.flaticon.com/icons/png/512/1250/1250725.png",
      color1: "#4C0348",
      color2: "#BA4448",
      degree: "20deg",
      viewLink: "/dashboard/manageOrders",
    },
    {
      number: shipped.length,
      title: "Placed Order",
      image:
        "https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Success-Place-Order-Complete-Shopping-Tick-512.png",
      color1: "#158468",
      color2: "#009688",
      degree: "80deg",
      viewLink: "/dashboard/manageOrders",
    },
    {
      number: reject.length,
      title: "Cancel Order",
      image: "https://img.icons8.com/windows/32/000000/--cancel-delete.png",
      color1: "#ff0000",
      color2: "#3f2121",
      degree: "80deg",
      viewLink: "/dashboard/manageOrders",
    },
    {
      number: membership.length,
      title: "Memberships",
      image:
        "https://cdn4.iconfinder.com/data/icons/seo-glyph-3/614/Analysis-512.png",
      color1: "#7149AB",
      color2: "#9A50BA",
      degree: "0deg",
      viewLink: "/dashboard/manageMemberShips",
    },
    {
      number: shipped.length,
      title: "Total Sales",
      image:
        "https://icon-library.com/images/sales_chart_graph_financial_report_stock_market_statistics_stats_increase-512_111762.png",
      color1: "#FF8A62",
      color2: "#bc4b00",
      degree: "10deg",
      viewLink: "/dashboard/manageOrders",
    },

    {
      number: shipped.length,
      title: "Today Sales",
      image: "https://fxbitcoinpro365options.com/img/cashout.png",
      color1: "#19294A",
      color2: "#4A6AB4",
      degree: "150deg",
      viewLink: "/dashboard/manageOrders",
    },
  ];

  // Dashboard All Information Card
  return (
    <Box sx={{ mb: "200px" }}>
      <Box sx={{ mt: "50px", ml: "50px" }}>
        <h3 style={{ color: "#3a5775", fontWeight: "bold" }}>Dashboard</h3>
      </Box>
      <Container sx={{ my: "100px" }}>
        <Grid container spacing={4}>
          {dashboardShort.map(
            ({ number, title, image, color1, color2, degree, viewLink }) => (
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <Box
                  sx={{
                    background: `linear-gradient(${degree}, ${color1}, ${color2})`,
                    p: "20px",
                    py: "30px",
                    borderRadius: "20px",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "end",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "30%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {" "}
                    <Typography
                      variant="h4"
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      <VisibilitySensor>
                        {({ isVisible }) => (
                          <span>
                            {isVisible ? (
                              <CountUp end={number} duration={1} delay={0} />
                            ) : (
                              0
                            )}
                          </span>
                        )}
                      </VisibilitySensor>
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {title}
                    </Typography>
                    <Button
                      onClick={() => navigate(viewLink)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        fontWeight: "bold",
                        mt: "10px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#000",
                        },
                      }}
                    >
                      View All
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: "50px" }}>
            Earnings Report
          </Typography>
          <Grid container spacing={3} sx={{ mt: "30px" }}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #7367F0",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <AttachMoneyIcon
                  sx={{
                    backgroundColor: "#7367F0",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? (
                          <CountUp end={Earn} duration={2} delay={0} />
                        ) : (
                          0
                        )}
                      </span>
                    )}
                  </VisibilitySensor>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Earn
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box width="250px" sx={{ mt: "30px" }}>
                  <CircularProgressbar
                    value={Earn / 100}
                    styles={buildStyles({
                      pathColor: "#7367F0",
                      trailColor: "#c3c0e8",
                    })}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #E91E63",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <MoneyOffIcon
                  sx={{
                    backgroundColor: "#E91E63",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  000
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Deposit Charge
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box width="250px" sx={{ mt: "30px" }}>
                  <CircularProgressbar
                    value={1}
                    styles={buildStyles({
                      pathColor: "#E91E63",
                      trailColor: "#ddadbd",
                    })}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #4CAF50",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <PriceCheckIcon
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? (
                          <CountUp end={Earn} duration={2} delay={0} />
                        ) : (
                          0
                        )}
                      </span>
                    )}
                  </VisibilitySensor>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Total Earnings
                </Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box width="250px" sx={{ mt: "30px" }}>
                  <CircularProgressbar
                    value={Earn / 200}
                    styles={buildStyles({
                      pathColor: "#4CAF50",
                      trailColor: "#becebe",
                    })}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardHome;
