import React, { useState } from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import { Input, Result } from "antd";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import Loading from "src/components/Loading";
import brandIcon from "../../assets/images/brand1.png";
import userService from "src/services/users/userService";
import { UserDto } from "src/services/users/dto/userDto";
import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';
import MyVerticallyCenteredModal from '../../components/MyVerticallyCenteredModal';

const RegisterComponent = () => {

  let navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [referral, setReferral] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [copypvt, setcopypvt] = useState('');

  const onRegister = () => {
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
        // console.log("Result = ", result);
        // alert(`This is your private key\n ${result.privateKey}`);
        setcopypvt(result.privateKey);

        setLoading(false);
        // alert(`${result.privateKey} <Button>copy</Button>`);
        setModalShow(true)
        // navigate("/login");

      })
      .catch((e) => {
        console.log("Error = ", e);
        let message = String(e.response.data.message);
        alert(message);
        setLoading(false);
      });

  };

  const hideAlert = () => {
    setModalShow(false)
    navigate("/login");
  }

  return (
    <React.Fragment>
      <NavBarComponent />
      <Loading loading={loading} />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <MyVerticallyCenteredModal
          style={{padding:'15px', borderRadius:'10px', backgroundColor: 'white', position: 'absolute', top: '14%', left:'10%', right:'10%', width: '80%' }}
          show={modalShow}
          onHide={hideAlert}
          onCopy={() => { navigator.clipboard.writeText(copypvt) }}
          text={copypvt}
        />
      </div>
      <Box my={4}>
        <Container sx={{ placeItems: "center" }}>

          <Card sx={{ borderRadius: "4%", placeItems: "center", margin: "0%", paddingtop: "0%" }} >

            <Grid container sx={{ placeItems: "center" }}>
              <Grid item lg={6} p={10} sx={{ background: "#c1a86a", placeItems: "center", margin: "0%", paddingtop: "0%", paddingleft: "5%" }} >
                <Box
                  component="img"
                  src={brandIcon}
                  sx={{ width: "100%", display: 'flex', aspectRatio: 1, height: "100%", placeItems: "center" }}
                />
                <Typography
                  typography="h4"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    paddingTop: "15%",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  Start your curated art <br /> collection now
                </Typography>
              </Grid>
              <Grid item lg={6} p={10} sx={{ placeItems: "center", margin: "0px", padding: "2%" }}>
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
                <Input
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  style={{ width: "45%", padding: "2.4%", borderRadius: "20px", marginTop: "30px", marginRight: "5%" }}
                />
                <Input
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  style={{ width: "50%", padding: "2.4%", borderRadius: "20px", marginTop: "30px" }}
                />
                <Input
                  placeholder="Username"
                  value={userName}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  style={{ padding: "2.4%", borderRadius: "20px", marginTop: "30px" }}
                />
                <Input
                  placeholder="Enter email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  style={{ padding: "2.4%", borderRadius: "20px", marginTop: "30px" }}
                />
                <Input
                  placeholder="Enter password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  style={{ padding: "2.4%", borderRadius: "20px", marginTop: "20px" }}
                />
                <Input
                  placeholder="Re-Password"
                  type="password"
                  value={rePassword}
                  onChange={(event) => {
                    setRePassword(event.target.value);
                  }}
                  style={{ padding: "2.4%", borderRadius: "20px", marginTop: "20px" }}
                />
                <Input
                  placeholder="Referral Code"
                  value={referral}
                  onChange={(event) => {
                    setReferral(event.target.value);
                  }}
                  style={{ padding: "2.4%", borderRadius: "20px", marginTop: "20px" }}
                />
                <Typography
                  typography="p"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                    fontSize: "12px",
                    paddingTop: "30px",
                    color: "#00000099",
                    textAlign: "left",
                  }}
                >
                  By continuing you agree to Musechain <a href="/">terms and conditions</a> and <a href="/">privacy policy</a>
                </Typography>
                <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    onClick={() => { onRegister(); }}
                    // onClick={function (e) {onRegister(); popupcall() }}
                    sx={{
                      background: "#c1a86a",
                      padding: "15px 30px 15px 30px",
                      marginTop: "30px",
                      textTransform: "none",
                      borderRadius: "30px",
                      width: "300px",
                    }}
                  >
                    <Typography
                      typography="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      Sign up
                    </Typography>
                  </Button>

                </Box>
                <p style={{ textAlign: 'center', padding: '10px' }}>Already have an account? <Link to='/Login'>Login</Link></p>
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

export default RegisterComponent;
