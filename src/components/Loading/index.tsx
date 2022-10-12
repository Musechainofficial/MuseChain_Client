import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import animationData from "src/assets/lottie.json";

function Loading({loading}:{loading:boolean}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
      width="100%"
      minHeight="100vh"
      sx={{
        display: loading ? "flex" : "none",
        background: "#cccccc99",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box p={10} sx={{ background: "#fff0" }}>
        <Lottie options={defaultOptions} height={160} width={160} />
        {/* <Typography variant="h4" pt={3} color="primary" textAlign="center">
          {title}
        </Typography> */}
      </Box>
    </Box>
  );
}

Loading.defaultProps = {
  title: "Loading...",
  loading: false,
};

Loading.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default Loading;