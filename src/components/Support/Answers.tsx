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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AnswersComponent = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : "");
  };
  return (
    <Box
      width="100%"
      py={10}
      sx={{
        background: "#F3EEE2",
      }}
    >
      <Container>
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
              variant="h4"
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
              variant="h5"
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
              variant="h4"
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
              variant="h5"
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
              variant="h4"
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
              variant="h5"
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
              variant="h4"
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
              variant="h5"
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
              variant="h4"
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
              variant="h5"
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
        
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              What is the specifications of Musechain NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              A Musechain NFT is a non-fungible token that implements the SPL token specification, used widely on Solana (SOL), that has features for minting, sending as well as exchanging with USDC.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              What blockchain is Musechain built on?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Musechain is built on Solana.
              <br /><br />
              Musechain uses Solana because it is one of the most efficient blockchains available, with reliability and a strong userbase. Solana aligns with Musechain's sustainability vision by providing a low energy consumption protocol.
              <br /><br />
              Most importantly, the low and scalable gas fees are great for all of our users.
              <br /><br />
              Don't understand what we have written above? It simply means that the blockchain that Musechain is basing its technology off of ensures efficient and low cost for you and sustainability for our plant.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              What exactly is the Musechain wallet?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Musechain wallet is a full custodial Solana wallet for you to use.
              <br /><br />
              We help you create the wallet and store your public key for potential transactions. We, however, do NOT store your private keys (i.e. the 20 random words) so you would have to mark down the private key for your future reference.
              <br /><br />
              Do note that we are unable to recover your private keys once lost. For more, please refer to our terms and conditions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              I lost my private key for my Musechain wallet!
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Musechain would NOT be able to recover your wallet private keys! Please check your safe place to see whether you still have a copy of the private keys.
              <br /><br />
              If you are unable to find the private keys and would like to create a new wallet, please contact us at hello@musechain.org or join our discord.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              I forgot my Musechain password
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Go to log-in, and click forgot password.
              <br /><br />
              The screen should prompt you to input your registered email. The rest should be self-explanatory!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              I lost access to the email I registered with Musechain
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              Please contact us at hello@musechain.org with your original email, username and password and we shall proceed from there
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
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
              variant="h4"
              sx={{
                width: "80%",
                flexShrink: 0,
                color: "#000",
                fontWeight: "700",
                fontFamily: "Poppins",
              }}
            >
              My question is not answered here, please help!
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              py={1}
              color="#000"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              If your questions are not answered here, join our discord to get help from the Musechain team or send us an email at hello@musechain.org!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default AnswersComponent;
