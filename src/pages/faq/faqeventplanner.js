import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react";
import React , {useState} from "react";
import Layout from "../../modules/layout/layout";
import "../../styles/faq/faq.css";
import faqarrow from "../../static/assets/images/faqarrow.svg";
import { constSelector } from "recoil";
import UserSide from "./userside";
export default function FaqEventPlanner() {
  const[home, setHome] = useState(1)
  const homeHandle = (event) => {
    setHome(event)
  }
  const data = [
    {
      img: faqarrow,
      question: "How do I start my first event?",
      answer:
        "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
    },
    {
      img: faqarrow,
      question: "What if I manage more than one event?",
      answer:
        "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
    },
    {
      img: faqarrow,
      question: "How do I handle refunds?",
      answer:
        "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
    },
    {
      img: faqarrow,
      question: "Fraud",
      answer:
        "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
    },
  ];
  return (
    <Layout>
      <Box padding="70px 0px">
        <Box
          display="flex"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          marginTop="60px"
        >
          <Text onClick={()=>homeHandle(1)} className={home === 1 ? "faqhomeactive" : "faqhome"}>Home</Text>
          <chakra.span>/</chakra.span>
          <Text onClick={()=>homeHandle(2)} className={home === 2 ? "faqhomeactive" : "faqhome"}>FAQ</Text>
        </Box>

       {
      home ===  1 ? (
          <Box className="faqplannerhero">
          <Heading
            backgroundColor="#000000"
            fontSize="40px"
            fontWeight="800"
            color="#FFFFFF"
            textAlign="center"
            className="faqheader"
          >
            Frequently Asked Questions
          </Heading>
          <Box marginTop="60px">
            {data.map((item, index) => {
              return (
                <Box key={index} marginTop="20px">
                  <Accordion
                    allowToggle
                    backgroundColor="#191919"
                    color="#D7D7D7"
                    background="#191919"
                    border="1px solid black"
                  >
                    <AccordionItem>
                      <h2>
                        <AccordionButton background="#191919">
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            padding="15px"
                            background="#191919"
                            className="mainboxfaq"
                          >
                            <Heading fontSize="18" fontWeight="500">
                              {item.question}
                            </Heading>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        padding="15px"
                        display="flex"
                        alignItems="baseline"
                        fontSize="18"
                        fontWeight="400"
                      >
                        <img style={{ margin: "5px" }} src={item.img} />
                        <p>{item.answer}</p>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              );
            })}
          </Box>
        </Box>
        ) : 
        home === 2 ? (
         <Box>
          <UserSide />
         </Box>
        ) : ""
       }
      </Box>
    </Layout>
  );
}
