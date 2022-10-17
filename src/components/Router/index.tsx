import React, { Suspense } from 'react';
import Loading from "./loading";
import HomeComponent from "../../pages/home";
import SupportComponent from "../../pages/support";
import RegisterComponent from "../../pages/account/register";
import ResetComponent from "../../pages/account/reset";
import ForgetComponent from "../../pages/account/forget";
import ChangeComponent from "../../pages/account/change";
import OTPComponent from "../../pages/account/otp";
import SettingsComponent from "../../pages/settings";
// import PaymentComponent from "../../pages/payment";
import MarketComponent from "../../pages/market";
import LoginComponent from "../../pages/account/login";
import { Route, Routes } from 'react-router-dom';
// import UserDetailsComponent from 'src/pages/Users/userDetails';
import OrganizationDetailsComponent from 'src/pages/Organization/organizationDetails';
import PageNotFoundComponent from 'src/pages/home/pageNotFound';
import Success from 'src/pages/payment/success';
import Failed from 'src/pages/payment/failed';
import ProfileComponent from 'src/pages/market/profile';
const Routers = () => {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/forgetpassword" element={<ForgetComponent />} />
            <Route path="/changepassword" element={<ChangeComponent />} />
            <Route path="/otp" element={<OTPComponent />} />
            <Route path="/resetpassword" element={<ResetComponent />} />
            <Route path="/setting" element={<SettingsComponent />} />
            {/* <Route path="/payment" element={<PaymentComponent />} /> */}
            <Route path="/marketplace" element={<MarketComponent />} />
            <Route path="/support" element={<SupportComponent />} />
            {/* <Route path="/user-details" element={<UserDetailsComponent />} /> */}
            <Route path="/organization-details" element={<OrganizationDetailsComponent />} />
            <Route path="/page-not-found" element={<PageNotFoundComponent />} />
            <Route path="*" element={<PageNotFoundComponent />} />
            <Route path="/success" element={< Success />} />
            <Route path="/failed" element={< Failed />} />
            <Route path="/nfts" element={< LoginComponent />} />
            <Route path="/profile" element={< ProfileComponent/>} />
          </Routes>
        </Suspense>
      </>
    );
  };

  export default Routers;