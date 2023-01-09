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
  import React from "react";
  import "../../styles/faq/faq.css";
import faqarrow from "../../static/assets/images/faqarrow.svg";

export default function UserSide() {
    const data = [
        {
          img: faqarrow,
          question: "How do I start my first event?",
          answer:
            "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
        },
        {
          img: faqarrow,
          question: "How do I get refunded?",
          answer:
            "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
        },
        {
          img: faqarrow,
          question: "How can I contact Portalys?",
          answer:
            "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
        },
        {
          img: faqarrow,
          question: "How do I create a Portalys account?",
          answer:
            "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
        },
        {
            img: faqarrow,
            question: "How do I fund my wallet with Solana?",
            answer:
              "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
          },
          {
            img: faqarrow,
            question: "How do I keep my wallet safe?",
            answer:
              "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
          },
          {
            img: faqarrow,
            question: "How can I report fraudulent behavior/content on Portalys?",
            answer:
              "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
          },
          {
            img: faqarrow,
            question: "What blockchain does Portalys support?",
            answer:
              "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
          },
          {
            img: faqarrow,
            question: "Solana could become the ‘Visa of crypto’: Bank of America",
            answer:
              "Starting your first event will become a life-long natural habit, simply create your account, get creative and publish your experience in minutes.",
          },
      ];
  return (
    <div>
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
    </div>
  )
}
