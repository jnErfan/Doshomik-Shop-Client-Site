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
import React from "react";
import Banner from "../../SharedItem/Banner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { styled } from "@mui/system";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const InputUpload = styled("input")({
  display: "none",
});
const SignUp = () => {
  const [values, setValues] = React.useState(false);

  const code1 = Math.floor(Math.random() * 10);
  const code2 = Math.floor(Math.random() * 10);
  const code3 = Math.floor(Math.random() * 10);
  const code4 = Math.floor(Math.random() * 10);
  const code5 = Math.floor(Math.random() * 10);
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
          <form>
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
                id="standard-textarea"
                label="First Name"
                placeholder="Enter First Name"
                multiline
                variant="standard"
                required
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
              />
            </Box>
            <Box sx={{ mt: "30px" }}>
              <label htmlFor="contained-button-file">
                <InputUpload
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  required
                />
                <Button variant="contained" component="span">
                  Upload Image <PhotoCamera sx={{ ml: "10px" }} />
                </Button>
              </label>
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
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
