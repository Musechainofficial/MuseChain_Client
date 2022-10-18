import React, {  } from "react";
import { Container } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
const WalletComponent = () => {

  return (
    <React.Fragment>
      <NavBarComponent />
      <Container>
        <p>Wallet content here</p>
      </Container>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};
export default WalletComponent;
