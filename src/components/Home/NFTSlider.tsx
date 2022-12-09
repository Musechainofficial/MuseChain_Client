import React from "react";
import heroBox from "../../assets/images/heroBox.png";
import { Container, Box, Button, Typography, Grid, IconButton, Avatar } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NextIcon from "../../assets/images/next.svg";
import PrevIcon from "../../assets/images/prev.svg";
// import nftcard from "../Card/NFT";
import MyNFTSlider from "../Card/MyNFTSlider";

const NFTSliderComponent = ({ display }: { display: number }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: display,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const next = () => {};
    const prev = () => {};
    const renderData = () => {
        return (
            <>
                <MyNFTSlider />
                <MyNFTSlider />
                <MyNFTSlider />
                <MyNFTSlider />
                <MyNFTSlider />
            </>
        );
    };

    return null;
    return (
        <Box
            width="100%"
            pt={10}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                placeItems: "center"
            }}
        >
            <IconButton
                sx={{ marginRight: "24px" }}
                aria-label="prev"
                onClick={() => {
                    prev();
                }}
            >
                <Avatar
                    src={PrevIcon}
                    variant="square"
                    style={{
                        margin: "2px",
                        width: "30px",
                        height: "30px"
                    }}
                />
            </IconButton>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={50}
                arrows={false}
                keyBoardControl={true}
                showDots={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType="desktop"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="carousel-padding"
            >
                <MyNFTSlider />
                <MyNFTSlider />
                <MyNFTSlider />
                <MyNFTSlider />
            </Carousel>
            <IconButton
                sx={{ marginLeft: "24px" }}
                aria-label="next"
                onClick={() => {
                    next();
                }}
            >
                <Avatar
                    src={NextIcon}
                    variant="square"
                    style={{
                        margin: "2px",
                        width: "30px",
                        height: "30px"
                    }}
                />
            </IconButton>
        </Box>
    );
};

export default NFTSliderComponent;
