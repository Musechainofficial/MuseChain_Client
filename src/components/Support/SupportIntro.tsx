import React from "react";
import heroBox from "../../assets/images/heroBox.png";
import {
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import bgImage from "../../assets/images/support_home.png";

const SupportIntroComponent = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundImage: () => `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "flex",
        height: "685px",
        marginBottom:"0px"
      }}
    >
      <Container sx={{padding:"7%"}}>
        <Grid container lg={12}>
          <Grid item lg={6} sx={{display: "flex", placeItems: "center", flexDirection: "row"}}>
          </Grid>
          <Grid item lg={6} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box />
            <Box>
              <Typography
                typography="h3"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontFamily: "Poppins"
                }}
              >
                Burning Questions? <br /> We got you covered.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportIntroComponent;
