import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const portfolio = [
  {
    label: "Rajendra",
    job: "DS Player",
    port: "form of a Game Boy Advance cartridge, the Rumble Pak vibrates to reflect the action in compatible games, such as when the player bumps ",
    img: "https://i.ibb.co/Z686NP1/user3.jpg",
  },
  {
    label: "Cris Hamsort",
    job: "Web Developer",
    port: "web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server ",
    img: "https://i.ibb.co/b6SnmrZ/user1.jpg",
  },
  {
    label: "John Doe",
    job: "Businessman",
    port: "Businessman is a 2012 Indian Telugu-language action crime film written and directed by Puri Jagannadh. Based on a concept by Ram Gopal Varma and produced by ",
    img: "https://i.ibb.co/pnMjwhV/user2.jpg",
  },
];

const PeopleSays = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = portfolio.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container sx={{ mb: "100px" }}>
      <Box sx={{ textAlign: "center", my: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          What People Says
        </Typography>
        <Typography variant="body1" className="text-secondary px-5">
          One of our experts will correct your English. some people say vs some
          people says. A complete search of the Whatever <br /> People Say I Am,
          That's What I'm Not is the debut studio album by English rock band
          Arctic Monkeys,
        </Typography>
      </Box>
      <Box>
        <Box>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {portfolio.map(({ img, label, job, port }) => (
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ textAlign: "center", cursor: "pointer" }}
                >
                  <Box className="shadow-sm rounded-3 p-5 m-5">
                    <img
                      className="rounded-circle"
                      style={{ border: "5px solid #E2E0E0" }}
                      width="100px"
                      height="100px"
                      src={img}
                      alt=""
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: "5px", mt: "20px" }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#0056FB",
                      }}
                    >
                      {job}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#808080",
                        mt: "30px",
                      }}
                    >
                      {port}
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sx={{ textAlign: "center", cursor: "pointer" }}
                >
                  <Box className="shadow-sm rounded-3 p-5 m-5">
                    <img
                      className="rounded-circle"
                      style={{ border: "5px solid #E2E0E0" }}
                      width="100px"
                      height="100px"
                      src={img}
                      alt=""
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: "5px", mt: "20px" }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#0056FB",
                      }}
                    >
                      {job}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#808080",
                        mt: "30px",
                      }}
                    >
                      {port}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </AutoPlaySwipeableViews>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "0px" }}>
            {" "}
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PeopleSays;
