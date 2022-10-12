import React from "react";
import {
  Box,
  Typography,
  Card,
} from "@mui/material";
import tempIcon from "../../assets/images/temp.png";

const NFTCardComponent = () => {
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
          Art Name
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
      </Card>
    </Box>
  );
};

export default NFTCardComponent;
