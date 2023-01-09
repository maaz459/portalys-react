import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
  } from "@chakra-ui/react";
  import React from "react";
  import "../../styles/faq/faq.css";
  export default function FAQRow({question,answer}) {
    return (
              <Box marginTop="20px">
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
                          <Heading fontSize="18" fontWeight="400">
                            {question}
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      fontSize="18"
                      fontWeight="400"
                      padding="15px"
                    >
                      {answer}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
    );
  }
  