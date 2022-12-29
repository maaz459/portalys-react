import { React, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Progress as LinearProgress,
  Heading,
  chakra,
  HStack,
  Button,
  Flex,
  Stack,
  Input,
} from "@chakra-ui/react";
import Layout from "../../../modules/layout/layout";
import { seatUnSelected } from "../../../static/assets/images";
import { InputBox } from "../../../modules/pages/Events/Create/SharedModules";
import { useNavigate } from "react-router-dom";
export default function Seat() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Flex justifyContent="center">
        <Box maxW="1420px" px={10} h="100%" w="100%">
          <Flex justifyContent="center" alignItems="center" my={30}>
            <Box bg="#1F1F1F" borderRadius={"8px"} className="gordita700" px="40px" py="20px">
              <chakra.span color="primary.100">Step 1 </chakra.span>
              out of 3
            </Box>
          </Flex>

          <Text textAlign="center" my={36} fontSize={38} className="gordita700">
            Event ticket booking details
          </Text>

          <Box px={{ base: 0, md: 71 }} mt={36}>
            <Text className="gordita700">Number of ticket</Text>
            <Stack
              w="100%"
              mt={20}
              justifyContent="space-between"
              bg="#1F1F1F"
              borderRadius={"8px"}
              className="gordita700"
              px="40px"
              py="20px"
              flexDir={{ base: "column", md: "row" }}
            >
              <Flex justifyContent="center" alignItems="center" gap="20px">
                <Text>Late</Text>
                <Text color="primary.100" className="gordita400" fontSize={20}>
                  $ 14.80
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" gap="20px">
                <Text>Qty</Text>
                <Text color="primary.100" className="gordita400" fontSize={20}>
                  4 * 3 = 12
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center" gap="20px">
                <Text>Total</Text>
                <Text color="primary.100" className="gordita400" fontSize={20}>
                  $ 14.80
                </Text>
              </Flex>
            </Stack>
          </Box>

          <Box mt={56}>
            {["L1", "L2", "L3", "L4"].map((val, index) => (
              <Stack flexDir="row" spacing={26} gap={26} alignItems="center" key={index}>
                <Text className="gordita600" fontSize={20}>
                  {val}
                </Text>
                <Flex wrap="wrap" w="100%" justifyContent="space-between" alignItems="center" key={index}>
                  <Flex wrap="wrap" gap={20}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val1, index) => (
                      <Image key={index} w={{ base: "50px", md: "70px", lg: "100px" }} src={seatUnSelected} u />
                    ))}
                  </Flex>
                </Flex>
              </Stack>
            ))}
          </Box>

          <Box px={{ base: 10, md: 71 }} mt={56}>
            <Text className="gordita700" fontSize={18}>
              Enter Personal Detail
            </Text>
            <HStack mt={26} spacing="5%" flex={1} justifyContent="flex-start" w="100%">
              <InputBox
                values={{ name: "" }}
                handleBlur={() => console.log()}
                handleChange={() => console.log("efe")}
                placeholder="Type Event Name"
                name="eventName"
                label="Enter your name"
                maxW="70%"
              />
              <InputBox
                values={{ phone: "" }}
                handleBlur={() => console.log()}
                handleChange={() => console.log("efe")}
                placeholder="Type Event Name"
                name="phone"
                maxW="70%"
                label="Enter youyr phone number"
              />
            </HStack>

            <Stack gap="5%" mt={26} flexDir={{ base: "column", md: "row" }}>
              <Box flexBasis={{ base: "100%", lg: "50%" }}></Box>
              <Box className="gordita700" flexBasis={{ base: "100%", lg: "50%" }}>
                <Box bg="#1F1F1F" borderRadius={"8px"} px="40px" py="20px">
                  <Text fontSize={28} className="gordita700">
                    Invoice
                  </Text>
                  <Stack mt={20} justifyContent="space-between" flexDir={{ base: "column", md: "row" }}>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text>Late</Text>
                      <Text color="primary.100" className="gordita400" fontSize={20}>
                        $ 14.80
                      </Text>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text>Qty</Text>
                      <Text color="primary.100" className="gordita400" fontSize={20}>
                        4 * 3 = 12
                      </Text>
                    </Flex>
                  </Stack>
                  <Text mt={36} pl="20" fontSize={12} className="gordita600" color="#9A9A9A">
                    Have a promo code ?
                  </Text>
                  <Input
                    bg="white.100"
                    w="100%"
                    placeholder="Add Promo Code here"
                    borderRadius="30px"
                    _placeholder={{
                      color: "#484848",
                      fontSize: 14,
                    }}
                  ></Input>

                  <Stack mt={36} justifyContent="space-between" flexDir={{ base: "column", md: "row" }}>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text className="gordita600">Services Fees</Text>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text className="gordita400" fontSize={20}>
                        $5.80
                      </Text>
                    </Flex>
                  </Stack>

                  <Stack mt={36} justifyContent="space-between" className="gordita700" flexDir={{ base: "column", md: "row" }}>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text fontSize={24}>Total</Text>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" gap="20px">
                      <Text color="primary.100" fontSize={24}>
                        $ 361.80
                      </Text>
                    </Flex>
                  </Stack>
                </Box>
                <HStack px={{ base: "0", md: "10%" }} mt={46}>
                  <Button bg="white.100" h="56px" color="black.100" borderRadius="43px" w="100%">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => navigate("/booking/detail")}
                    bg="primary.100"
                    h="56px"
                    color="black.100"
                    borderRadius="43px"
                    w="100%"
                  >
                    Next
                  </Button>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
