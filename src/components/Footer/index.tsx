import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/images/logo_white.svg";
import EmailIcon from "@mui/icons-material/Email";
// import AppStoreIcon from "../../assets/images/app_store.svg";
// import PlayStoreIcon from "../../assets/images/play_store.svg";
const FooterComponent = ({ changeLogo = false }) => {
    return (
        <React.Fragment>
            <footer id="footer" className="footer wf-section">
                <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ width: "33.3%" }} pt={10}>
                        <NavLink to={changeLogo ? "/marketplace" : "/"}>
                            <Box component="img" src={logoIcon} sx={{ width: "100%" }} pb={3} />
                        </NavLink>
                        <Typography typography="h6" sx={{ color: "#D9DBE1" }}>
                            Digitalising traditional curations
                        </Typography>
                        <Typography typography="h6" sx={{ color: "#D9DBE1" }}>
                            © 2022 Musechain. All rights reserved.
                        </Typography>
                    </Box>
                    <Box sx={{ width: "33.3%" }} pt={10}>
                        <a href="mailto:hello@musechain.org">
                            <Box width="100%" sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <EmailIcon />
                                <Typography typography="h5" sx={{ color: "#D9DBE1" }}>
                                    &nbsp;&nbsp;hello@musechain.org
                                </Typography>
                            </Box>
                        </a>

                        <Box width="100%" sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Typography typography="h5" sx={{ color: "#D9DBE1" }}>
                                <a href="./Updated TCS.pdf">Terms & Conditions </a>|{" "}
                                <a href="./Privacy policy.pdf">Privacy Policy</a>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default FooterComponent;
