import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Box className="dashboardContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            md={2}
            lg={2}
            sx={{ backgroundColor: "#101536", height: "110vh" }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#fff", p: "10px", fontWeight: "bold" }}
              >
                DOSHOMIK
                <span
                  style={{
                    color: "#0099FF",
                  }}
                >
                  𒆜Sᴴᴼᴾ
                </span>
              </Typography>
              <Box sx={{ mr: "10px" }}>
                <Link
                  to=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      fontWeight: "600",
                      color: "white",
                      borderRadius: "0px",
                      width: "100%",
                      textAlign: "start",
                      borderTopRightRadius: "50px",
                      borderBottomRightRadius: "50px",
                      display: "block",
                      pl: "20px",
                      fontSize: "15px",
                      "&:hover": {
                        backgroundColor: "#dcecf53f",
                        color: "white",
                      },
                    }}
                  >
                    {" "}
                    HOME
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10} md={10} lg={10}>
            <Box sx={{ mb: "65px" }}>
              <AppBar
                position="absolute"
                sx={{
                  backgroundColor: "#101536",
                  boxShadow: 0,
                  width: "85%",
                }}
              >
                <Toolbar variant="dense">
                  <Box sx={{ display: "flex", justifyContent: "between" }}>
                    <Box>
                      {" "}
                      <Button sx={{ color: "#fff", fontWeight: "bold" }}>
                        <span
                          style={{
                            color: "#0099FF",
                          }}
                        >
                          Client
                        </span>
                        𒆜HOME
                      </Button>
                    </Box>
                    <Box>
                      <Button sx={{ color: "#fff", fontWeight: "bold" }}>
                        <span
                          style={{
                            color: "#0099FF",
                          }}
                        >
                          Client
                        </span>
                        𒆜HOME
                      </Button>
                    </Box>
                  </Box>
                </Toolbar>
              </AppBar>
            </Box>
            <Box className="border1" />
            <Box className="border2" />
            <Box className="dashboardOverflow">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate dolor repellendus tempora eaque libero sunt velit et
                iste explicabo error possimus veritatis, vel obcaecati non amet
                eligendi quos porro quibusdam delectus molestias sed
                consectetur, officia molestiae. Quasi, quae veritatis? Ea quis
                doloribus dolore fuga, ducimus blanditiis accusantium nesciunt
                voluptatibus numquam impedit eius tenetur excepturi repudiandae
                beatae obcaecati repellat facilis repellendus modi illum odit
                voluptatum quibusdam, eveniet fugit. Soluta blanditiis nihil
                assumenda? Aspernatur rerum ipsum voluptatum. Molestiae
                assumenda, ducimus illo quae est culpa laudantium dolorum?
                Laudantium similique ut minima eos laboriosam, fuga consequuntur
                in omnis? Non, sint ab deleniti, excepturi ea exercitationem
                maxime nisi vitae incidunt corporis asperiores iusto quae animi,
                atque dolor molestiae ad aperiam consectetur omnis! Ea dolore
                quasi cupiditate necessitatibus! Aliquid dignissimos saepe minus
                sapiente mollitia quos distinctio optio doloremque cupiditate.
                Cumque soluta quae tempora, et quasi architecto dolorum, fugit
                qui cupiditate impedit optio hic, provident possimus ad quidem?
                Natus perspiciatis error totam, rerum, nostrum facere nihil
                perferendis dolores corporis rem ex voluptatibus, unde mollitia.
                Ullam harum corrupti, dolor incidunt in nulla doloribus mollitia
                at aliquam, odio totam sed error consequatur corporis cum iusto
                excepturi officiis placeat eum numquam. Numquam voluptate
                reiciendis fuga dignissimos est fugiat quas inventore?
              </h1>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
