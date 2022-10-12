import React from "react";
import { Box, Container, Typography, Button, Card} from "@mui/material";
import { Input } from "antd";
import GoToTop from '../GoToTop';
import NavBarComponent from "src/components/Navbar/navbar";
import FooterComponent from "src/components/Footer";

//import brandIcon from "../../assets/images/brand1.png";

const ChangeComponent = () => {
  return (
    <React.Fragment>
      <NavBarComponent  />
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
                Want to change your password?
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
                Enter your registered email here
            </Typography>
            <Input placeholder="Email" style={{ padding: "10px", borderRadius: "20px", marginTop: "20px", width: "70%" }} />
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
      <GoToTop />
    </React.Fragment>
  );
};

export default ChangeComponent;