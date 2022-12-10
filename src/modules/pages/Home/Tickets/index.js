import { Box, Flex, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import {
  blur1,
  experience,
  owner,
  ticket1,
  ticket2,
  ticket3,
  tickets,
} from "../../../../static/assets/images";
const Tickets = ({ isMobile, maxW }) => {
  const [image1, setImage1] = useState(ticket1);
  const [image2, setImage2] = useState(ticket2);
  const [image3, setImage3] = useState(ticket3);

  return (
    <Box w="100%">
      <Flex mt={{ base: "20%", md: "10%" }} justifyContent="center" w="100%">
        <Flex
          overflowX={{
            base: "clip",
            md: "inherit",
            lg: "clip",
            "3xl": "inherit",
          }}
          zIndex={0}
          px={20}
          maxW={maxW}
          w="100%"
          position={"relative"}
          wrap="wrap"
          alignItems="center"
        >
          <Box top={-250} left={-250} pos="absolute" zIndex={-1} maxW="486px">
            <Image
              style={{
                width: isMobile ? "" : "",
                height: isMobile ? "350px" : "486px",
              }}
              alt=""
              src={blur1}
            />
          </Box>
          <Box flexBasis={{ base: "100%", md: "60%" }}>
            <HStack justifyContent="center" w="100%">
              <Box bgImage={ticket1} maxW={{ base: "150px", lg: "210px" }}>
                <Image alt="" src={image1} />
              </Box>
              <Box maxW={{ base: "150px", lg: "210px" }}>
                <Image alt="" src={image2} />
              </Box>{" "}
              <Box maxW={{ base: "150px", lg: "210px" }}>
                <Image alt="" src={image3} />
              </Box>
            </HStack>
          </Box>
          <Box flexBasis={{ base: "100%", md: "40%" }}>
            <VStack
              mt={{ base: 60, md: 0 }}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text
                maxW={{ base: "100%", md: "589px" }}
                color="primary.100"
                className="gordita700"
                fontSize={{ base: 36, md: 42, lg: 58 }}
                lineHeight={{ base: "", md: "58px", lg: "82px" }}
                textAlign={{ base: "center", md: "start" }}
                w="100%"
              >
                Take Control of Your Tickets
              </Text>
              <Text
                className="gordita400"
                fontSize={{ base: 16, md: 18, lg: 22 }}
                textAlign={{ base: "center", md: "start" }}
                w="100%"
              >
                One wallet, for all event tickets, that you own.
              </Text>
              <Box w="100%" pt={{ base: 20, md: 20, lg: 56 }}>
                {[
                  {
                    image: tickets,
                    heading: "We verify that you own it",
                    info: "Only your event ticket ownership scans across all events",
                  },
                  {
                    image: owner,
                    heading: "Full-ownership",
                    info: "Your event ticket is a unique NFT that you can trade",
                  },
                  {
                    image: experience,
                    heading: "Personalized experiences",
                    info: "Follow your favorite artists and venue and receive rewards",
                  },
                ].map(({ heading, image, info }, index) => (
                  <HStack
                    pt={{ base: 10, lg: 24 }}
                    key={index}
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image alt="" src={image} />
                    <VStack
                      spacing={0}
                      gap={0}
                      w="100%"
                      alignItems="flex-start"
                    >
                      <Text
                        maxW="589px"
                        className="gordita700"
                        fontSize={{ base: 16, md: 18, lg: 25 }}
                      >
                        {heading}{" "}
                      </Text>
                      <Text
                        className="gordita400"
                        fontSize={{ base: 12, md: 14, lg: 14 }}
                      >
                        {info}{" "}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tickets;
