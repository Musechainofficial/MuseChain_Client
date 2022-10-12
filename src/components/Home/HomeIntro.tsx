import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import bgImage from "../../assets/images/home_bg.png";
import phoneImage from "../../assets/images/home_phone.png";
import{Link} from "react-router-dom";
const HomeIntroComponent = () => {
  return (
    <Box
      minHeight="80vh"
      width="100%"
      sx={{
        backgroundImage: () => `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container lg={12}>
          <Grid item lg={7} sx={{display: "flex", placeItems: "center", flexDirection: "row",justifyContent:"center"}}>
            <Box>
              <Typography
                typography="h1"
                sx={{fontSize:"310%",
                  fontWeight: "bold",
                  color: "#000",
                  
                }}
              >
                Buy, trade and manage <br /> quality NFTs through <br /> Musechain
              </Typography>
              <Typography
                typography="h4"
                pt={3}
                sx={{
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Start your Digital Collection now with Musechain curated NFT marketplace <br /> for traditional curations.
              </Typography>
              <Link to='/login'>
              <Button
                sx={{
                  background: "#0F2446",
                  padding: "15px 30px 15px 30px",
                  marginTop: "30px",
                  marginBottom: "30px",
                  textTransform: "none",
                }}
              >
                <Typography
                  typography="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  Buy NFTs
                </Typography>
              </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={5} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Box />
            <Box
              component="img"
              src={phoneImage}
              height={{ xs: "400px", md: "500px", lg: "640px" }}
              ml={{
                lg: 0,
                md: 0,
                xs: 0,
              }}
              sx={{
                maxWidth: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeIntroComponent;
