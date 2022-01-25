import React, { useEffect, useState } from "react";
import { Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import StarIcon from "@mui/icons-material/Star";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PeopleSays = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customerReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  const maxSteps = reviews.length;

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
        <Typography
          variant="body"
          sx={{ fontWeight: "bold", mb: "20px", color: "#000" }}
        >
          Valuable Customers Review
        </Typography>
        <Typography variant="body1" className="text-secondary px-5 mt-2">
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
            {reviews.map(({ image, name, rating, reviewDetails }) => (
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                      width="150px"
                      height="150px"
                      src={image}
                      alt=""
                    />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", mb: "5px", mt: "20px" }}
                    >
                      {name}
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
                    <Rating
                      value={rating}
                      readOnly
                      size="large"
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#808080",
                        mt: "30px",
                      }}
                    >
                      {reviewDetails}
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
