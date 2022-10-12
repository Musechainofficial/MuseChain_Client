import React, { useState } from "react";
import NavBarComponent from "src/components/Navbar/navbar";
import SupportIntroComponent from "src/components/Support/SupportIntro";
import AnswersComponent from "src/components/Support/Answers";
import FooterComponent from "src/components/Footer";
import GoToTop from '../GoToTop';
const SupportComponent = () => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <SupportIntroComponent />
      <AnswersComponent />
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};

export default SupportComponent;
