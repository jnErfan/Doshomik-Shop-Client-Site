import React from "react";
import { Box, Button, Container } from "@mui/material";
import FrequentlyQuestion from "../Home/FrequentlyQuestion/FrequentlyQuestion";
import { styled } from "@mui/system";
import Banner from "../SharedItem/Banner";

const StyledInputElement = styled("textarea")`
  line-height: 1.4375em;
  border: 2px solid #006ef2;
  &:focus {
    outline: none;
    border: 2px solid #000;
  }
`;

//  Asked Questions And Questions Form
const Faq = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"Faq"} from={"Home"} />
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
