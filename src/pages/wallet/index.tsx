import React, { useState, useEffect } from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import { Connection, PublicKey } from "@solana/web3.js";
import { FaWallet,FaMoneyCheckAlt } from "react-icons/fa";
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
                padding:'0%'
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
              <FaWallet/>  Wallet Address: {wallet} 
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
              <FaMoneyCheckAlt/>  Balance: {balance} SOL 
            </Typography>
            <Button
              onClick={() => {
                const url = `https://explorer.solana.com/address/${wallet}?cluster=devnet`;
                window.location.assign(url);
              }}
              sx={{
                background: "#000",
                paddingTop: '1%',
                paddingBottom: '1%',
                marginTop:'2%',
                marginBottom:'2%',
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
      <FooterComponent />
      <GoToTop />
    </React.Fragment>
  );
};
export default WalletComponent;
