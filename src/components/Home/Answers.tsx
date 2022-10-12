import React from "react";
import heroBox from "../../assets/images/heroBox.png";
import {
  Container,
  Box,
  Button,
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import bgImage from "../../assets/images/home_bg.png";
import birdImage from "../../assets/images/muse_bird.svg";
import NFTSliderComponent from './NFTSlider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AnswersComponent = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };
  return (
    <Box
      width="100%"
      pt={10}
      sx={{
        background: "#fff",
      }}
    >
      <Container>
        <Grid container lg={12} sx={{width: "100%"}}>
          <Grid item lg={5} sx={{display: "flex", placeItems: "center", flexDirection: "row"}}>
            <Box>
              <Typography
                typography="h3"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  lineHeight: "60px",
                }}
              >
                Your questions.<br /> Answered.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={7} sx={{ marginTop: "30px", marginBottom: "50px", }}>
            <Box width="100%">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                square
                disableGutters
                sx={{
                  backgroundColor: "#fff0",
                  borderWidth: "0px",
                  boxShadow: "0 1px 0.5px -0.5px #000",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000", fontSize: "40px" }}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "80%",
                      flexShrink: 0,
                      color: "#000",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                    }}
                  >
                    What does Musechain do?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    py={1}
                    color="#000"
                    sx={{ width: "100%", flexShrink: 0 }}
                  >
                    Musechain is an NFT Marketplace for digital copies of art. We provide a curated experience for all our users, providing hand-picked quality art for you to invest in. <br />
                    <br />
                    Musechain offers this in a simple-to-use package. Simply create an account, and buy art now with your credit/ debit card.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                square
                disableGutters
                sx={{
                  backgroundColor: "#fff0",
                  borderWidth: "0px",
                  boxShadow: "0 1px 0.5px -0.5px #000",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000", fontSize: "40px" }}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "80%",
                      flexShrink: 0,
                      color: "#000",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                    }}
                  >
                    What is blockchain?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    py={1}
                    color="#000"
                    sx={{ width: "100%", flexShrink: 0 }}
                  >
                    Blockchain is a next generation technology that leverages universal ledger technology. It is essentially a book of transactions viewable by the anyone.
                    <br /><br />This is why your unique NFT could only belong to you and would not be able to be counterfeited in this environment.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                square
                disableGutters
                sx={{
                  backgroundColor: "#fff0",
                  borderWidth: "0px",
                  boxShadow: "0 1px 0.5px -0.5px #000",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000", fontSize: "40px" }}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "80%",
                      flexShrink: 0,
                      color: "#000",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                    }}
                  >
                    What are NFTs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    py={1}
                    color="#000"
                    sx={{ width: "100%", flexShrink: 0 }}
                  >
                    An NFT or non-fungible token is a unique digital asset. It is different from crypto-currency which is fungible and exchangable
                    <br /><br />
                    For example, your £50 note is exchangable with other £50 and has the same value, this is the same asfungible token, most commonly in the form of cryptocurrencies, such as Bitcoin, Solana and more. However, NFTs are not exchangable with one other and each are unique, an NFT digital asset is the same as a piece of artwork in that sense.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                square
                disableGutters
                sx={{
                  backgroundColor: "#fff0",
                  borderWidth: "0px",
                  boxShadow: "0 1px 0.5px -0.5px #000",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000", fontSize: "40px" }}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "80%",
                      flexShrink: 0,
                      color: "#000",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                    }}
                  >
                    Why NFTs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    py={1}
                    color="#000"
                    sx={{ width: "100%", flexShrink: 0 }}
                  >
                    In addition to utilites of NFTs announced by Musechain upon each launch, an NFT is firstly unique and therefore not counterfeitable, secondly more liquid and sellable than traditional artwork, and thirdly, ownership of an NFT is indisputable! It is a great companion to your other artwork collection!
                    <br /><br />
                    Also, who doesn't love to be at the forefront of innovation and technology?
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                square
                disableGutters
                sx={{
                  backgroundColor: "#fff0",
                  borderWidth: "0px",
                  boxShadow: "0 1px 0.5px -0.5px #000",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000", fontSize: "40px" }}/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      width: "80%",
                      flexShrink: 0,
                      color: "#000",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                    }}
                  >
                    How could I buy these NFTs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h6"
                    py={1}
                    color="#000"
                    sx={{ width: "100%", flexShrink: 0 }}
                  >
                    Just go ahead and create your Musechain account!
                    <br /><br />
                    Once created, we would guide you through a wallet creation and you are all set. Click on the art you would like to buy and pay with your credit/debit card!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AnswersComponent;
