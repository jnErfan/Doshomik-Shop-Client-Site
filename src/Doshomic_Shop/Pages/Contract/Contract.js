import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./Contract.css";
import Banner from "../SharedItem/Banner";
import MapIcon from "@mui/icons-material/Map";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

const StyledInputElement = styled("input")`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.4375em;
  background: #fff;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 6px 10px;
  color: #006ef2;
  transition: width 300ms ease;
  &:focus {
    outline: none;
  }
`;

const contacts = [
  {
    Icon: MapIcon,
    title: "Office Address",
    info: "Netrokona, Dhaka, Bangladesh",
  },
  {
    Icon: PhoneEnabledIcon,
    title: "Phone Number",
    info: "+8801978352135",
  },
  {
    Icon: MailOutlineIcon,
    title: "Email Address",
    info: "j.n.erfan420@gmail.com",
  },
];

const Contract = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"Contract"} from={"Home"} />
      </Box>
      <Container sx={{ my: "150px" }}>
        <Grid container spacing={3}>
          {contacts.map(({ Icon, title, info }) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={info}
              sx={{ textAlign: "center" }}
              className="contractPaper"
            >
              <Box
                sx={{
                  backgroundColor: "#0056FB",
                  px: "50px",
                  py: "40px",
                  borderRadius: "10px",
                }}
              >
                <Box sx={{ mt: "-90px", mb: "50px" }}>
                  <Icon
                    sx={{
                      fontSize: "50px",
                      color: "#0056FB",
                      backgroundColor: "#fff",
                      borderRadius: "100%",
                      height: "100px",
                      width: "100px",
                      padding: "20px",
                    }}
                  />
                </Box>
                <Box>
                  <h4
                    style={{
                      fontWeight: 500,
                      marginTop: "20px",
                      color: "#fff",
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontWeight: 500,
                      marginTop: "20px",
                      color: "#fff",
                    }}
                  >
                    {info}
                  </p>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ my: "100px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#000",
              fontWeight: "bold",
              borderLeft: "5px solid #006EF2",
              mb: "50px",
              mt: "50px",
            }}
          >
            <span style={{ marginLeft: "15px" }}>CONTRACT FORM</span>
          </Typography>
          <Box
            sx={{
              boxShadow: "1px 1px 15px #9e9e9e",
              p: "50px",
              borderRadius: "12px",
            }}
          >
            <form>
              <StyledInputElement
                sx={{ my: "10px" }}
                placeholder="Enter Name"
                required
                type="name"
                name="name"
              />
              <StyledInputElement
                sx={{ my: "10px" }}
                placeholder="Enter Email Address"
                required
                type="email"
                name="user_email"
              />
              <StyledInputElement
                sx={{ my: "10px", pb: "100px" }}
                placeholder="Enter Message"
                required
                type="text"
                name="message"
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#474747",
                  color: "#fff",
                  borderRadius: "10px",
                  mt: "10px",
                }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contract;
