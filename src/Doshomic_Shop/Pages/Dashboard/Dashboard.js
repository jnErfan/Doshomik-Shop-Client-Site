import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Banner from "../SharedItem/Banner";

const Dashboard = () => {
  return (
    <Box>
      <Banner />
      <Box sx={{ mt: "50px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            lg={2}
            sx={{ backgroundColor: "#101536", height: "100vh" }}
          >
            <Box sx={{ mr: "10px" }}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    fontWeight: "600",
                    color: "white",
                    borderRadius: "0px",
                    width: "100%",
                    textAlign: "start",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    display: "block",
                    pl: "20px",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#dcecf53f",
                      color: "white",
                    },
                  }}
                >
                  {" "}
                  HOME
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={10} md={10} lg={10}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
