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
        <P>Wallet content here</P>
      </Container>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};
export default WalletComponent;
