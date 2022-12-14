import React, { useState } from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import OtpInput from 'react-otp-input';

const OTPComponent = () => {

  const [otp, setOtp] = useState<string>("");

  return (
    <React.Fragment>
      <NavBarComponent />
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
                [cha***@gmail.com]
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
            <Button
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
    </React.Fragment>
  );
};

export default OTPComponent;
