import { Container, Box, Button, Typography, Grid } from "@mui/material";
import birdImage from "../../assets/images/muse_bird.svg";
import NFTSliderComponent from "./NFTSlider";
import { Link } from "react-router-dom";
const CurateComponent = () => {
    return (
        <Box
            width="100%"
            pt={10}
            sx={{
                background: "#fff"
            }}
        >
            <Container>
                <Grid container lg={12} sx={{ width: "100%", placeItems: "center" }}>
                    <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row"
                        }}
                    >
                        <Box>
                            <Box
                                component="img"
                                src={birdImage}
                                sx={{ alignItems: "center", justifyContent: "center" }}
                            />
                            <Typography
                                typography="h3"
                                sx={{
                                    fontWeight: 700,
                                    color: "#000",
                                    lineHeight: "60px",
                                    textAlign: "center"
                                }}
                            >
                                Musechain x <br /> Unexposed
                            </Typography>
                            <Typography
                                typography="h4"
                                py={2}
                                sx={{
                                    fontWeight: 500,
                                    color: "#000"
                                }}
                            >
                                First curated digital collectibles <br /> launching soon
                            </Typography>
                        </Box>
                    </Grid>
                    {/* <Grid item lg={8} md={8} xs={12}>
                        <Box width="100%">
                            <NFTSliderComponent display={2} />
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
            <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
                <Link to="/login">
                    <Button
                        sx={{
                            background: "#0F2446",
                            padding: "15px 30px 15px 30px",
                            marginTop: "30px",
                            textTransform: "none",
                            marginBottom: "30px"
                        }}
                    >
                        <Typography
                            typography="h4"
                            sx={{
                                color: "#fff",
                                fontWeight: 500
                            }}
                        >
                            See more of the collection
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default CurateComponent;
