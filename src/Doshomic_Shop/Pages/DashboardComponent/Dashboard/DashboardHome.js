import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const DashboardHome = () => {
  return (
    <Box>
      <Box sx={{ mt: "50px", ml: "50px" }}>
        <h3 style={{ color: "#3a5775", fontWeight: "bold" }}>Dashboard</h3>
      </Box>
      <Container sx={{ my: "100px" }}>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box
              sx={{
                background: "linear-gradient(0deg, #8757E9, #5171E6)",
                p: "20px",
                py: "30px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "end",
                  backgroundImage:
                    "url(https://www.mittalskinclinic.com/wp-content/uploads/2017/08/client-icon-18.png)",
                  backgroundSize: "30%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  00
                </Typography>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Total Users
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
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box
              sx={{
                background: "linear-gradient(30deg, #32E280, #129B8E)",
                p: "20px",
                py: "30px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "end",
                  backgroundImage:
                    "url(https://icon-library.com/images/orders-icon/orders-icon-5.jpg)",
                  backgroundSize: "30%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  00
                </Typography>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Total Orders
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
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box
              sx={{
                background: "linear-gradient(0deg, #7149AB, #9A50BA)",
                p: "20px",
                py: "30px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "end",
                  backgroundImage:
                    "url(https://cdn4.iconfinder.com/data/icons/seo-glyph-3/614/Analysis-512.png)",
                  backgroundSize: "30%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  00
                </Typography>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Memberships
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
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box
              sx={{
                background: "linear-gradient(10deg, #FF8A62, #bc4b00)",
                p: "20px",
                py: "30px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "end",
                  backgroundImage:
                    "url(https://icon-library.com/images/sales_chart_graph_financial_report_stock_market_statistics_stats_increase-512_111762.png)",
                  backgroundSize: "30%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {" "}
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  00
                </Typography>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Total Sales
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
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardHome;
