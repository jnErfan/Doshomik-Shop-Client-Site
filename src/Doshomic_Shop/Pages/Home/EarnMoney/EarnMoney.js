import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./EarnMoney.css";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MoneyIcon from "@mui/icons-material/Money";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const EarnMoney = () => {
  return (
    <Box sx={{ mb: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <img
            style={{
              height: "100vh",
              width: "100%",
            }}
            className="images"
            src="https://i.ibb.co/Yfn3zBb/home2.png"
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            backgroundColor: "#003BFF",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ pl: "70px" }}>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#fff", mb: "20px" }}
              >
                Best Place To Earn <br /> Money Online
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                After you take the survey, you'll either accrue points that are
                redeemable for free gift cards, or earn cash you can transfer to
                a bank or PayPal account. Here's a list of the best-rated survey
                apps for making money.
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={4} sx={{ mt: "20px", pr: "50px" }}>
                <Grid item xs={6} md={4} lg={3}>
                  <i
                    className="fas fa-ad"
                    style={{ fontSize: "60px", color: "white" }}
                  ></i>
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <span>
                          {isVisible ? (
                            <CountUp end={568} duration={2} delay={0} />
                          ) : (
                            0
                          )}
                          K+
                        </span>
                      )}
                    </VisibilitySensor>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    Advertisement
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <AddLinkIcon sx={{ color: "#fff", fontSize: "60px" }} />
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <span>
                          {isVisible ? (
                            <CountUp end={20} duration={2} delay={0} />
                          ) : (
                            0
                          )}
                          M+
                        </span>
                      )}
                    </VisibilitySensor>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    Impression
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <PeopleAltIcon sx={{ color: "#fff", fontSize: "60px" }} />
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <span>
                          {isVisible ? (
                            <CountUp end={50} duration={2} delay={0} />
                          ) : (
                            0
                          )}
                          K+
                        </span>
                      )}
                    </VisibilitySensor>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    Users
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <MoneyIcon sx={{ color: "#fff", fontSize: "60px" }} />
                  <Typography
                    variant="h4"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <span>
                          $
                          {isVisible ? (
                            <CountUp end={750} duration={2} delay={0} />
                          ) : (
                            0
                          )}
                          K+
                        </span>
                      )}
                    </VisibilitySensor>
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff", fontWeight: "600" }}
                  >
                    Withdraw
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EarnMoney;
