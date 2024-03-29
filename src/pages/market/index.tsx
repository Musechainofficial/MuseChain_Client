import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    Grid,
    Slide,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import NavBarComponent from "src/components/Navbar/usernav";
import FooterComponent from "src/components/Footer";
import GoToTop from "../GoToTop";
import Audio from "./audioplayer";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Modal from "antd/lib/modal";
import { TransitionProps } from "@mui/material/transitions";
import { Row, Col, Image } from "react-bootstrap";
import artistImage from "../../assets/images/artist.webp";
import birdImage from "../../assets/images/muse_bird.svg";

import "./index.css";

const NFT_TYPES = {
    AUDIO: "audio"
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MarketComponent = () => {
    const [nft, setNft] = useState([]);
    const [present, setPresent] = useState(false);
    const [orderData, setOrderData] = useState();
    const [artWorkBio, setArtWorkBio] = useState(false);

    const style = { layout: "vertical" };
    const currency = "USD";
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

    const handleClickOpen = (data: any) => {
        if (data.type == NFT_TYPES.AUDIO) {
            setArtWorkBio(true);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setArtWorkBio(false);
        setOpen(false);
    };

    const connectToWeb3 = async () => {};

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
        const token: any = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`);
        if (token.length > 0) {
            tok = token[1];
        }
        console.log(tok, id);
        // const wallet = await connectToWeb3();
        // console.log(wallet);
        const request = {
            token: tok,
            items: { id: id },
            wallet: "sdfasfd"
        };
        console.log(request);
        fetch("https://musechain-api.herokuapp.com/api/nft/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
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
                    <DialogTitle>
                        <b>This is a unique 1 of 1 Unexposed NFT.</b>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            The price is $1 USD.
                            <br />
                            <br />
                            <br />
                            <i>
                                <b>Note:</b>
                            </i>
                            The purchase of this NFT does not result in physical ownership rights to
                            the Unexposed Logo
                            {artWorkBio ? (
                                <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Image src={artistImage} rounded className="artist-image" />
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            <h6 style={{ fontSize: "1.5rem" }}>UncleRayNFT#01</h6>
                                            Mum, m-my stutter… I can’t get rid of it. I-I-I’m at my
                                            wit’s end. Ray, my son, listen to me. Don’t speak too
                                            fast. Don’t get too excited. Take a deep breath and
                                            allow your words to come out freely. You’re a smart boy.
                                            You can do it.
                                            <br />
                                            ‘Dearest mum, I thank you for your motivational words.
                                            You gave me the confidence and belief to overcome my
                                            stuttering. You changed my life. Just look at what
                                            happiness your encouragement has brought me since.’
                                            <br />
                                            Uncle Ray says, always listen to your parents. They want
                                            the best for you.
                                        </p>
                                    </Col>
                                    ​
                                </Row>
                            ) : null}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Buy Now</Button>
                    </DialogActions>
                </Dialog>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src={birdImage}
                        sx={{ alignItems: "center", justifyContent: "center" }}
                    />
                </Box>

                {present && nft?.length && (
                    <Typography
                        typography="p"
                        mt={2}
                        p={0.5}
                        sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            color: "#000",
                            textAlign: "center"
                        }}
                    >
                        Showing {nft?.length} NFTs for sale
                    </Typography>
                )}
                <Typography
                    typography="p"
                    mt={2}
                    p={0.5}
                    sx={{
                        fontSize: "15px",
                        fontWeight: 200,
                        color: "#000",
                        textAlign: "left"
                    }}
                >
                    Please refresh if purchase options are not dislpayed
                </Typography>
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
                                                        alignItems: "center"
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
                                                    textAlign: "center"
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
                                                    color: "#000"
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
                                                    color: "#000"
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
                                                    color: "#000"
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
                                                    "client-id":
                                                        "ASI_i2KRIgi5pq6L6BXyYm0BjWKyZPs2oSZg3xFpDrWw3lYN9KyYJGURP-D38mgiakzwNSuSAB_imlYj",
                                                    components: "buttons",
                                                    currency: "USD"
                                                }}
                                            >
                                                <ButtonWrapper data={data} />
                                            </PayPalScriptProvider>
                                            {/* </div> */}
                                            <Button
                                                onClick={() => handleClickOpen(data)}
                                                sx={{
                                                    background: "#000",
                                                    padding: "7px 20px 7px 20px",
                                                    marginTop: "5px",
                                                    textTransform: "none",
                                                    borderRadius: "6px",
                                                    width: "100%",
                                                    border: "1px solid #000"
                                                }}
                                            >
                                                <Typography
                                                    typography="h5"
                                                    sx={{
                                                        color: "#fff",
                                                        fontWeight: 500
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
            <FooterComponent changeLogo />
            <GoToTop />
        </React.Fragment>
    );
};

const ButtonWrapper = ({ data }: any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    console.log(data);
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: "USD"
            }
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
                        wallet: "sdfasfd"
                    };
                    console.log(request);
                    const serverData = await fetch(
                        "https://musechain-api.herokuapp.com/api/nft/checkout",
                        // "http://localhost:8080/api/nft/checkout",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(request)
                        }
                    );
                    const data_1 = await serverData.json();
                    console.log(data_1);
                    localStorage.setItem("orderData", JSON.stringify(data_1.url));
                    return data_1.url.orderId;
                }}
                onApprove={function (data, actions: any) {
                    return actions.order.capture().then(async function () {
                        console.log(data);
                        const orderData = localStorage.getItem("orderData");
                        console.log(orderData);
                        const response = await fetch(
                            "https://musechain-api.herokuapp.com/api/nft/webhook",
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
