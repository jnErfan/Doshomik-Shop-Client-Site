import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FrequentlyQuestion from "../Home/FrequentlyQuestion/FrequentlyQuestion";

const Faq = () => {
  return (
    <Box>
      <Box className="BannerContainer">
        <Box
          className="BannerContainer2"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
          }}
        >
          <Box sx={{ ml: "50px", mb: "50px" }}>
            <Typography variant="h1" sx={{ color: "#fff", pb: "10px" }}>
              Faq
            </Typography>
            <Breadcrumbs
              aria-label="breadcrumb"
              style={{ color: "#fff", fontSize: "25px" }}
            >
              <Link
                underline="hover"
                color="inherit"
                href="/home"
                style={{ color: "#fff", cursor: "pointer" }}
              >
                Home
              </Link>
              <Typography
                color="text.primary"
                style={{ color: "#fff", fontSize: "25px" }}
              >
                Faq
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: "50px", textAlign: "center" }}>
        <Container>
          <form>
            <TextField
              id="outlined-multiline-static"
              label="Ask Questions"
              placeholder="Write The Question"
              multiline
              rows={4}
              sx={{ width: "50%" }}
            />{" "}
            <br />
            <Button
              variant="contained"
              sx={{
                width: "50%",
                py: "15px",
                mt: "20px",
                background: "#006EF2",
                "&:hover": { backgroundColor: "#000" },
              }}
            >
              Submit Question
            </Button>
          </form>
        </Container>
      </Box>
      <FrequentlyQuestion />
    </Box>
  );
};

export default Faq;
