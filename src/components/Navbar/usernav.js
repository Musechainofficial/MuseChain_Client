import React, { useState, useEffect } from "react";
import "./navbar.css";
import heroIcon from "../../assets/images/logo.svg";
import {} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, useNavigate } from "react-router-dom";
import Link from "antd/lib/typography/Link";

const NavBarComponent = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo" onClick={() => navigate("/marketplace")}>
                    <img src={heroIcon} alt="logo" />
                </div>

                {/* 2nd menu part  */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/marketplace">Marketplace</NavLink>
                        </li>
                        <li>
                            <NavLink to="/wallet">Wallet</NavLink>
                        </li>
                        <li>
                            <div onClick={handleLogout}>Log Out</div>
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
