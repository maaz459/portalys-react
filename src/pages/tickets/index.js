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
  InputGroup,
  InputLeftElement,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
} from "@chakra-ui/react";
import Layout from "../../modules/layout/layout";
import { qrcode, seatUnSelected } from "../../static/assets/images";
import { InputBox } from "../../modules/pages/Events/Create/SharedModules";
import { event, location, pdf, xls } from "../../static/assets/images/dashboard/sidebar";
import { SearchIcon } from "@chakra-ui/icons";
import { eye } from "../../static/assets/images";
export default function Tickets() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState("Upcomming");
  const tickets = [{ type: "Festival" }, { type: "Event" }, { type: "Festival" }, { type: "Event" }];
  const SingleEvent = {
    image: event,
    eventName: "Joker (VIP) Ticket",
    date: "24 Dec, 2022",
    startTime: "15:00",
    venue: "Licester Squre",
    status: "Live",
    location: "Kia Forum, Inglewood, CA",
  };

  const events = [
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
    SingleEvent,
  ];
  return (
    <Layout>
      <Flex justifyContent="center">
        <Box maxW="1420px" px={10} h="100%" w="100%">
          <Text textAlign="center" my={36} fontSize={38} className="gordita700">
            My Ticket{" "}
          </Text>
          <Stack flexDir={{ base: "column", md: "row" }} alignItems="center" mt={24}>
            <HStack maxW="850px" gap={24} w="100%" className="gordita400" flex={4}>
              <InputGroup flex={5}>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input
                  borderRadius="6px"
                  bg="#1C1C1C"
                  type="text"
                  j
                  color="white.100"
                  placeholder="Search by customer address, ticket ID or collectible title"
                  _placeholder={{
                    color: "white.100",
                    fontSize: 12,
                  }}
                  w="100%"
                  pl={38}
                />
              </InputGroup>{" "}
              <Input
                flex={3}
                borderRadius="6px"
                bg="#1C1C1C"
                type="text"
                color="white.100"
                placeholder="Status"
                _placeholder={{
                  color: "white.100",
                  fontSize: 12,
                }}
              />
            </HStack>

            <HStack alignItems="center" justifyContent="flex-end" flex={1}>
              <HStack justifyContent="center" alignItems="center" spacing={0}>
                <Text fontSize={14} color="white.100" className="gordita700">
                  Export to:
                </Text>
                <Image pl={16} src={pdf} />
                <Image pl={16} src={xls} />
              </HStack>
            </HStack>
          </Stack>

          <Box mt={56}>
            <Flex gap={20} borderBottom="2px solid" borderColor="#464646">
              <Text
                color={selected === "Upcomming" ? "primary.100" : "white.100"}
                className="gordita700"
                fontSize={14}
                cursor="pointer"
                onClick={() => setSelected("Upcomming")}
              >
                Upcomming
              </Text>
              <Text
                color={selected === "My Collectibles" ? "primary.100" : "white.100"}
                cursor="pointer"
                onClick={() => setSelected("My Collectibles")}
                className="gordita700"
                fontSize={14}
              >
                My Collectibles
              </Text>
            </Flex>
          </Box>
          {selected === "Upcomming" ? (
            <Flex
              color="white.100"
              wrap="wrap"
              justifyContent="space-between"
              mt={24}
              flexDir={{ base: "column", md: "row" }}
              alignItems={{ base: "", md: "center" }}
            >
              {tickets?.map((val, index) => (
                <Box
                  mt={56}
                  key={index}
                  flexBasis={{ base: "80%", md: "45%", lg: "30%" }}
                  bg="#131118"
                  borderRadius={"8px"}
                  px="20px"
                  py="20px"
                >
                  <HStack justifyContent="space-between">
                    <Box>
                      <Box className="gordita400" fontSize={14} opacity={1}>
                        <chakra.span opacity={0.8}>Ticket ID: </chakra.span> #461547
                      </Box>
                      <Text mt={24} className="gordita400" fontSize={14} opacity={0.8}>
                        Transaction Hash:
                      </Text>
                      <Text className="gordita400" fontSize={14}>
                        3YvgGx...9tWcjghjkFHnkHN
                      </Text>
                    </Box>
                    <Box>
                      <Image src={qrcode} />
                    </Box>
                  </HStack>
                  <Divider my={30} w="100%" h="" orientation="horizontal" bg="#2D2D2D"></Divider>
                  <Box bg="#1D1A25" borderRadius={"8px"} px="20px" py="20px">
                    <HStack justifyContent="space-between">
                      <Box className="gordita400" fontSize={14} opacity={0.8}>
                        Event Name:
                      </Box>
                      <Text fontSize={14} p={2} bg="#131118" borderRadius="5px">
                        {val.type}
                      </Text>
                    </HStack>
                    <Text className="gordita600" fontSize={20}>
                      portalysaccount.near{" "}
                    </Text>
                    <Text mt={10} className="gordita600" fontSize={14} color="primary.100">
                      Sat 5 Nov | 10:00 PM
                    </Text>
                    <HStack mt={10}>
                      <Image alt="" src={location} />
                      <Text className="gordita600" fontSize={14}>
                        Kia Forum, Inglewood, CA{" "}
                      </Text>
                    </HStack>
                  </Box>
                  <HStack mt={24} justifyContent="space-between">
                    <Box>
                      <Box className="gordita400" fontSize={14} opacity={1}>
                        <chakra.span opacity={0.8}>Purchased Price: </chakra.span> #2737
                      </Box>
                    </Box>
                    <Flex gap={10}>
                      <Image src={eye} />
                      <Text className="gordita400" fontSize={14} opacity={1}>
                        Event Details
                      </Text>
                    </Flex>
                  </HStack>
                </Box>
              ))}
            </Flex>
          ) : (
            <TableContainer mt={71}>
              <Table style={{ borderCollapse: "separate", borderSpacing: "0 1em" }} variant="unstyled">
                <Thead borderBottom="1px solid" borderColor="rgba(153, 159, 187,0.2)">
                  <Tr>
                    {["Event eventName", "Date", "Start Time", "Event Venue", "Status", "Actions"].map(
                      (column, index) => {
                        return (
                          <Th textTransform="capitalize" key={index} fontSize={16} color="gray.100">
                            {column}
                          </Th>
                        );
                      }
                    )}
                  </Tr>
                </Thead>
                <Tbody>
                  {events.map(({ date, status, eventName, startTime, venue, image }, index) => {
                    return (
                      <Tr borderRadius="6px" bg="#1C1C1C" color="white.100" key={index}>
                        <Td>
                          <HStack spacing={10}>
                            <Image alt="" w={"32px"} h={"32px"} src={image} />
                            <Text className="gordita400" fontSize={16}>
                              {eventName}
                            </Text>
                          </HStack>
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {date}
                          </Text>
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {startTime}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {venue}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {status}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <Flex gap={10} alignItems="center" className="gordita400" fontSize={14} opacity={1}>
                            <Image src={eye} />
                            Event Details
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Flex>
    </Layout>
  );
}
