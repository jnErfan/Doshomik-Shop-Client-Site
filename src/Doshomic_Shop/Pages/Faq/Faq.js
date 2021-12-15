import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FrequentlyQuestion from "../Home/FrequentlyQuestion/FrequentlyQuestion";
import { styled } from "@mui/system";

const StyledInputElement = styled("textarea")`
  line-height: 1.4375em;
  border: 2px solid #006ef2;
  &:focus {
    outline: none;
    border: 2px solid #000;
  }
`;
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
      <Box
        sx={{
          my: "150px",
          textAlign: "center",
        }}
      >
        <Container>
          <Box
            sx={{
              p: "50px",
              borderRadius: "20px",
              backgroundColor: "#e0e0e0",
            }}
          >
            <h1 style={{ fontWeight: "bold", marginBottom: "30px" }}>
              Ask Question
            </h1>
            <form>
              <StyledInputElement
                placeholder="Write The Question"
                multiline
                rows={4}
                required
                sx={{
                  width: "50%",
                  borderRadius: "5px",
                  p: "10px",
                }}
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "50%",
                  py: "15px",
                  mt: "20px",
                  fontWeight: "bold",
                  backgroundColor: "#006EF2",
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                Submit Question
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
      <FrequentlyQuestion />
    </Box>
  );
};

export default Faq;
