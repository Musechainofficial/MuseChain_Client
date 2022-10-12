import React from "react";
import heroBox from "../../assets/images/heroBox.png";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import phoneImage from "../../assets/images/app_show.png";
// import AppStoreIcon from "../../assets/images/app_store.svg";
// import PlayStoreIcon from "../../assets/images/play_store.svg";

const HomeFooterComponent = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "#C1A86A",
        display: "flex",
        placeItems: "center",
        marginTop:"0%"
      }}
    >
      <Container>
        <Grid container lg={12}>
          <Grid item lg={7} sx={{display: "flex", placeItems: "center", flexDirection: "row"}}>
            <Box>
              <Typography
                typography="h3"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontFamily: "Poppins",
                }}
              >
                Manage all projects from <br /> your mobile
              </Typography>
              <Typography
                typography="h4"
                py={3}
                pr={3}
                sx={{
                  fontWeight: 500,
                  color: "#000"
                }}
              >
                Download the app to manage your projects, keep track of the <br /> progress and complete tasks without procastinating. Stay on <br /> track and complete on time!
              </Typography>
              {/* <Typography
                typography="h4"
                pt={3}
                sx={{
                  fontWeight: 600,
                  color: "#000",padding:"2%",
                }}
              >
                Get the App
              </Typography> */}
              
            </Box>
          </Grid>
          <Grid item lg={5} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box />
            <Box
              height="100%"
              component="img"
              src={phoneImage}
              sx={{
                maxWidth: "100%",
                aspectRatio: 1,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeFooterComponent;
