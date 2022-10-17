import React, { useState } from "react";
import { Box, Container, Typography, Button, Card } from "@mui/material";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";
import userService from "src/services/users/userService";
import Loading from "src/components/Loading";
import { MessageDto } from "src/services/message/dto/messageDto";
import ResetComponent from "src/pages/account/reset";
import GoToTop from '../GoToTop';
const ForgetComponent = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onNext = () => {
    const data = {
      email,
    };
    setLoading(true);
    userService
      .sendResetPassword(data)
      .then((result: MessageDto) => {
        console.log("Result = ", result);
        setLoading(false);
        navigate("/resetPassword");
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
              typography="h4"
              sx={{
                fontWeight: 700,
                width: "100%",
                paddingTop: "30px",
                color: "#000",
                textAlign: "center",
              }}
            >
                Forgot your password?
            </Typography>
            <Typography
              typography="h5"
              sx={{
                fontWeight: 700,
                width: "100%",
                paddingTop: "20px",
                marginBottom: "30px",
                color: "#000",
                textAlign: "center",
              }}
            >
                Enter your registered email below
            </Typography>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                padding: "10px",
                borderRadius: "20px",
                marginTop: "20px",
                width: "70%"
              }}
            />
            <Button
              onClick={ResetComponent}
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
                typography="h6"
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
export default ForgetComponent;