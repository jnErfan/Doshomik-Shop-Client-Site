import { Box, TextField } from "@mui/material";
import React from "react";
import Banner from "../../SharedItem/Banner";

const AdminLogin = () => {
  return (
    <Box>
      <Box>
        <Banner pageName={"Admin Login"} from={"Home"} />
      </Box>
      <Box>
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
      </Box>
    </Box>
  );
};

export default AdminLogin;
