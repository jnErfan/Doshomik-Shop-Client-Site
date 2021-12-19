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
import React, { useState } from "react";
import Banner from "../../SharedItem/Banner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { emailPasswordSignUp, googleSignIn, githubSignIn, facebookSignIn } =
    useAuth();
  const [values, setValues] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    const fullName = data.firstName + " " + data.lastName;

    if (data.password1 === data.password2) {
      emailPasswordSignUp(
        data.email,
        data.password1,
        fullName,
        navigate,
        location
      );
    } else {
      const passwordError = "Password Did't Matched";
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: passwordError,
        padding: "3em",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

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
        <Banner pageName={"SignUp"} from={"Home"} />
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
                <DriveFileRenameOutlineIcon
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
                type="name"
                label="First Name"
                placeholder="Enter First Name"
                multiline
                variant="standard"
                required
                {...register("firstName")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "50px",
              }}
            >
              <Box>
                <DriveFileRenameOutlineIcon
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
                id="standard-textarea"
                type="name"
                label="Last Name"
                placeholder="Enter Last Name"
                multiline
                variant="standard"
                required
                {...register("lastName")}
              />
            </Box>
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
                id="standard-textarea"
                type="email"
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
              </Box>
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel htmlFor="standard-adornment-password">
                  Enter New Password
                </InputLabel>
                <Input
                  required
                  {...register("password1")}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "50px",
              }}
            >
              <Box>
                <VpnKeyIcon
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
                type="password"
                label="Re-Type Password"
                variant="standard"
                required
                {...register("password2")}
              />
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
                  className="securityCode"
                >
                  {Math.floor(Math.random() * 10)}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                  className="securityCode"
                >
                  {Math.floor(Math.random() * 10)}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                  className="securityCode"
                >
                  {Math.floor(Math.random() * 10)}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                  className="securityCode"
                >
                  {Math.floor(Math.random() * 10)}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "20px",
                  }}
                  className="securityCode"
                >
                  {Math.floor(Math.random() * 10)}
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
                {...register("loginCode")}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{ width: "54%", mt: "30px", py: "15px", fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </form>
          <Box sx={{ textAlign: "center", mt: "50px" }}>
            <p className="text-secondary my-4">
              ____________________Or____________________
            </p>
            <p className="mb-4 text-secondary">
              You Have An Account ?{" "}
              <Link to="/login" className="ms-3">
                Login
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

export default SignUp;
