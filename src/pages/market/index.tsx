import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, Grid } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import Audio from "./audioplayer";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
const MarketComponent = () => {
  const [nft, setNft] = useState([]);
  const [present, setPresent] = useState(false);
  const [orderData, setOrderData] = useState();

  const style = { layout: "vertical" };
  const currency = "USD";

  useEffect(() => {
    fetch("http://localhost:8080/api/nft/all")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setNft(data);
        setPresent(true);
      });
  }, []);

  const connectToWeb3 = async () => {
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
                          <ButtonWrapper data={data} />
                        </PayPalScriptProvider>
                      {/* </div> */}
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
                      >
                        <Typography
                          typography="h5"
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

const ButtonWrapper = ({data} : any) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  console.log(data);
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "USD",
      },
    });
  }, []);

  return (
    <>
      {/* {showSpinner && isPending && <div className="spinner" />} */}
      <PayPalButtons
        // style={style}
        disabled={false}
        // forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={async () => {
          const name = "access";
          var tok;
          const token: any = document.cookie.match(
            `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
          );
          if (token.length > 0) {
            tok = token[1];
          }
          console.log(tok, data.id);
          // const wallet = await connectToWeb3();
          // console.log(wallet);
          const request = {
            token: tok,
            items: { id: data.id },
            wallet: "sdfasfd",
          };
          console.log(request);
          const serverData = await fetch(
            "http://localhost:8080/api/nft/checkout",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(request),
            }
          );
          const data_1 = await serverData.json();
          console.log(data_1);
          localStorage.setItem('orderData', JSON.stringify(data_1.url));
          return data_1.url.orderId;
        }}
        onApprove={function (data, actions: any) {
          return actions.order.capture().then(async function () {
            console.log(data);
            const orderData = localStorage.getItem('orderData'); 
            console.log(orderData);
            const response = await fetch(
              "http://localhost:8080/api/nft/webhook",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: orderData
              }
            );
            const responseData = await response.json();
            console.log(responseData);
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};


export default MarketComponent;
