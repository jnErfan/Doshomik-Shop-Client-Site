import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Banner from "../../SharedItem/Banner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState(false);

  const code1 = Math.floor(Math.random() * 10);
  const code2 = Math.floor(Math.random() * 10);
  const code3 = Math.floor(Math.random() * 10);
  const code4 = Math.floor(Math.random() * 10);
  const code5 = Math.floor(Math.random() * 10);

  const { register, handleSubmit } = useForm();
  const {
    emailPasswordLogin,
    resetPassword,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, navigate, location);
  };

  async function resetPasswordInput() {
    const { value: email } = await Swal.fire({
      title: "Email address",
      input: "email",
      inputLabel: "Enter Current Account Email Address",
      inputPlaceholder: "Enter Email Address",
    });
    if (email) {
      resetPassword(email);
    }
  }

  const googleSignInHandler = () => {
    googleSignIn(navigate, location);
  };
  const gitHubSignInHandler = () => {
    githubSignIn(navigate, location);
  };
  const facebookSignInHandler = () => {
    facebookSignIn(navigate, location);
  };

  return (
    <Box>
      <Box>
        <Banner pageName={"Login"} from={"Home"} />
      </Box>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            boxShadow: "1px 1px 10px gray",
            borderRadius: "10px",
            mt: "50px",
            py: "50px",
            pb: "100px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#363636", fontWeight: "bold" }}
          >
            Welcome To <span style={{ color: "#006ef2" }}>DOSHOMIK𒆜Sᴴᴼᴾ</span>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "50px",
              }}
            >
              <Box>
                <ContactMailOutlinedIcon
                  sx={{
                    mt: "8px",
                    borderBottom: "1px solid #969696",
                    fontSize: "40px",
                    p: "5px",
                  }}
                />
              </Box>

              <TextField
                sx={{
                  width: "50%",
                }}
                type="email"
                id="standard-textarea"
                label="Email"
                placeholder="Enter Email"
                multiline
                variant="standard"
                required
                {...register("email")}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <Box>
                <VpnKeyIcon
                  sx={{
                    mt: "8px",
                    borderBottom: "1px solid #969696",
                    fontSize: "40px",
                    p: "5px",
                  }}
                />
              </Box>{" "}
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  {...register("password")}
                  required
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setValues({
                            showPassword: !values.showPassword,
                          })
                        }
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ width: "138%", mt: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "revert",
                  py: "1px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
                onClick={resetPasswordInput}
              >
                Reset Password ?
              </Button>
            </Box>
            <Box sx={{ textAlign: "center", mt: "20px" }}>
              <Box
                className="codes"
                sx={{
                  fontFamily: "'Monsieur La Doulaise', cursive",
                  backgroundColor: "#0099FF",
                  display: "inline-block",
                  width: "54%",
                  my: "20px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                  className="firstCode"
                >
                  {code1}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                >
                  {code2}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                >
                  {code3}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                >
                  {code4}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                >
                  {code5}
                </span>
              </Box>
              <TextField
                sx={{
                  width: "54%",
                  fontWeight: "bold",
                }}
                id="standard-search"
                label="Enter Code"
                type="number"
                variant="standard"
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "54%", mt: "30px", py: "15px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </form>
          <Box sx={{ textAlign: "center", mt: "50px" }}>
            <p className="text-secondary my-4">
              ____________________Or____________________
            </p>
            <p className="mb-4 text-secondary">
              You Don't Have An Account ?{" "}
              <Link to="/signUp" className="ms-3">
                Sign Up
              </Link>
            </p>
            <Button
              onClick={googleSignInHandler}
              variant="outlined"
              sx={{
                height: "70px",
                width: "70px",
                borderRadius: "100%",
                mx: "20px",
              }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                alt=""
              />
            </Button>
            <Button
              onClick={gitHubSignInHandler}
              variant="outlined"
              sx={{
                height: "70px",
                width: "70px",
                borderRadius: "100%",
                mx: "20px",
              }}
            >
              <img
                src="https://img.icons8.com/color/40/000000/github--v3.png"
                alt=""
              />
            </Button>
            <Button
              onClick={facebookSignInHandler}
              variant="outlined"
              sx={{
                height: "70px",
                width: "70px",
                borderRadius: "100%",
                mx: "20px",
              }}
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/facebook-new.png"
                alt=""
              />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
