import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import location from "../../static/assets/images/location.svg";
import qrcode from "../../static/assets/images/qrcode.png";
import Aicon from "../../static/assets/images/seatUnselect.png";

export default function TicketHolder() {
  return (
    <Box>
      <Box
        background="#131118"
        borderRadius="12px"
        padding="12px 30px"
        width="100%"
        paddingBottom="25px"
      >
        <Box textAlign="center">
          <Button
            width="120px"
            background="black"
            borderRadius="50px"
            padding="5px 0px"
            height="15px"
          />
        </Box>
        <HStack paddingTop="10px">
          <Text color="#FFFFFF" fontWeight="400" fontSize="16px">
            Ticket ID
          </Text>
          <Text color="#02F6AD" fontWeight="400" fontSize="16px">
            58944
          </Text>
        </HStack>
        <VStack
          paddingTop="50px"
          borderBottom="1px dashed #2E2E2E"
          paddingBottom="25px"
        >
          <Image width="180px" src={qrcode} />
          <Text
            color="#FFFFFF"
            fontWeight="400"
            fontSize="16px"
            paddingTop="15px"
          >
            2535647484993
          </Text>
        </VStack>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <VStack textAlign="left">
            <Text
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Name ticket holder
            </Text>
            <Heading
              paddingTop="3px"
              color="#02F6AD"
              fontWeight="400"
              fontSize="24px"
              marginTop="0px"
            >
              Johen Markes
            </Heading>
          </VStack>
          <VStack>
            <Text
              textAlign="left"
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Seat No
            </Text>
            <HStack paddingTop="15px">
              <Image src={Aicon} width="55px" marginRight="10px" />
              <Image src={Aicon} width="55px" />
            </HStack>
          </VStack>
        </Box>
        <VStack textAlign="left" display="grid">
          <Text
            color="#FFFFFF"
            fontWeight="400"
            fontSize="16px"
            marginBottom="0px"
          >
            Name ticket holder
          </Text>
          <Heading
            paddingTop="3px"
            color="#02F6AD"
            fontWeight="400"
            fontSize="24px"
            marginTop="0px"
          >
            Johen Markes
          </Heading>
        </VStack>

        <HStack
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingTop="25px"
        >
          <VStack display="grid" textAlign="left">
            <Text
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Date
            </Text>
            <Heading
              paddingTop="3px"
              color="#02F6AD"
              fontWeight="500"
              fontSize="18px"
              marginTop="0px"
            >
              Nov 5, 2022
            </Heading>
          </VStack>
          <VStack display="grid" textAlign="left">
            <Text
              paddingTop="25px"
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginBottom="0px"
            >
              Time
            </Text>
            <Heading
              paddingTop="3px"
              color="#02F6AD"
              fontWeight="500"
              fontSize="18px"
              marginTop="0px"
            >
              10:00 pm
            </Heading>
          </VStack>
        </HStack>
        <VStack paddingTop="25px" display="grid" textAlign="left">
          <Text
            paddingTop="25px"
            color="#FFFFFF"
            fontWeight="400"
            fontSize="16px"
            marginBottom="0px"
          >
            Location
          </Text>
          <HStack>
            <Image src={location} width="18px" marginRight="15px" />
            <Heading
              paddingTop="3px"
              color="#FFFFFF"
              fontWeight="500"
              fontSize="18px"
              marginTop="0px"
            >
              Kia Forum, Inglewood, CA
            </Heading>
          </HStack>
        </VStack>
      </Box>
      <HStack gap="35px" paddingTop="25px">
        <Link
          color="#FBFAFB"
          fontWeight="400"
          fontSize="16px"
          textDecor="underline"
        >
          Refund Policy
        </Link>
        <Link
          color="#FBFAFB"
          fontWeight="400"
          fontSize="16px"
          textDecor="underline"
        >
          Terms & Agreements
        </Link>
      </HStack>
      <Box textAlign="center">
        <Button
          color="#000000"
          borderRadius="43px"
          width="200px"
          fontWeight="700"
          fontSize="14px"
          background="#FFFFFF"
          marginTop="35px"
        >
          Downloade Ticket
        </Button>
      </Box>
    </Box>
  );
}
