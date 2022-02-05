import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./AboutDS.css";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

// About Us All Information Component 
const AboutDS = () => {
  const [hide, setHide] = useState(false);
  return (
    <Container sx={{ mt: "150px", mb: "150px" }}>
      <Box className={!hide ? "d-none" : ""}>
        <Box
          sx={{ textAlign: "end", cursor: "pointer" }}
          onClick={() => setHide(false)}
        >
          <HighlightOffIcon
            sx={{ fontSize: "50px", mb: "20px" }}
            className="crossButton"
          />
        </Box>
        <Box className="animate__animated animate__zoomIn animate__slow">
          <iframe
            width="100%"
            height="515"
            src="https://www.youtube.com/embed/GYYvKxchHrM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
      <Grid container spacing={2} className={hide ? "d-none" : ""}>
        <Grid item xs={12} md={6} lg={6}>
          <img width="100%" src="https://i.ibb.co/C8gLkQ9/home3.png" alt="" />
          <Box
            sx={{ cursor: "pointer", marginTop: "-160px" }}
            onClick={() => setHide(true)}
          >
            <Box
              sx={{
                backgroundColor: "#003BFF",
                display: "inline-block",
                padding: "40px",
              }}
            >
              <Box className="animate__animated animate__pulse animate__slow animate__infinite">
                <SlowMotionVideoIcon
                  className=""
                  sx={{ color: "#fff", fontSize: "80px" }}
                  id="medeaIcon"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ ml: "30px", mt: "10px" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: "20px" }}>
              About Doshomik Shop
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: "20px" }}
              className="text-secondary"
            >
              Best Possible Way for Earn From Home. Temporibus eveniet commodi
              obcaecati voluptates reiciendis quis ipsum incidunt quibusdam
              aperiam autem suscipit maiores temporTemporibus eveniet commodi
              obcaecati voluptates reiciendis quis ipsum incidunt quibusdam
              aperiam autem suscipit maiores tempora impedit, exercitationem
              ratione distinctio nulla magni nemo cumque inventore sapiente nisi
              at vel. Laborum suscipit fuga.
            </Typography>
            <Typography variant="h6" className="text-secondary mt-4">
              <CheckIcon sx={{ color: "#4281FC" }} /> Dolores velit ad excepturi
              omnis quod nesciunt.
            </Typography>
            <Typography variant="h6" className="text-secondary mt-4">
              <CheckIcon sx={{ color: "#4281FC" }} /> Cumque non labore
              recusandae, eaque quo sint.
            </Typography>
            <Typography variant="h6" className="text-secondary mt-4">
              <CheckIcon sx={{ color: "#4281FC" }} /> Accusamus facere possimus
              illum, nulla nemo dolores.
            </Typography>
            <Typography variant="h6" className="text-secondary mt-4">
              <CheckIcon sx={{ color: "#4281FC" }} /> Seriores nisi iure
              consequatur incidunt aliquam sunt.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutDS;
