import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import b1 from "./banner1.jpg";
import b2 from "./banner2.jpg";
import useAuth from "../../../Hooks/useAuth";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Banner = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const theme = useTheme();

  const useStyle = makeStyles({
    navItemRes: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  });

  const { navItemRes } = useStyle();
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block sliderImages" src={b1} alt="First slide" />
        <Carousel.Caption
          style={{ marginBottom: "12%" }}
          className="bannerTitle"
        >
          <h3
            className="animate__animated animate__slideInUp"
            style={{ fontSize: "70px", fontWeight: "bolder" }}
          >
            Start Earning From The Comfort of Home
          </h3>
          <div className={navItemRes}>
            <h6 className="px-5 mt-5 animate__animated animate__slideInUp animate__slow">
              Indeed online selling business is one of the businesses that can
              help us earn at the comfort of our homes. Internet Connection,
              diligent posting. Internet Connection, diligent posting
            </h6>
          </div>
          <Box
            sx={{ mt: "50px" }}
            className="animate__animated animate__slideInUp animate__slow"
          >
            {user.email && (
              <Box className={navItemRes}>
                <Button
                  onClick={() => navigate("/memberShip")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  MemberShips
                </Button>
                <Button
                  onClick={() => navigate("/blogs")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  Blogs
                </Button>
              </Box>
            )}
            {!user.email && (
              <Box className={navItemRes}>
                <Button
                  onClick={() => navigate("/signUp")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  SIGN UP
                </Button>
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  SIGN IN
                </Button>
              </Box>
            )}
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block sliderImages" src={b2} alt="Second slide" />

        <Carousel.Caption
          style={{ marginBottom: "12%" }}
          className="bannerTitle"
        >
          <h3
            className="animate__animated animate__slideInUp"
            style={{ fontSize: "70px", fontWeight: "bold" }}
          >
            Best Possible Way for Earn From Home
          </h3>
          <Box className={navItemRes}>
            <h6 className="px-5 mt-5 animate__animated animate__slideInUp animate__slow">
              Earn From Home With a situation involving more time at home and/or
              more. Freelancing has always been a popular way to earn money
              online situation involving more time.
            </h6>
          </Box>
          <Box
            sx={{ mt: "50px" }}
            className="animate__animated animate__slideInUp animate__slow"
          >
            {user.email && (
              <Box className={navItemRes}>
                {" "}
                <Button
                  onClick={() => navigate("/contract")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  Contract
                </Button>
                <Button
                  onClick={() => navigate("/about")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  About
                </Button>
              </Box>
            )}
            {!user.email && (
              <Box className={navItemRes}>
                {" "}
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  onClick={() => navigate("/signUp")}
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    marginLeft: "20px",
                    fontSize: "17px",
                    padding: "9px 27px",
                  }}
                >
                  REGISTER
                </Button>
              </Box>
            )}
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
