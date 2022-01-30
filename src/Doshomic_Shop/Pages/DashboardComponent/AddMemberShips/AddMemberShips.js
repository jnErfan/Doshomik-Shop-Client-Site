import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddMemberShips = () => {
  const StyledInputElement = styled("input")`
    line-height: 1.4375em;
    border: 2px solid #5c6284;
    &:focus {
      outline: none;
      border: 2px solid #16225b;
      transform: scale(1.03);
    }
  `;

  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("https://doshomik-shop-server.herokuapp.com/addMembership", data)
      .then((result) => {
        if (result.data.insertedId) {
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              icon: "success",
              title: "Membership Add Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            reset();
          }, 3000);
        } else {
          setIsLoading(false);
        }
      });
  };

  return (
    <Box sx={{ my: "100px" }}>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "fixed",
              zIndex: "99999",
              marginTop: "-120px",
            }}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0C163C" }}>
          Create Memberships
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#0C163C",
              height: "5px",
              width: "100px",
              mt: "10px",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            p: "50px",
            borderRadius: "20px",
            backgroundColor: "#e0e0e6",
            textAlign: "center",
            mt: "10px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledInputElement
              {...register("service")}
              placeholder="Membership Name"
              multiline
              rows={4}
              type="text"
              required
              sx={{
                width: "70%",
                borderRadius: "5px",
                p: "10px",
                my: "10px",
              }}
            />
            <br />
            <StyledInputElement
              {...register("price")}
              placeholder="Price"
              multiline
              type="number"
              rows={4}
              required
              sx={{
                width: "70%",
                borderRadius: "5px",
                p: "10px",
                my: "10px",
              }}
            />
            <br />
            <StyledInputElement
              {...register("limit")}
              placeholder="Limit"
              multiline
              rows={4}
              type="text"
              required
              sx={{
                width: "70%",
                borderRadius: "5px",
                p: "10px",
                my: "10px",
              }}
            />
            <br />
            <StyledInputElement
              {...register("bonus")}
              placeholder="Referral Bonus"
              multiline
              rows={4}
              type="number"
              required
              sx={{
                width: "70%",
                borderRadius: "5px",
                p: "10px",
                my: "10px",
              }}
            />
            <br />
            <StyledInputElement
              {...register("validity")}
              placeholder="Validity"
              multiline
              rows={4}
              type="text"
              required
              sx={{
                width: "70%",
                borderRadius: "5px",
                p: "10px",
                my: "10px",
              }}
              defaultValue={"Life Time"}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "70%",
                py: "15px",
                mt: "20px",
                fontWeight: "bold",
                backgroundColor: "#16225b",
                "&:hover": {
                  backgroundColor: "#16225b",
                  transform: "scale(1.03)",
                },
              }}
            >
              Create Membership
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddMemberShips;
