import {
    Box, chakra, Heading,
    HStack,
    Image, Text,
    VStack
  } from "@chakra-ui/react";
  import React from "react";
  import location from "../../static/assets/images/location.svg";
  import Aicon from "../../static/assets/images/seatUnselect.png";
  export default function Preserve() {
    return (
      <Box>
        <Text
          color="#FFFFFF"
          fontWeight="500"
          fontSize="16px"
          borderBottom="1px dashed #2E2E2E"
          paddingBottom="9px"
        >
          Event Name
        </Text>
        <Heading
          paddingTop="20px"
          color="#FBFAFB"
          fontWeight="500"
          fontSize="30px"
        >
          The Preserve Waitlist
        </Heading>
        <Text paddingTop="15px" color="#02F6AD" fontWeight="500" fontSize="16px">
          Sat 5 nov | 10:00pm
        </Text>
        <Box paddingTop="20px" display="flex" alignItems="center" gap="10px">
          <Image width="18px" src={location} />
          <chakra.span color="#FFFFFF" fontWeight="500" fontSize="15px">
            Kia Forum, Inglewood, CA
          </chakra.span>
        </Box>
        <Text
          color="#FFFFFF"
          fontWeight="500"
          fontSize="15px"
          borderBottom="1px dashed #2E2E2E"
          paddingTop="50px"
          paddingBottom="9px"
        >
          Bookiong Details
        </Text>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <VStack textAlign="left">
            <Text
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Ticket holder Name
            </Text>
            <Heading
              paddingTop="3px"
              color="#02F6AD"
              fontWeight="400"
              fontSize="24px"
            >
              Johen Markes
            </Heading>
          </VStack>
          <VStack display="grid" textAlign="left">
            <Text
              textAlign="left"
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Ticket holder
            </Text>
            <Heading
              paddingTop="3px"
              color="#02F6AD"
              fontWeight="400"
              fontSize="24px"
            >
              +374 4490 4904-
            </Heading>
          </VStack>
        </Box>
        <Box paddingTop="40px">
          <Text
            paddingTop="25px"
            color="#FFFFFF"
            fontWeight="400"
            fontSize="16px"
            marginBottom="0px"
          >
            Booking Date
          </Text>
          <Text paddingTop="3px" color="#FBFAFB" fontWeight="500" fontSize="16px">
            Nov 5, 2022, 10:00 pm
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="25px" paddingTop="40px">
          <Text
            paddingTop="25px"
            color="#FFFFFF"
            fontWeight="400"
            fontSize="16px"
            marginBottom="0px"
          >
            Seat No
          </Text>
          <HStack>
            {" "}
            <Image width="80px" src={Aicon} marginRight="12px" />{" "}
            <Image width="80px" src={Aicon} />
          </HStack>
        </Box>
        <Text
          color="#FFFFFF"
          fontWeight="500"
          fontSize="16px"
          borderBottom="1px dashed #2E2E2E"
          paddingBottom="9px"
          paddingTop="70px"
        >
          Payable Details
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom="30px"
        >
          <Box paddingTop="25px">
            <Text
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Paid Price
            </Text>
            <Text
              paddingTop="3px"
              color="#FBFAFB"
              fontWeight="500"
              fontSize="16px"
            >
              $352
            </Text>
          </Box>
          <Box paddingTop="25px">
            <Text
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Paid Price
            </Text>
            <Text
              paddingTop="3px"
              color="#FBFAFB"
              fontWeight="500"
              fontSize="16px"
            >
              $352
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
  