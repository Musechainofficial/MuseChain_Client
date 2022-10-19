import React, { useState, useEffect } from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import { Connection, PublicKey } from "@solana/web3.js";
const WalletComponent = () => {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("0");

  const rpcEndpoint = "https://api.devnet.solana.com";
  const solanaConnection = new Connection(rpcEndpoint);

  useEffect(() => {
    const name = "wallet";
    var tok = "";
    const token = document.cookie.match(
      `(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`
    );
    if (token != null) {
      if (token.length > 0) {
        tok = token[1];
        getBalance(tok);
      }
    }
    setWallet(tok);
  }, []);

  const getBalance = async(wallet: String) => {
    const walletPub = new PublicKey(wallet);
    const solBalance = await solanaConnection.getBalance(walletPub);
    const decimalBalance = (solBalance/1000000000).toFixed(2);
    console.log(decimalBalance);
    setBalance(decimalBalance)
  }

  return (
    <React.Fragment>
      <NavBarComponent />
      <Container>
        <Box p={1}>
          <Card sx={{ borderRadius: "20px", padding: "30px" }}>
            <Box
              component="img"
              src="https://images.ctfassets.net/c4bfhyf95ag8/7MlembSgoWl0aBDdb5AnZp/e6466ed759b281cbf9d5057f5353a548/Solana_Wallet_Image_2-100.jpg"
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
              Wallet Address: {wallet} 
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
              Balance: {balance} SOL 
            </Typography>
            <Button
              onClick={() => {
                const url = `https://explorer.solana.com/address/${wallet}?cluster=devnet`;
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
                Check In Explorer
              </Typography>
            </Button>
          </Card>
        </Box>
      </Container>
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};
export default WalletComponent;
