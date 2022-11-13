import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, Grid, Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import Audio from "./audioplayer";
import Modal from "antd/lib/modal";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const MarketComponent = () => {
  const [nft, setNft] = useState([]);
  const [present, setPresent] = useState(false);
  const [open, setOpen] = React.useState(false);


  useEffect(() => {
    fetch("https://musechain-api.herokuapp.com/api/nft/all")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setNft(data);
        setPresent(true);
      });
  }, []);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const connectToWeb3 = async () => {

    
  };

  const showNftDetails = async () => {
    const { solana } = window;
    if (solana && solana.isPhantom) {
      try {
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(response.publicKey.toString());
        return response.publicKey.toString();
      } catch (error) {
        const response = await solana.connect();
        console.log(response.publicKey.toString());
        return response.publicKey.toString();
      }
    }
  };

  const buyNow = async (e: any, id: any) => {
    const name = "access";
    var tok;
    const token: any = document.cookie.match(
      `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
    );
    if (token.length > 0) {
      tok = token[1];
    }
    console.log(tok, id);
    // const wallet = await connectToWeb3();
    // console.log(wallet);
    const request = {
      token: tok,
      items: { id: id },
      wallet: "sdfasfd",
    };
    console.log(request);
    fetch("https://musechain-api.herokuapp.com/api/nft/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        window.location = data.url;
      });
  };

  return (
    <React.Fragment>
      <NavBarComponent />

      <Container>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><b>This is a unique 1 of 1 Unexposed NFT.</b></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The price is $1 USD.<br/><br/>
            <br />
            <i><b>Note:</b></i>The purchase of this NFT does not result in physical ownership rights to the Unexposed Logo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Buy Now</Button>
        </DialogActions>
      </Dialog>
        <Grid container spacing={3} mb={3}>
          {present &&
            nft.map((data: any, index) => {
              const price = data.price;
              return (
                <Grid item lg={3}>
                  <Box p={1}>
                    <Card sx={{ borderRadius: "20px", padding: "30px" }}>
                      {data.type === "audio" ? (
                        <Audio url={data.url} name={data.name} /> 
                      ) : (
                          <Box
                          component="img"
                          src={data.url}
                          sx={{
                            width: "100%",
                            aspectRatio: "1",
                            display: "flex",
                            position: "relative",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      )}

                      <Typography
                        typography="p"
                        mt={2}
                        p={0.5}
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#000",
                          textAlign: "center",
                        }}
                      >
                        US${price}
                      </Typography>
                      <Typography
                        typography="p"
                        mt={2}
                        p={0.5}
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        Art Name: {data.name}
                      </Typography>
                      <Typography
                        typography="p"
                        p={0.5}
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        Artist
                      </Typography>
                      <Typography
                        typography="p"
                        p={0.5}
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        #1/100
                      </Typography>
                      <Button
                        // onClick={() => {
                        //   gotoSetting();
                        // }}
                        sx={{
                          background: "#000",
                          padding: "7px 20px 7px 20px",
                          marginTop: "5px",
                          textTransform: "none",
                          borderRadius: "6px",
                          width: "100%",
                          border: "1px solid #000",
                        }}
                        onClick={(e) => buyNow(e, data.id)}
                      >
                        <Typography
                          typography="p"
                          sx={{
                            color: "#fff",
                            fontWeight: 500,
                          }}
                        >
                          Buy Now
                        </Typography>
                      </Button>
                      <Button
                        onClick={handleClickOpen}
                        sx={{
                          background: "#000",
                          padding: "7px 20px 7px 20px",
                          marginTop: "5px",
                          textTransform: "none",
                          borderRadius: "6px",
                          width: "100%",
                          border: "1px solid #000",
                        }}
                      >
                        <Typography
                          typography="p"
                          sx={{
                            color: "#fff",
                            fontWeight: 500,
                          }}
                        >
                          Details
                        </Typography>
                      </Button>
                    </Card>
                  </Box>
                </Grid>
                
              );
              
            })}
        </Grid>
      </Container>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};
export default MarketComponent;
