import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import { Input, Result } from "antd";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import Loading from "src/components/Loading";
import brandIcon from "../../assets/images/brand1.png";
import userService from "src/services/users/userService";
import { UserDto } from "src/services/users/dto/userDto";
import { Link } from "react-router-dom";
import GoToTop from "../GoToTop";
import MyVerticallyCenteredModal from "../../components/MyVerticallyCenteredModal";

const RegisterComponent = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [rqfirstName, setrqFirstName] = useState<string>("* first name is required");
    const [rqlastName, setrqLastName] = useState<string>("* last name is required");
    const [rquserName, setrqUserName] = useState<string>("* user name is required");
    const [rqemail, setrqEmail] = useState<string>("* email is required");
    const [rqpassword, setrqPassword] = useState<string>("* password is required");
    const [rqrePassword, setrqRePassword] = useState<string>("* retype password should be matched");
    const [referral, setReferral] = useState<string>("");
    const [rqreferral, setrqReferral] = useState<string>("(optional)");
    const [loading, setLoading] = useState<boolean>(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [copypvt, setcopypvt] = useState("");
    const [isRequired, setisRequired] = useState(true);
    const [isRegisterFail, setIsRegisterFail] = useState<any>("");

    const onRegister = () => {
        if (
            firstName === "" ||
            lastName === "" ||
            userName === "" ||
            email === "" ||
            password === "" ||
            rePassword === "" ||
            password != rePassword
        ) {
            alert("Please input details carefully and try again!");
        } else {
            // const onRegister = () => {
            const data = {
                firstName,
                lastName,
                userName,
                email,
                password,
                referral
            };
            setLoading(true);
            userService
                .registerUser(data)
                .then((result: UserDto) => {
                    if (!result.privateKey && result.user?.message) {
                        alert(result.user.message);
                        setLoading(false);
                        setIsRegisterFail(true);

                        Promise.reject();
                    } else {
                        // console.log("Result = ", result);
                        // alert(`This is your private key\n ${result.privateKey}`);
                        setcopypvt(result.privateKey);
                        setLoading(false);
                        // alert(`${result.privateKey} <Button>copy</Button>`);
                        setModalShow(true);
                        // navigate("/login");
                        setIsRegisterFail("");
                    }
                })
                .catch((e) => {
                    console.log("Error = ", e);
                    let message = String(e.response.data.message);
                    alert(message);
                    setLoading(false);
                    setIsRegisterFail(message);
                });
        }
        // }
    };

    const hideAlert = () => {
        setModalShow(false);
        navigate("/login");
    };

    return (
        <React.Fragment>
            <NavBarComponent />
            <Loading loading={loading} />
            <Box>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MyVerticallyCenteredModal
                        style={{
                            padding: "5px",
                            borderRadius: "10px",
                            backgroundColor: "rgb(240,240,240)",
                            position: "absolute",
                            top: "14%",
                            left: "10%",
                            right: "10%",
                            width: "80%"
                        }}
                        show={modalShow}
                        onHide={hideAlert}
                        onCopy={() => {
                            navigator.clipboard.writeText(copypvt);
                        }}
                        text={copypvt}
                        isRegisterFail={isRegisterFail}
                    />
                </div>
            </Box>
            <Box my={4}>
                <Container sx={{ placeItems: "center" }}>
                    <Card
                        sx={{
                            borderRadius: "4%",
                            placeItems: "center",
                            margin: "0%",
                            paddingtop: "0%"
                        }}
                    >
                        <Grid container sx={{ placeItems: "center" }}>
                            <Grid
                                item
                                lg={6}
                                p={10}
                                sx={{
                                    background: "#c1a86a",
                                    placeItems: "center",
                                    margin: "0%",
                                    paddingtop: "0%",
                                    paddingleft: "5%"
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
                                        placeItems: "center"
                                    }}
                                />
                                <Typography
                                    typography="h4"
                                    sx={{
                                        fontWeight: 700,
                                        width: "100%",
                                        paddingTop: "15%",
                                        color: "#000",
                                        textAlign: "center"
                                    }}
                                >
                                    Start your curated art <br /> collection now
                                </Typography>
                            </Grid>
                            {/* <form> */}
                            <Grid
                                item
                                lg={6}
                                p={10}
                                sx={{ placeItems: "center", margin: "0px", padding: "2%" }}
                            >
                                <Typography
                                    typography="p"
                                    sx={{
                                        fontWeight: 600,
                                        width: "100%",
                                        paddingTop: "0%",
                                        color: "#000",
                                        fontSize: "20px",
                                        textAlign: "left"
                                    }}
                                >
                                    Create Account
                                </Typography>
                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                            setrqFirstName(" Completed");
                                        }}
                                        // onClick={() => {rqd()}}
                                        style={{
                                            width: "100%",
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "30px",
                                            marginRight: "5%",
                                            alignContent: "center"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rqfirstName}</p>
                                </Box>

                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(event) => {
                                            setLastName(event.target.value);
                                            setrqLastName(" Completed");
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "-5px"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rqlastName}</p>
                                </Box>

                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="Username"
                                        value={userName}
                                        onChange={(event) => {
                                            setUserName(event.target.value);
                                            setrqUserName(" Completed");
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "-5px"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rquserName}</p>
                                </Box>
                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="Enter email"
                                        type="email"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                            setrqEmail(" Completed");
                                        }}
                                        style={{
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "-5px"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rqemail}</p>
                                </Box>
                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="Enter password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                            setrqPassword(" Completed");
                                        }}
                                        style={{
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "-5px"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rqpassword}</p>
                                </Box>
                                <Box width="100%" sx={{ justifyContent: "center" }}>
                                    <Input
                                        placeholder="Re-Password"
                                        type="password"
                                        value={rePassword}
                                        onChange={(event) => {
                                            setRePassword(event.target.value);
                                            setrqRePassword("Re-type your password carefully");
                                        }}
                                        style={{
                                            padding: "2.4%",
                                            borderRadius: "20px",
                                            marginTop: "-5px"
                                        }}
                                    />
                                    <p style={{ color: "grey" }}>{rqrePassword}</p>
                                </Box>
                                <Input
                                    placeholder="Referral Code"
                                    value={referral}
                                    onChange={(event) => {
                                        setReferral(event.target.value);
                                    }}
                                    style={{
                                        padding: "2.4%",
                                        borderRadius: "20px",
                                        marginTop: "-5px"
                                    }}
                                />
                                <Typography
                                    typography="p"
                                    sx={{
                                        fontWeight: 700,
                                        width: "100%",
                                        fontSize: "12px",
                                        paddingTop: "30px",
                                        color: "#00000099",
                                        textAlign: "left"
                                    }}
                                >
                                    By continuing you agree to Musechain{" "}
                                    <a href="/">terms and conditions</a> and{" "}
                                    <a href="/">privacy policy</a>
                                </Typography>
                                <Box
                                    width="100%"
                                    sx={{ display: "flex", justifyContent: "center" }}
                                >
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            onRegister();
                                        }}
                                        // onClick={function (e) {onRegister(); popupcall() }}
                                        sx={{
                                            background: "#c1a86a",
                                            padding: "15px 30px 15px 30px",
                                            marginTop: "30px",
                                            textTransform: "none",
                                            borderRadius: "30px",
                                            width: "300px"
                                        }}
                                    >
                                        <Typography
                                            typography="h5"
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 500
                                            }}
                                        >
                                            Sign up
                                        </Typography>
                                    </Button>
                                </Box>
                                <p style={{ textAlign: "center", padding: "10px" }}>
                                    Already have an account? <Link to="/Login">Login</Link>
                                </p>
                            </Grid>
                            {/* </form> */}
                        </Grid>
                    </Card>
                </Container>
            </Box>
            <FooterComponent />
            <GoToTop />
        </React.Fragment>
    );
};

export default RegisterComponent;
