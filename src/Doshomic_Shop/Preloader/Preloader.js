import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Preloader = () => {
  return (
    <Box
      style={{
        height: "100vh",
        background: "#b7c5f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "999999",
        overflowX: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            width="100%"
            className="animate__animated animate__bounceInLeft"
            src="https://i.ibb.co/M5BKvzB/unnamed.gif"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} sx={{ textAlign: "center" }}>
          <Box className="animate__animated animate__swing animate__slower animate__infinite">
            <img
              width="80%"
              className="animate__animated animate__zoomIn"
              src="https://i.ibb.co/PhSshSd/cooltext403300208102708.png"
              alt=""
            />
          </Box>
          <Box>
            <img
              width="30%"
              className="animate__animated animate__fadeInRight animate__slower"
              src="https://i.ibb.co/vHjHt16/cooltext403300354709741.png"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Preloader;
