import { Box } from "@mui/system";
import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const AddMemberShips = () => {
  const StyledInputElement = styled("input")`
    line-height: 1.4375em;
    border: 2px solid #16225b;
    &:focus {
      outline: none;
      border: 2px solid #16225b;
    }
  `;
  return (
    <Box sx={{ my: "100px" }}>
      <Box sx={{ textAlign: "center", mb: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0C163C" }}>
          Create Memberships
        </Typography>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "20px",
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
            backgroundColor: "#eaeaea",
          }}
        >
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
                backgroundColor: "#16225b",
                "&:hover": { backgroundColor: "#16225b" },
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
