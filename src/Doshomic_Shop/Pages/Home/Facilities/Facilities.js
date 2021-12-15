import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LandscapeIcon from "@mui/icons-material/Landscape";
import LockIcon from "@mui/icons-material/Lock";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import { Box } from "@mui/system";
import { Container, Grid, Paper, Typography } from "@mui/material";
import "./Facilities.css";

const facilities = [
  {
    Icon: PublicIcon,
    title: "We're Global",
    description:
      "Voluptatibus at vero, amet sit esse sequi quam odio debitis. Nulla porro tenetur adipisci laborum sunt repellendus error, asperiores quam nobis sit!",
  },
  {
    Icon: HeadsetMicIcon,
    title: "Best Support",
    description:
      "Best Support amet sit esse sequi quam odio debitis. Nulla porro tenetur adipisci laborum sunt repellendus error, asperiores quam  debitis.",
  },
  {
    Icon: ConnectWithoutContactIcon,
    title: "We Accept Crypto",
    description:
      "We Accept Crypto quam odio debitis. Nulla porro tenetur adipisci laborum sunt repellendus error, asperiores quam Crypto quam",
  },
  {
    Icon: LandscapeIcon,
    title: "We're Profitable",
    description:
      "We're Profitable Nulla  adipisci laborum sunt aborum sunt  repellendus error, asperiores quam nobis sit porro tenetur.",
  },
  {
    Icon: LockIcon,
    title: "We're Secure",
    description:
      "We're Secure quam . Nulla porro tenetur adipisci laborum sunt repellendus error, asperiores quam Nulla porro odio debitis",
  },
  {
    Icon: FileCopyRoundedIcon,
    title: "We're Certified",
    description:
      "We're Certified odio debitis. Nulla porro tenetur adipisci laborum sunt repellendus error, asperiores quam nobiser",
  },
];

const Facilities = () => {
  return (
    <Container sx={{ mb: "100px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: "20px", color: "#363636" }}
        >
          Benefits And Facilities
        </Typography>
        <Typography variant="body1" className="text-secondary px-5">
          Take a look at the biggest benefits of good facilities management and
          how they help a workplace run at maximum efficiency. building, or
          equipment used for a particular purpose or activity: The new sports
          facility has a swimming pool
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {facilities.map(({ Icon, title, description }) => (
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "30px",
                borderRadius: "10px",
                boxShadow: 0,
              }}
              className="shadow-sm facilitiePaper"
            >
              <Icon
                sx={{ fontSize: "90px", color: "#003BFF" }}
                className="text-icon"
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", my: "25px", color: "#363636" }}
                className="text-title"
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                className="text-secondary textSecondary"
              >
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Facilities;
