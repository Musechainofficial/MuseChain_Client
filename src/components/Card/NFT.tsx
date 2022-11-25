import tempIcon from "../../assets/images/temp.png";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, Grid, Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../../pages/GoToTop";
import Audio from "../../pages/market/audioplayer";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Modal from "antd/lib/modal";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";




const NFTCardComponent = () => {
  const [nft, setNft] = useState([]);
  const [present, setPresent] = useState(false);
  const [orderData, setOrderData] = useState();
  const [open, setOpen] = React.useState(false);

  const style = { layout: "vertical" };
  const currency = "USD";


  useEffect(() => {
    fetch("https://musechain-api.herokuapp.com/api/nft/all")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setNft(data);
        setPresent(true);
      });
  }, []);


  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



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
<>
<Box p={1}>
      {/* <Card sx={{ borderRadius: "20px", padding: "30px" }}>
        <Box
          component="img"
          src={tempIcon}
          sx={{
            width: "100%",
            aspectRatio: "1",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
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
          Art Name: 
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
        <Typography
          typography="p"
          p={0.5}
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#000",
          }}
        >
          Price
        </Typography>
      </Card> */}
      {/* <Grid> */}
      <Grid container spacing={4} mb={3}>
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
                      #1/5
                    </Typography>
                    {/* <Button
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
                          typography="h5"
                          sx={{
                            color: "#fff",
                            fontWeight: 500,
                          }}
                        >
                          Buy Now
                        </Typography>
                      </Button> */}
                    {/* <div style={{ maxWidth: "750px", minHeight: "200px" }}> */}
                    <PayPalScriptProvider
                      options={{
                        "client-id": "Ac6ZGzVcCljfLkazaezjwTXHwEoKPvHIQI5UnLn7SQY4VcyGWquMX7rN7eAMehthxqIFJpk1TRTmsNAr",
                        components: "buttons",
                        currency: "USD",
                      }}
                    >
                      {/* <ButtonWrapper data={data} /> */}
                    </PayPalScriptProvider>
                    {/* </div> */}
                    <Link to='/login'>
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
                          typography="h5"
                          sx={{
                            color: "#fff",
                            fontWeight: 500,
                          }}
                        >
                          Buy Now
                        </Typography>
                      </Button></Link>
                  </Card>
                </Box>
              </Grid>

            );

          })}
      </Grid>
    </Box>
</>
  );
};

export default NFTCardComponent;
