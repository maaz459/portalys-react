import {
  Box,
  Button,
  chakra,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { React, useState } from "react";
import tik from "../../static/assets/images/collaborate/tik.svg";
import info from "../../static/assets/images/collaborate/info.svg";

export default function Pricing() {
  const data = [
    {
      personal: "Personal",
      price: "$19",
      duration: "/ month",
      discription: "All the basic features to boost your freelance career",
      tik: tik,
      info: info,
      access: "Full Access to Landingfolio",
      free: "100 GB Free Storage",
      visitor: "Unlimited Visitors",
      agents: "10 Agents",
      chat: "Live Chat Support",
    },
    {
      personal: "Personal",
      price: "$19",
      duration: "/ month",
      discription: "All the basic features to boost your freelance career",
      tik: tik,
      info: info,
      access: "Full Access to Landingfolio",
      free: "100 GB Free Storage",
      visitor: "Unlimited Visitors",
      agents: "10 Agents",
      chat: "Live Chat Support",
    },
    {
      personal: "Personal",
      price: "$19",
      duration: "/ month",
      discription: "All the basic features to boost your freelance career",
      tik: tik,
      info: info,
      access: "Full Access to Landingfolio",
      free: "100 GB Free Storage",
      visitor: "Unlimited Visitors",
      agents: "10 Agents",
      chat: "Live Chat Support",
    },
  ];
  return (
    <Box
      gap="25px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      className="pricinghero"
    >
      {data.map((item, index) => {
        return (
          <Box
            borderRadius="5px"
            backgroundColor="#0A0909"
            padding="22px"
            key={index}
            maxW="370px"
            width="100%"
            className="pricingcard"
          >
            <Heading
              color="#FFFFFF"
              fontSize="17px"
              fontWeight="400"
              textAlign="left"
            >
              {item.personal}
            </Heading>
            <HStack display="flex" alignItems="end" marginTop="10px">
              <Heading color="#FFFFFF" fontSize="45px" className="globalheading">
                {item.price}
              </Heading>
              <chakra.span color="#71717A" fontSize="17px">
                {item.duration}
              </chakra.span>
            </HStack>
            <Text
              color="#A1A1AA"
              fontSize="15px"
              fontWeight="400"
              marginTop="10px"
              marginBottom="20px"
              textAlign="left"
            >
              {item.discription}
            </Text>
            <Divider />
            <HStack marginTop="20px" display="flex" alignItems="center">
              <Image src={item.tik} width="15px" />
              <Text color="#FFFFFF" fontSize="15px" fontWeight="500">
                {item.access}
              </Text>
              <Image src={item.info} width="13px" />
            </HStack>
            <HStack marginTop="20px" display="flex" alignItems="center">
              <Image src={item.tik} width="15px" />
              <Text color="#FFFFFF" fontSize="15px" fontWeight="500">
                {item.free}
              </Text>
              <Image src={item.info} width="13px" />
            </HStack>
            <HStack marginTop="20px" display="flex" alignItems="center">
              <Image src={item.tik} width="15px" />
              <Text color="#FFFFFF" fontSize="15px" fontWeight="500">
                {item.visitor}
              </Text>
            </HStack>
            <HStack marginTop="20px" display="flex" alignItems="center">
              <Image src={item.tik} width="15px" />
              <Text color="#FFFFFF" fontSize="15px" fontWeight="500">
                {item.agents}
              </Text>
            </HStack>
            <HStack marginTop="20px" display="flex" alignItems="center">
              <Image src={item.tik} width="15px" />
              <Text color="#FFFFFF" fontSize="15px" fontWeight="500">
                {item.chat}
              </Text>
              <Image src={item.info} width="13px" />
            </HStack>
            <Button
              background="#18181B"
              color="#FFFFFF"
              fontSize="16px"
              fontWeight="400"
              padding="9px 65px"
              borderRadius="4px"
              border="1px solid #27272A"
              marginTop="20px"
              marginBottom="15px"
              className="trialbutton"
            >
              Get 14 Days Free Trial
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}
