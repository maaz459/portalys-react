import {
  Box,
  Flex,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import { listing } from "../../../../static/assets/images";

const FAQs = ({ maxW }) => {
  return (
    <Box w="100%">
      <Flex mt={{ base: 36, md: "10%" }} justifyContent="center" w="100%">
        <Flex px={20} maxW={maxW} wrap="wrap" w="100%">
          <Box w="100%" flexBasis={{ base: "100%", md: "50%" }}>
            <VStack
              w="100%"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Box maxW="563px" w="100%">
                <Accordion defaultIndex={[0]} w="100%" allowToggle>
                  {[
                    {
                      question: "Event Ticket Management Dashboard",
                      answer:
                        "Your company's all-in-one dashboard, to create, customize, streamline tickets and overview your sales analytics.",
                    },
                    {
                      question: "Event & Customer Analytics",
                      answer:
                        "Event & Customer Analytics:Each ticket captures many data types on the customer (i.e How much has Thomas spent the past year?)",
                    },
                    {
                      question: "Secondary Market",
                      answer:
                        "We give full control and ownership to event creators and artists to create and control their secondary market needs.",
                    },
                    { question: "Split Royalty", answer: "" },
                  ].map(({ answer, question }, index) => (
                    <AccordionItem
                      key={index}
                      borderBottom="1px solid"
                      borderTop="none"
                      py={24}
                    >
                      <h2>
                        <AccordionButton _expanded={{ color: "primary.100" }}>
                          <Box
                            className="gordita700"
                            fontSize={{ base: 14, md: 16, "3xl": 18 }}
                            flex="1"
                            textAlign="left"
                          >
                            {question}{" "}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>{answer}</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </VStack>
          </Box>
          <Box flexBasis={{ base: "100%", md: "50%" }}>
            <Image alt="" style={{ width: "100%" }} src={listing} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FAQs;
