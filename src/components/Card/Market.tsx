import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Card } from "@mui/material";
import tempIcon from "../../assets/images/temp.png";

const MarketCardComponent = () => {
    return (
        <Box p={1}>
            <Card sx={{ borderRadius: "20px", padding: "30px" }}>
                <Box
                    component="img"
                    src={tempIcon}
                    sx={{
                        width: "100%",
                        aspectRatio: "1",
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center"
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
                        textAlign: "center"
                    }}
                >
                    US$
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
                    Art Name:
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
                        Buy Now
                    </Typography>
                </Button>
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
    );
};

export default MarketCardComponent;
