import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const DashboardHome = () => {
  const dashboardShort = [
    {
      number: "00",
      title: "Total Users",
      image:
        "https://www.mittalskinclinic.com/wp-content/uploads/2017/08/client-icon-18.png",
      color1: "#8757E9",
      color2: "#5171E6",
      degree: "0deg",
    },
    {
      number: "00",
      title: "Total Orders",
      image: "https://icon-library.com/images/orders-icon/orders-icon-5.jpg",
      color1: "#32E280",
      color2: "#129B8E",
      degree: "30deg",
    },
    {
      number: "00",
      title: "Memberships",
      image:
        "https://cdn4.iconfinder.com/data/icons/seo-glyph-3/614/Analysis-512.png",
      color1: "#7149AB",
      color2: "#9A50BA",
      degree: "0deg",
    },
    {
      number: "00",
      title: "Total Sales",
      image:
        "https://icon-library.com/images/sales_chart_graph_financial_report_stock_market_statistics_stats_increase-512_111762.png",
      color1: "#FF8A62",
      color2: "#bc4b00",
      degree: "10deg",
    },
    {
      number: "00",
      title: "Placed Order",
      image:
        "https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-2-1/32/Success-Place-Order-Complete-Shopping-Tick-512.png",
      color1: "#158468",
      color2: "#009688",
      degree: "80deg",
    },
    {
      number: "00",
      title: "Pending Order",
      image: "https://image.flaticon.com/icons/png/512/1250/1250725.png",
      color1: "#4C0348",
      color2: "#BA4448",
      degree: "20deg",
    },
    {
      number: "00",
      title: "Today Sales",
      image: "https://fxbitcoinpro365options.com/img/cashout.png",
      color1: "#19294A",
      color2: "#4A6AB4",
      degree: "150deg",
    },
    {
      number: "00",
      title: "Total Withdraw",
      image: "http://cdn.onlinewebfonts.com/svg/img_459178.png",
      color1: "#962875",
      color2: "#B34592",
      degree: "80deg",
    },
  ];
  return (
    <Box sx={{ mb: "200px" }}>
      <Box sx={{ mt: "50px", ml: "50px" }}>
        <h3 style={{ color: "#3a5775", fontWeight: "bold" }}>Dashboard</h3>
      </Box>
      <Container sx={{ my: "100px" }}>
        <Grid container spacing={4}>
          {dashboardShort.map(
            ({ number, title, image, color1, color2, degree }) => (
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
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {number}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {title}
                    </Typography>
                    <Button
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
                  000
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Earn
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box width="250px" sx={{ mt: "30px" }}>
                  <CircularProgressbar
                    value={50}
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
                    value={50}
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
                  000
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Total Earnings
                </Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box width="250px" sx={{ mt: "30px" }}>
                  <CircularProgressbar
                    value={50}
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
