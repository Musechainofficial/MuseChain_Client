import React, { useState } from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import { Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import OtpInput from 'react-otp-input';
import userService from "src/services/users/userService";
import Loading from "src/components/Loading";
import { MessageDto } from "src/services/message/dto/messageDto";
import GoToTop from '../GoToTop';



const ResetComponent = () => {
  let navigate = useNavigate();
  const location:any = useLocation()
  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  console.log(location.state.userEmail)

  const onReset = () => {
    if(!otp){
      alert("Enter Otp !")
      return;
    }
    const data = {
      otp,
      password,
    };
    setLoading(true);
    userService
      .resetPassword(data)
      .then((result: MessageDto) => {
        console.log("Result = ", result);
        setLoading(false);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
    // navigate("/setting");
  };



  return (
    <React.Fragment>
      <NavBarComponent/>
      <Loading loading={loading} />
      <Box py={20} sx={{ background: '#f3eee2' }}>
        <Container>
          <Card sx={{ borderRadius: "20px", placeItems: "center", display: "flex", flexDirection: "column", padding: "40px" }} >
            <Typography
              typography="p"
              sx={{
                fontWeight: 700,
                width: "100%",
                paddingTop: "30px",
                color: "#000",
                textAlign: "center",
              }}
            >
                Enter the one-time password sent to
            </Typography>
            <Typography
              typography="p"
              sx={{
                fontWeight: 700,
                width: "100%",
                paddingTop: "20px",
                marginBottom: "30px",
                color: "#000",
                textAlign: "center",
              }}
            >
              {location.state.userEmail}
              
            </Typography>
            <Typography
              typography="p"
              sx={{
                fontWeight: 400,
                width: "100%",
                paddingTop: "20px",
                fontSize: "24px",
                marginBottom: "30px",
                color: "#000",
                textAlign: "center",
              }}
            >
                *Note: please check your spam email if not received, the sender would be: no-reply@musechain.org
            </Typography>
            <OtpInput
              value={otp}
              onChange={(code: string) => {
                setOtp(code);
              }}
              inputStyle={{
                width: "80px",
                height: "80px",
                border: "1px solid #fff0",
                borderRadius: "20px",
                backgroundColor: "#CBB786",
                fontSize: "30px",
                margin: "20px",
              }}
              numInputs={6}
              separator={<span></span>}
            />
            <Typography
              typography="p"
              sx={{
                fontWeight: 400,
                width: "100%",
                paddingTop: "50px",
                fontSize: "22px",
                color: "#000",
                textAlign: "center",
              }}
            >
                Enter your new password
            </Typography>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="New Password"
              type="password"
              style={{ padding: "10px", borderRadius: "20px", marginTop: "20px", width: "70%" }}
            />
            <Input placeholder="Re-enter your new password" type="password" style={{ padding: "10px", borderRadius: "20px", marginTop: "20px", width: "70%" }} />
            <Button
              onClick={onReset}
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
                typography="p"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                Next
              </Typography>
            </Button>
          </Card>
        </Container>
      </Box>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};

export default ResetComponent;
