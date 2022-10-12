import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import HeaderComponent from "src/components/Home/Header";
import FooterComponent from "src/components/Footer";
import { OrganizationDto } from "src/services/organization/dto/organizationDto";
import NotFoundComponent from "src/components/Not Found";
import GoToTop from '../GoToTop';
const PageNotFoundComponent = () => {
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [allOrganizationDto, setAllOrganizationDto] =
    useState<OrganizationDto | null>();

  const search = useLocation().search;
  const username = new URLSearchParams(search).get("username");
  let navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <NavBarComponent />
      <section id="subscribe-form" className="subscribe-form wf-section">
        <div className="centered-container w-container">
          <div>
            <NotFoundComponent />
          </div>
        </div>
      </section>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};

export default PageNotFoundComponent;
