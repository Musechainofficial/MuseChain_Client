import React from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import brandIcon from "../../assets/images/success.png";
const Success = () => {
    return (
      <React.Fragment>
        <NavBarComponent/>
        <Container sx={{display: 'flex',placeItems:"center",justifyContent: 'center'}}>
          <Card component="img"
                  src={brandIcon} sx={{ borderRadius: "4%",placeItems: "center" ,margin:"5%",padding:"0%",height:"40%",width:"40%"}} >
            </Card>
            </Container>
        <FooterComponent />
      </React.Fragment>
    );
  };
  
  export default Success;
  