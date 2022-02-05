import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Banner from "../SharedItem/Banner";
import { styled } from "@mui/system";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const StyledInputElement = styled("textarea")`
  line-height: 1.4375em;
  width: 50%;
  border: 2px solid #0099ff;
  &:focus {
    outline: none;
    border: 2px solid #ffa500;
    transform: scale(1.03);
  }
`;
const labels = {
  0.5: "Useless 😔",
  1: "Useless 😞",
  1.5: "Poor 😟",
  2: "Poor 😑",
  2.5: "Ok 😐",
  3: "Good 🙂",
  3.5: "Great 😇",
  4: "Great 😊",
  4.5: "Excellent 🥰",
  5: "Excellent 🥳",
};
const CustomerReview = () => {
  const [value, setValue] = useState(0);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  // Saved Public Review In Database
  const onSubmit = (data) => {
    data.image =
      user?.photoURL ||
      "https://www.theponderingmom.com/wp-content/uploads/2020/04/kisspng-emoticon-smiley-wink-emoji-clip-art-emoji-5abc679b27c4e7.9951670115222967311629.jpg";
    data.email = user.email;
    data.name = user.displayName;
    data.rating = value;
    if (value === 0) {
      Swal.fire("Please Give Some Rating");
    } else {
      axios
        .post("https://doshomik-shop-server.herokuapp.com/customerReview", data)
        .then((result) => {
          if (result.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Review Shared Successful",
              text: "Thank For Your Valuable Review, Your Review Was Added To HomePage",
              showConfirmButton: false,
              timer: 3000,
            });
            reset();
          }
        });
    }
  };

  // Review Form
  return (
    <Box>
      <Box>
        <Banner pageName={"Review"} from={"Home"} />
      </Box>
      <Container sx={{ mb: "100px" }}>
        <Box sx={{ mt: "100px" }}>
          <Box>
            <Box sx={{ mb: "60px" }}>
              <Typography
                variant="h1"
                style={{
                  color: "#FFA500",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <i className="far fa-grin"></i>
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "20px",
                textAlign: "center",
                border: "1px solid #92d2fc",
                boxShadow: "1px 1px 15px #92d2fc",
                pb: "100px",
              }}
            >
              <Box>
                <img
                  style={{
                    border: "5px solid #fff",
                    borderRadius: "100%",
                    height: "150px",
                    width: "150px",
                    marginTop: "-80px",
                  }}
                  src={
                    user.photoURL ||
                    "https://www.theponderingmom.com/wp-content/uploads/2020/04/kisspng-emoticon-smiley-wink-emoji-clip-art-emoji-5abc679b27c4e7.9951670115222967311629.jpg"
                  }
                  alt=""
                />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "#081e3e", mt: "20px" }}
              >
                {user.displayName}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <Box
                  sx={{
                    backgroundColor: "#081e3e",
                    width: "50px",
                    height: "4px",
                  }}
                />
              </Box>
              <p style={{ color: "gray", marginTop: "10px" }}>
                <small>
                  Your Review <i className="far fa-grin"></i> Is Very Important
                  To Us
                </small>
              </p>
              <hr />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#081E3E", mb: "20px" }}
                >
                  Rate Your Experience
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Rating
                    required
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    sx={{ fontSize: "40px" }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: "40px" }} />
                    }
                  />
                  {value !== null && (
                    <Typography
                      variant="body2"
                      sx={{ ml: 2, color: "gray", fontWeight: "bold" }}
                    >
                      {labels[value !== -1 ? value : value]}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ mt: "30px" }}>
                  <StyledInputElement
                    type="text"
                    placeholder="Describe Your Experience"
                    sx={{ borderRadius: "5px", p: "10px", mt: "20px" }}
                    rows={4}
                    required
                    {...register("reviewDetails")}
                  />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "0099ff",
                      width: "50%",
                      py: "10px",
                      fontWeight: "bold",
                      mt: "20px",
                      "&:hover": {
                        backgroundColor: "#FFA500",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    Submit Review
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReview;
