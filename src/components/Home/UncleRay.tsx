import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import uncleRayImage from "../../assets/images/uncle-ray.webp";
import { Typography } from "@mui/material";
import "./index.css";

const UncleRay = () => {
    return (
        <Container
            style={{
                backgroundColor: "white",
                padding: "10px 0 10px 0",
                marginTop: "38px",
                marginBottom: "28px"
            }}
        >
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="image-container">
                    <Image src={uncleRayImage} rounded className="uncle-ray-image" />
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                    className="p-sm-3"
                >
                    <Typography
                        typography="h5"
                        pt={1}
                        sx={{
                            letterSpacing: " 0em",
                            lineHeight: "3",
                            color: "#000000",
                            paddingLeft: "13px",
                            paddingRight: "13px"
                        }}
                    >
                        Uncle Ray Cordeiro, The World’s Most Durable Radio DJ (Guinness World
                        Records)
                        <hr />
                        A man who rose from humble beginnings, and became a giant in the music
                        industry through hard work and dedication. His passion for popular music,
                        especially that of the 1930s through the 1960s, has brought enormous
                        pleasure to millions over the airwaves for more than 50 years. His daily
                        late-night show had almost a cult following among Hong Kong people, both at
                        home and overseas. Even at the ripe old age of 97, Uncle Ray continues to
                        seek out projects that interest him. His voice is legendary and his wisdom
                        worth his weight in gold. And he has agreed to work with Unexposed to have
                        some of his “sayings” minted as NFTs, literally digital art pieces to
                        collectors. He might add to his Guinness World Record by becoming the oldest
                        NFT artist! You too can own a piece of broadcasting artistry.
                        <hr />
                        Uncle Ray has graciously decided that all of his proceeds from this NFT
                        project be donated to his beloved alma mater, St Joseph’s College Hong Kong.
                        The school proposes to use this fund towards helping Non Chinese Students.
                        <hr />
                        (Uncle Ray NFTs x St Joseph’s College)
                    </Typography>
                </Col>
            </Row>
        </Container>
    );
};

export default UncleRay;
