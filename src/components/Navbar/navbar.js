import React, { useEffect, useState } from "react";
import "./navbar.css";
import heroIcon from "../../assets/images/logo.svg";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const NavBarComponent = ({}) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}

                <div className="logo">
                    <NavLink to={"/"}>
                        <img src={heroIcon} alt="logo" />
                    </NavLink>
                </div>

                {/* 2nd menu part  */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nfts">Buy NFTs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support">Support</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login">Login</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop"></ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBarComponent;
