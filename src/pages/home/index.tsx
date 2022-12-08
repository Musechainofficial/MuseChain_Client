import React, { useState } from "react";
import NavBarComponent from "src/components/Navbar/navbar";
import HomeIntroComponent from "src/components/Home/HomeIntro";
import CurateComponent from "src/components/Home/Curate";
import AnswersComponent from "src/components/Home/Answers";
import GalleryComponent from "src/components/Home/Gallery";
import HomeGuideComponent from "src/components/Home/HomeGuide";
import HomeFooterComponent from "src/components/Home/HomeFooter";
import FooterComponent from "src/components/Footer";
import LoadingComponent from "src/components/Loading/loading";
import GoToTop from '../GoToTop';
const HomeComponent = () => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <HomeIntroComponent />
      <CurateComponent />
      <GalleryComponent />
      <HomeGuideComponent />
      {/* <HomeFooterComponent /> */}
      <AnswersComponent />
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};

export default HomeComponent;
