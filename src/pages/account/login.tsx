import React, { useState } from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import { Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import Loading from "src/components/Loading";
import userService from "src/services/users/userService";
import { UserDto } from "src/services/users/dto/userDto";
import GoToTop from "../GoToTop";
import brandIcon from "../../assets/images/brand1.png";
const LoginComponent = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onLogin = () => {
        const data = {
            email,
            password
        };
        setLoading(true);
        userService
            .loginUser(data)
            .then((result: UserDto) => {
                console.log("Result = ", result);
                document.cookie = "access=" + result.token;
                document.cookie = "wallet=" + result.wallet;
                setLoading(false);
                localStorage.setItem("isLoggedIn", "true");

                navigate("/marketplace");
            })
            .catch((e) => {
                console.log("Error = ", e);
                let message = String(e.response.data.message);
                localStorage.setItem("isLoggedIn", "false");
                alert(message);
                setLoading(false);
            });
    };

    return (
        <React.Fragment>
            <NavBarComponent />
            <Loading loading={loading} />
            <Box my={5}>
                <Container
                    sx={{
                        width: "100%",
                        display: "flex",
                        aspectRatio: 1,
                        height: "100%",
                        placeItems: "center"
                    }}
                >
                    <Card
                        sx={{
                            borderRadius: "20px",
                            placeItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Grid container sx={{ display: "flex", placeItems: "center" }}>
                            <Grid
                                item
                                lg={6}
                                p={10}
                                sx={{
                                    background: "#c1a86a",
                                    placeItems: "center",
                                    marginLeft: "-1%"
                                }}
                            >
                                <Box
                                    component="img"
                                    src={brandIcon}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        aspectRatio: 1,
                                        height: "100%",
                                        placeItems: "center",
                                        justifyContent: "center"
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                lg={6}
                                px={4}
                                sx={{
                                    placeItems: "center",
                                    justifyContent: "center",
                                    paddingRight: "0px"
                                }}
                            >
                                <Typography
                                    typography="p"
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        width: "100%",
                                        paddingTop: "10px",
                                        color: "#000",
                                        textAlign: "left",
                                        fontFamily: "Poppins",
                                        placeItems: "center"
                                    }}
                                >
                                    Welcome back
                                </Typography>
                                <Input
                                    placeholder="Enter email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                    style={{
                                        width: "100%",
                                        padding: "2.4%",
                                        borderRadius: "20px",
                                        marginTop: "30px",
                                        marginLeft: "-5%",
                                        marginRight: "5%",
                                        placeItems: "left",
                                        justifyContent: "center"
                                    }}
                                />
                                <Input
                                    placeholder="Enter password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    style={{
                                        placeItems: "left",
                                        width: "100%",
                                        padding: "2.4%",
                                        borderRadius: "20px",
                                        marginTop: "30px",
                                        marginRight: "0%",
                                        justifyContent: "center",
                                        marginLeft: "-5%"
                                    }}
                                />
                                <Link to="/forgetpassword">
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 650,
                                            width: "100%",
                                            paddingTop: "10px",
                                            color: "blue",
                                            textDecoration: "underline",
                                            textAlign: "left",
                                            justifyContent: "center"
                                        }}
                                    >
                                        Forgot your password?
                                    </Typography>
                                </Link>
                                <Typography
                                    typography="h4"
                                    sx={{
                                        fontWeight: 700,
                                        width: "100%",
                                        fontSize: "12px",
                                        paddingTop: "10px",
                                        color: "#00000099",
                                        textAlign: "left",
                                        placeItems: "center"
                                    }}
                                >
                                    By continuing you agree to Musechain
                                    <a target="#" href="/">
                                        {" "}
                                        terms and conditions
                                    </a>{" "}
                                    and <br />{" "}
                                    <a target="#" href="/">
                                        privacy policy
                                    </a>
                                </Typography>
                                <Box
                                    width="100%"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        placeItems: "center"
                                    }}
                                >
                                    <Button
                                        onClick={() => {
                                            onLogin();
                                        }}
                                        sx={{
                                            background: "#c1a86a",
                                            padding: "15px 30px 15px 30px",
                                            marginTop: "30px",
                                            marginBottom: "30px",
                                            textTransform: "none",
                                            borderRadius: "30px",
                                            width: "100%",
                                            marginLeft: "-5%"
                                        }}
                                    >
                                        <Typography
                                            typography="h5"
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 500,
                                                placeItems: "center",
                                                padding: "0%"
                                            }}
                                        >
                                            Sign In
                                        </Typography>
                                    </Button>
                                </Box>
                                <p style={{ textAlign: "center", padding: "10px" }}>
                                    Not a user here?<Link to="/register">Sign Up</Link>
                                </p>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Box>
            <FooterComponent />
            <GoToTop />
        </React.Fragment>
    );
};

export default LoginComponent;
