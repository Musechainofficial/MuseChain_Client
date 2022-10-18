import React, { useState,useEffect } from "react";
import "./navbar.css";
import heroIcon from "../../assets/images/logo.svg";
import {} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
//     const [account, setAccount] = useState("");

//     useEffect(() => {
//       connectToWeb3();
//     }, [])
  
//     const connectToWeb3 = async () => {
//       const { solana } = window;
//       if (solana && solana.isPhantom) {
//         try {
//           const response = await solana.connect({ onlyIfTrusted: true });
//           console.log(response.publicKey.toString());
//           setAccount(response.publicKey)
//         } catch (error) {
//           const response = await solana.connect();
//           console.log(response.publicKey.toString());
//           setAccount(response.publicKey)
//         }
//       }
//     };
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    const name = "wallet";
    var tok = "";
    const token = document.cookie.match(
      `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
    );
    if (token.length > 0) {
      tok = token[1];
    } 
    setWallet(tok);
  }, [])

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={heroIcon} alt="logo" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/marketplace">Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/">Wallet: {wallet}</NavLink>
            </li>
            <li>
              <NavLink to="/">Log Out</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default NavBarComponent;
