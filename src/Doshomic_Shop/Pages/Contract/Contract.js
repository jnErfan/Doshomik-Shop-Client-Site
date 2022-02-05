import React from "react";
import {
  Box,
  Button,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Contract.css";
import Banner from "../SharedItem/Banner";
import MapIcon from "@mui/icons-material/Map";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

// Inputs Design
const StyledInputElement = styled("input")`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.4375em;
  background: #fff;
  border: 2px solid gray;
  border-radius: 7px;
  padding: 6px 10px;
  color: #006ef2;
  transition: width 300ms ease;
  &:focus {
    outline: none;
  }
`;
// Contact Info Data
const contacts = [
  {
    Icon: MapIcon,
    title: "Office Address",
    info: "Netrokona, Dhaka, Bangladesh",
    link: "https://www.google.com/maps/place/Iqra+Technical+School+%26+College/@24.952275,90.5989352,85m/data=!3m1!1e3!4m5!3m4!1s0x3757aa7fb5492389:0xa26c5f5a91c70d66!8m2!3d24.9521608!4d90.5991698",
  },
  {
    Icon: PhoneEnabledIcon,
    title: "Phone Number",
    info: "+8801978352135",
    link: +8801978352135,
  },
  {
    Icon: MailOutlineIcon,
    title: "Email Address",
    info: "j.n.erfan420@gmail.com",
    link: "https://mail.google.com/",
  },
];

const Contract = () => {
  return (
    <Box>
      <Box>
        {/* Contact Banner */}
        <Banner pageName={"Contract"} from={"Home"} />
      </Box>
      <Container sx={{ my: "150px" }}>
        {/* Contact First Card Info Details  */}
        <Grid container spacing={3}>
          {contacts.map(({ Icon, title, info, link }) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={info}
              sx={{ textAlign: "center" }}
              className="contractPaper"
            >
              <CardActionArea style={{ borderRadius: "10px" }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
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
                </a>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
        {/* Direct Contract Form */}
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
                  borderRadius: "7px",
                  mt: "10px",
                  border: "1px solid #474747",
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
