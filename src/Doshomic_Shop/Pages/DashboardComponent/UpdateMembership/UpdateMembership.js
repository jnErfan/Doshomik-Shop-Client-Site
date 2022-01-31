import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
};
const SubscribeButton = styled(Button)(({ theme }) => ({
  background: "#003BFF",
  color: "#fff",
  fontWeight: "bold",
  transition: "1s",
  "&:hover": {
    outline: "2px solid #003BFF",
    color: "#003BFF",
    transition: "500ms",
  },
}));
const StyledInputElement = styled("input")`
  border: 0;
  &:focus {
    outline: none;
    transform: scale(1.03);
  }
`;

const UpdateMembership = ({
  open,
  setOpen,
  id,
  register,
  handleSubmit,
  reset,
}) => {
  const [updateDetails, setUpdateDetails] = useState({});

  // Update Desktop Configuration
  useEffect(() => {
    fetch(`https://doshomik-shop-server.herokuapp.com/membership/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateDetails(data?.[0]));
  }, [id]);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const onSubmit = (data) => {
    axios
      .put(
        `https://doshomik-shop-server.herokuapp.com/updateMembership/${id}`,
        data
      )
      .then((result) => {
        if (result.data.modifiedCount === 1) {
          Swal.fire("Updated", "Membership Has Been Updated.", "success");
          handleClose();
        } else {
          alert("Membership Update Error");
        }
      });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={style}>
              <Box className="shadow-sm">
                <Box
                  sx={{
                    p: "30px",
                    textAlign: "center",
                    backgroundColor: "#003BFF",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: "20px" }}
                  >
                    Update Membership Information
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mb: "20px" }}
                  >
                    <StyledInputElement
                      {...register("service")}
                      placeholder="Membership Name"
                      type="text"
                      defaultValue={updateDetails.service}
                      required
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    />
                  </Typography>
                  <Box sx={{ backgroundColor: "#fff" }}>
                    <Divider />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mt: "20px" }}
                  >
                    <StyledInputElement
                      {...register("price")}
                      defaultValue={updateDetails.price}
                      placeholder="Price"
                      type="number"
                      required
                      sx={{
                        width: "100%",
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: "30px",
                  }}
                >
                  <Typography
                    variant="h6"
                    className="text-secondary fw-bold text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Plan Details
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Limit :{" "}
                    <StyledInputElement
                      {...register("limit")}
                      defaultValue={updateDetails.limit}
                      placeholder="Limit"
                      type="text"
                      required
                      sx={{
                        width: "40%",
                        borderRadius: "10px",
                        textAlign: "center",
                        border: "2px solid #757575",
                      }}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Referral Bonus :{" "}
                    <StyledInputElement
                      {...register("bonus")}
                      defaultValue={updateDetails.bonus}
                      placeholder="Bonus"
                      type="text"
                      required
                      sx={{
                        width: "25%",
                        borderRadius: "10px",
                        textAlign: "center",
                        border: "2px solid #757575",
                      }}
                    />
                  </Typography>

                  <Typography
                    variant="body1"
                    className="text-secondary text-center mt-4 pb-3"
                    sx={{ borderBottom: "1px dotted rgb(197, 197, 197)" }}
                  >
                    Validity :{" "}
                    <StyledInputElement
                      {...register("validity")}
                      defaultValue={updateDetails.validity}
                      placeholder="Validity"
                      type="text"
                      required
                      sx={{
                        width: "50%",
                        borderRadius: "10px",
                        textAlign: "center",
                        border: "2px solid #757575",
                      }}
                    />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    pb: "20px",
                  }}
                >
                  <SubscribeButton
                    sx={{ mt: "20px", px: "15px" }}
                    type="submit"
                  >
                    Update <i className="far fa-edit ms-1"></i>
                  </SubscribeButton>
                  <SubscribeButton
                    sx={{ mt: "20px", px: "15px" }}
                    onClick={handleClose}
                  >
                    Close
                  </SubscribeButton>
                </Box>
              </Box>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};
export default UpdateMembership;
