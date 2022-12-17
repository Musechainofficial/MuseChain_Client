import React, { useState, useEffect } from "react";
import { Box, Button, Card, Container, Typography, Grid } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import { Connection, PublicKey } from "@solana/web3.js";
import { FaWallet, FaMoneyCheckAlt } from "react-icons/fa";
import Audio from "../market/audioplayer";
import * as spl from "@solana/spl-token";
import * as buffer from "buffer"; 
const WalletComponent = () => {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("0");
  const [nft, setNft] = useState([]);
  const [present, setPresent] = useState(false);

  const rpcEndpoint = "https://api.devnet.solana.com";
  const solanaConnection = new Connection(rpcEndpoint);

  window.Buffer = buffer.Buffer;

  useEffect(() => {
    const name = "wallet";
    var tok = "";
    const token = document.cookie.match(
      `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
    );
    if (token != null) {
      if (token.length > 0) {
        tok = token[1];
        const name = "access";
        let accessToken;
        const jwtToken: any = document.cookie.match(
          `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
        );
        if (jwtToken.length > 0) {
          accessToken = jwtToken[1];
        }
        console.log(tok);
        getBalance(tok);
        const request = {
          token: accessToken,
        };
        fetch("https://musechain-api.herokuapp.com/api/nft/bought", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        })
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            setNft(data);
            setPresent(true);
          });
      }
    }
    setWallet(tok);
  }, []);

  const getBalance = async (wallet: String) => {
    console.log(wallet);
    const walletPub = new PublicKey(wallet);
    const solBalance = await solanaConnection.getBalance(walletPub);
    const decimalBalance = (solBalance / 1000000000).toFixed(2);
    const USDCMint = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");
    try {
      const tokenAccount = await spl.getAssociatedTokenAddress(
        USDCMint,
        walletPub,
      );
      console.log(tokenAccount.toBase58());
      const USDCBalance = await spl.getAccount(
        solanaConnection,
        tokenAccount 
      );
      const USDCBal = (Number(USDCBalance.amount) / 1000000).toFixed(2);
      console.log(USDCBal);
      setBalance(USDCBal); 
    } catch (error) {
      console.log(0);
      setBalance("0");  
    }
    
  };

  return (
    <React.Fragment>
      <NavBarComponent />
      <Container>
        <Box
          component="img"
          src="https://i.ibb.co/wMZMmxX/wallet.png"
          sx={{
            width: "50%",
            height: "50%",
            aspectRatio: "1",
            display: "flex",
            margin: "auto",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            padding: "0%",
          }}
        />
        <Typography
          typography="h1"
          mt={2}
          p={0.5}
          sx={{
            fontSize: "150%",
            fontWeight: 800,
            color: "#000",
          }}
        >
          <FaWallet /> Wallet Address: {wallet}
        </Typography>
        <Typography
          typography="h1"
          p={0.5}
          sx={{
            fontSize: "150%",
            fontWeight: 800,
            color: "#000",
          }}
        >
          <FaMoneyCheckAlt /> Balance: {balance} USDC 
        </Typography>
        <Button
          onClick={() => {
            const url = `https://explorer.solana.com/address/${wallet}?cluster=devnet`;
            window.location.assign(url);
          }}
          sx={{
            background: "#000",
            paddingTop: "1%",
            paddingBottom: "1%",
            marginTop: "2%",
            marginBottom: "2%",
            textTransform: "none",
            borderRadius: "6px",
            width: "100%",
            border: "1px solid #000",
          }}
        >
          <Typography
            typography="h4"
            sx={{
              color: "#fff",
              fontWeight: 500,
            }}
          >
            Check In Explorer
          </Typography>
        </Button>
      </Container>
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
                      <Button
                        onClick={() => {
                          const url = `https://solscan.io/tx/${data.transaction_id}`;
                          window.location.assign(url);
                        }}
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
                          Transfer Details
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
export default WalletComponent;
