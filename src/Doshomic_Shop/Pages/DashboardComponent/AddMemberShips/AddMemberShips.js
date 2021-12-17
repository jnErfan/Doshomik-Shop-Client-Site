import { Box } from "@mui/system";
import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

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
  return (
    <Box sx={{ my: "100px" }}>
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
          <form>
            <StyledInputElement
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
