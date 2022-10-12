import React, { useState } from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import { Input } from "antd";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import NFTSliderComponent from 'src/components/Home/NFTSlider';
import brandIcon from "../../assets/images/brand1.png";

const SettingsComponent = () => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <Box my={5}>
        <Container>
          <Card sx={{ borderRadius: "20px" }} >
            <Grid container sx={{ display: 'flex', placeItems: "center" }}>
              <Grid item lg={6} p={10} sx={{ background: "#c1a86a" }} >
                <NFTSliderComponent display={1} />
              </Grid>
              <Grid item lg={6} px={10}>
                <Typography
                  typography="p"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    paddingTop: "30px",
                    color: "#000",
                    textAlign: "left",
                    fontFamily: "Poppins",
                  }}
                >
                    Welcome back
                </Typography>
                <Input placeholder="Enter email" style={{ padding: "10px", borderRadius: "20px", marginTop: "30px" }} />
                <Input placeholder="Enter password" style={{ padding: "10px", borderRadius: "20px", marginTop: "20px" }} />
                <Typography
                  typography="p"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    paddingTop: "10px",
                    color: "#000",
                    textDecoration: "underline",
                    textAlign: "left",
                  }}
                >
                    Forgot your password?
                </Typography>
                <Typography
                  typography="p"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    fontSize: "12px",
                    paddingTop: "10px",
                    color: "#00000099",
                    textAlign: "left",
                  }}
                >
                    By continuing you agree to Musechain <a>terms and conditions</a> and <br /> <a>privacy policy</a>
                </Typography>
                <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      background: "#c1a86a",
                      padding: "15px 30px 15px 30px",
                      marginTop: "30px",
                      textTransform: "none",
                      borderRadius: "30px",
                      width: "300px",
                    }}
                  >
                    <Typography
                      typography="p"
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      Sign In
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default SettingsComponent;
