import { Container, Box, Typography, Grid } from "@mui/material";
import phoneImage from "../../assets/images/home_phone2.png";

const HomeGuideComponent = () => {
    return (
        <Box
            minHeight="80vh"
            width="100%"
            sx={{
                backgroundColor: "#fff",
                display: "flex",
                placeItems: "center"
            }}
        >
            <Container>
                <Typography
                    typography="h1"
                    my={5}
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#000",
                        fontFamily: "poppins",
                        lineHeight: "65px",
                        fontsize: "100%"
                    }}
                >
                    Collect quality art without <br /> all the tech-speak
                </Typography>
                <Grid container lg={12} py={6}>
                    <Grid
                        item
                        lg={7}
                        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
                    >
                        {/* <Box
              component="img"
              src={phoneImage}
              ml={{
                lg: 0,
                md: 0,
                xs: 0,
              }}
              sx={{
                maxWidth: "100%",
                aspectRatio: 1,
              }}
            /> */}
                    </Grid>
                    <Grid
                        item
                        lg={12}
                        pl={3}
                        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
                    >
                        <Box>
                            <Typography
                                typography="h4"
                                pt={3}
                                sx={{
                                    fontWeight: 600,
                                    color: "#000"
                                }}
                                className="dotGreen"
                            >
                                Wallet
                            </Typography>
                            <Typography
                                typography="h5"
                                pt={1}
                                sx={{
                                    fontWeight: 500,
                                    color: "#000"
                                }}
                            >
                                Create or import your Solana Wallet with Musechain. All integrated.
                                No hassle.
                            </Typography>

                            <Typography
                                typography="h4"
                                pt={3}
                                sx={{
                                    fontWeight: 600,
                                    color: "#000"
                                }}
                                className="dotRed"
                            >
                                Buy NFTs with credit/ debit card!
                            </Typography>
                            <Typography
                                typography="h5"
                                pt={1}
                                sx={{
                                    fontWeight: 500,
                                    color: "#000"
                                }}
                            >
                                Buy our curated selection of quality NFTs with cryptocurrencies
                                ($SOL) or as simple as utilising your credit/ debit card!
                                <br />
                                <br />
                                Purchase your favourite piece of art and let us work for you, with
                                the NFTs delivered straight to your account within 48 hours.
                            </Typography>
                            <Typography
                                typography="h4"
                                pt={3}
                                sx={{
                                    fontWeight: 600,
                                    color: "#000"
                                }}
                                className="dotGreen1"
                            >
                                One Account
                            </Typography>
                            <Typography
                                typography="h5"
                                pt={1}
                                sx={{
                                    fontWeight: 500,
                                    color: "#000"
                                }}
                            >
                                Still managing multiple accounts for your Blockchain endeavours?
                                Just use Musechain and have ONE account for your wallet, marketplace
                                and learning.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeGuideComponent;
