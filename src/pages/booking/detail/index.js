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
  Checkbox,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import Layout from "../../../modules/layout/layout";
import { seatUnSelected } from "../../../static/assets/images";
import { InputBox } from "../../../modules/pages/Events/Create/SharedModules";
import { useNavigate } from "react-router-dom";
export default function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <Modal size="5xl" isCentered={true} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.100" color="black.100">
          <ModalHeader className="gordita600" fontSize={{ base: 20, md: 24, lg: 30 }}>
            {paid ? "Ticket Details" : "Payment"}
          </ModalHeader>
          <ModalCloseButton color="#ABA7AF" w="34px" h="35px" />
          {paid ? (
            <ModalBody>
              <Text
                textAlign="center"
                className="gordita700"
                fontSize={{ base: 24, md: 34, lg: 48 }}
                fontWeight="bold"
                mb="1rem"
              >
                Congratulations{" "}
              </Text>
              <Text
                textAlign="center"
                className="gordita600"
                fontSize={{ base: 24, md: 26, lg: 30 }}
                fontWeight="bold"
                mb="3rem"
              >
                Your ticket is booked{" "}
              </Text>

              <Text textAlign="center" className="gordita600" fontSize={{ base: 24, md: 26, lg: 26 }} fontWeight="bold">
                Transaction Hash
              </Text>
              <Text
                textAlign="center"
                className="gordita700"
                fontSize={{ base: 56, md: 56, lg: 84 }}
                fontWeight="bold"
                mb="1rem"
                color="#FF5C00"
              >
                S%367392{" "}
              </Text>

              <Text
                textAlign="center"
                className="gordita600"
                fontSize={{ base: 24, md: 26, lg: 30 }}
                fontWeight="bold"
                mb="1rem"
              >
                form your wallet{" "}
              </Text>
              <Flex justifyContent="center" my="10%">
                <HStack maxW="500px" w="100%">
                  <Button
                    border="1px solid #FF5C00"
                    bg="white.100"
                    h="56px"
                    color="black.100"
                    borderRadius="43px"
                    w="100%"
                  >
                    Download Receipt
                  </Button>
                  <Button
                    onClick={() => navigate("/mytickets")}
                    bg="primary.100"
                    h="56px"
                    color="black.100"
                    borderRadius="43px"
                    w="100%"
                    _focus={{
                      bg: "primary.100",
                    }}
                    _hover={{
                      bg: "primary.100",
                    }}
                  >
                    View Your ticket
                  </Button>
                </HStack>
              </Flex>
            </ModalBody>
          ) : (
            <ModalBody>
              <Text
                textAlign="center"
                className="gordita700"
                fontSize={{ base: 24, md: 34, lg: 48 }}
                fontWeight="bold"
                mb="1rem"
              >
                Pay from your wallet
              </Text>
              <Box
                textAlign="center"
                className="gordita600"
                fontSize={{ base: 24, md: 26, lg: 30 }}
                fontWeight="bold"
                mb="1rem"
              >
                We will <chakra.span fontSize={{ base: 18, md: 20, lg: 24 }}>detect</chakra.span>
              </Box>
              <Text
                textAlign="center"
                className="gordita700"
                fontSize={{ base: 56, md: 56, lg: 84 }}
                fontWeight="bold"
                mb="1rem"
                color="#FF5C00"
              >
                $361{" "}
              </Text>
              <Text
                textAlign="center"
                className="gordita600"
                fontSize={{ base: 24, md: 26, lg: 30 }}
                fontWeight="bold"
                mb="1rem"
              >
                form your wallet{" "}
              </Text>
              <Flex justifyContent="center" my="10%">
                <HStack maxW="500px" w="100%">
                  <Button
                    border="1px solid #FF5C00"
                    bg="white.100"
                    h="56px"
                    color="black.100"
                    borderRadius="43px"
                    w="100%"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setPaid(true)}
                    bg="primary.100"
                    h="56px"
                    color="black.100"
                    borderRadius="43px"
                    w="100%"
                    _focus={{
                      bg: "primary.100",
                    }}
                    _hover={{
                      bg: "primary.100",
                    }}
                  >
                    Confirm
                  </Button>
                </HStack>
              </Flex>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Flex justifyContent="center">
        <Box maxW="1320px" px={10} h="100%" w="100%">
          <Flex justifyContent="center" alignItems="center" my={30}>
            <Box bg="#1F1F1F" borderRadius={"8px"} className="gordita700" px="40px" py="20px">
              <chakra.span color="primary.100">Step 2 </chakra.span>
              out of 3
            </Box>
          </Flex>

          <Text textAlign="center" my={36} fontSize={38} className="gordita700">
            Event ticket booking details
          </Text>

          <Box mt={36}>
            <Text className="gordita700">Ticket Details</Text>
            <Box mt={36} bg="#1F1F1F" borderRadius={"8px"} className="gordita700" px="40px" py="10px">
              <Stack mt={36} justifyContent="space-between" flexDir={{ base: "column", md: "row" }}>
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
              <Stack mt={36} justifyContent="space-between" flexDir={{ base: "column", md: "row" }}>
                <Flex justifyContent="center" alignItems="center" gap="20px">
                  <Text>Seat No</Text>
                  <Flex gap={20}>
                    <Image  w={{ base: "50px", md: "70px", lg: "100px" }} src={seatUnSelected} />
                    <Image  w={{ base: "50px", md: "70px", lg: "100px" }} src={seatUnSelected} />
                  </Flex>
                </Flex>
              </Stack>
              <Stack mt={36} justifyContent="space-between" flexDir={{ base: "column", md: "row" }}>
                <Flex justifyContent="center" alignItems="center" gap="20px">
                  <Text>Name</Text>
                  <Text color="primary.100" className="gordita400" fontSize={20}>
                    Johen Markes{" "}
                  </Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" gap="20px">
                  <Text>Number</Text>
                  <Text color="primary.100" className="gordita400" fontSize={20}>
                    +1 367 374837 484{" "}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </Box>

          <Box mt={36}>
            <Text fontSize={18} className="gordita700">
              Wallet Address
            </Text>
            <Box mt={36} bg="#1F1F1F" borderRadius={"8px"} className="gordita700" px="40px" pt="20px" pb="40px">
              <Stack mt={36} justifyContent="space-between" flexDir="row">
                <InputBox
                  values={{ name: "" }}
                  handleBlur={() => console.log()}
                  handleChange={() => console.log("efe")}
                  placeholder="Enter your address"
                  name="eventName"
                  maxW="70%"
                  _placeholder={{
                    fontSize: 14,
                    color: "purple.100",
                  }}
                />
              </Stack>
            </Box>
          </Box>
          <Box mt={36}>
            <Text fontSize={18} className="gordita700">
              Payment Method
            </Text>
            <Box mt={36} bg="#1F1F1F" borderRadius={"8px"} className="gordita700" px="30px" py="30px">
              <Text className="gordita700">Select Payment Method</Text>
              <Stack alignItems="center" mt={36} justifyContent="space-between" maxW="575px" w="100%" flexDir={{ base: "column", md: "row" }}>
                <Checkbox defaultChecked={true} className="gordita400" value="credit">
                  Credit/Debit
                </Checkbox>
                <Checkbox className="gordita400" value="applePay">
                  Apple Pay
                </Checkbox>
                <Checkbox className="gordita400" value="torusCrypto">
                  Torus Crypto pay
                </Checkbox>
              </Stack>
              <HStack className="gordita400" gap="5%" mt={36}>
                <InputBox
                  values={{ name: "" }}
                  handleBlur={() => console.log()}
                  handleChange={() => console.log("efe")}
                  placeholder="Enter name of card"
                  label="Enter name of card"
                  name="eventName"
                  maxW="70%"
                  _placeholder={{
                    fontSize: 14,
                    color: "purple.100",
                  }}
                />{" "}
                <InputBox
                  values={{ name: "" }}
                  handleBlur={() => console.log()}
                  handleChange={() => console.log("efe")}
                  placeholder="Enter number of card"
                  label="Enter number of card"
                  name="eventName"
                  maxW="70%"
                  _placeholder={{
                    fontSize: 14,
                    color: "purple.100",
                  }}
                />{" "}
              </HStack>
              <HStack className="gordita400" gap="5%" mt={36}>
                <InputBox
                  values={{ name: "" }}
                  handleBlur={() => console.log()}
                  handleChange={() => console.log("efe")}
                  placeholder="Enter CVC"
                  label="Enter CVC"
                  name="eventName"
                  maxW="70%"
                  _placeholder={{
                    fontSize: 14,
                    color: "purple.100",
                  }}
                />{" "}
                <InputBox
                  values={{ name: "" }}
                  handleBlur={() => console.log()}
                  handleChange={() => console.log("efe")}
                  placeholder="Expire Date"
                  label="Expire Date"
                  name="eventName"
                  maxW="70%"
                  _placeholder={{
                    fontSize: 14,
                    color: "purple.100",
                  }}
                />{" "}
              </HStack>
            </Box>
          </Box>
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
                <Button onClick={onOpen} bg="primary.100" h="56px" color="black.100" borderRadius="43px" w="100%">
                  Pay
                </Button>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  );
}
