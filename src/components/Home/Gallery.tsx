import React from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import NFTCardComponent from "../Card/NFT";
import{Link} from "react-router-dom";
const GalleryComponent = () => {
  return (
    <Box
      width="100%"
      pt={10}
      sx={{
        background: "#c1a86a",
        display: "flex",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Typography
          typography="h3"
          mb={4}
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: 700,
            color: "#fff",
            lineHeight: "80px",
          }}
        >
          Quality NFTs, at your fingertips
        </Typography>
        <Grid container spacing={4} mb={3}>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
          <Grid item lg={4}>
            <NFTCardComponent />
          </Grid>
        </Grid>
        <Link to='/login'>
        <Box sx={{ display: "flex", justifyContent: "center" }} pb={3}>
          
          <Button
            sx={{
              borderRadius: "4px",
              border: "1px solid #FFF",
              marginTop: "30px",
              padding: "10px 30px 10px 30px",
              textTransform: "none",
            }}
          >
            <Typography
              typography="h4"
              sx={{
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Explore collectionist
            </Typography>
          </Button>
        </Box>
        </Link>
      </Container>
    </Box>
  );
};

export default GalleryComponent;
