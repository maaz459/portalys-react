import { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Progress as LinearProgress,
  Heading,
  chakra,
  HStack,
} from "@chakra-ui/react";
import cartoon from "../../static/assets/images/cartoon.svg";
import bet from "../../static/assets/images/game.svg";
import goal from "../../static/assets/images/goal.svg";
import keeper from "../../static/assets/images/keeper.svg";
import "../../styles/portalys/portalys.css";
import lock from "../../static/assets/images/lock.svg";
import bgimg from "../../static/assets/images/bgimg.svg";
import srch from "../../static/assets/images/srch.svg";
import flag from "../../static/assets/images/flag.svg";
import arrowd from "../../static/assets/images/arrd.svg";
import AllTeam from "./allteam";

export default function Portalys1() {
  const game = [
    {
      bet: bet,
      title: "The Preserve Waitlist",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "TBA",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
    {
      bet: goal,
      title: "Greenville Triumph at Union Omaha",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "Rose Bowl",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
    {
      bet: keeper,
      title: "Premium Space Deposits - 2023",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "Masetor Jazz",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
    {
      bet: goal,
      title: "The Preserve Waitlist",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "TBA",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
    {
      bet: keeper,
      title: "The Preserve Waitlist",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "Rose Bowl",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
    {
      bet: goal,
      title: "The Preserve Waitlist",
      date: "Sun, 15 dec, 2022   |   12:00pm",
      img: cartoon,
      cartoonTitle: "Rose Bowl",
      branch1: "Industry",
      branch2: "Techno",
      branch3: "Bass",
    },
  ];
  return (
    <Box>
      <Box className="soccerhero">
      <Box w="100%" position="relative" >
        <Image w="100%" src={bgimg} />
        <Box display="flex" alignItems="center" justifyContent="space-between" px="50px" position="relative" top="-7rem" className="ticketshero">
          <VStack display="flex" justify="left" alignItems="baseline">
            <Heading color="#FBFAFB" fontWeight="700" fontSize="36px">
              MLS Soccer Tickets
            </Heading>
            <Text color="#FBFAFB" fontSize="16px" marginTop="13px">
              Home / Sports / MLS Soccer Tickets
            </Text>
          </VStack>
          <HStack gap="12px" className="mlshero">
            <Image width="60px" src={srch} />
            <Box backgroundColor="#02F6AD" borderRadius="50px" padding="20px" gap="30px">
              <Text display="flex" alignItems="center" gap="12px" justifyContent="space-between">
                <chakra.span color="#00000" fontSize="14px" fontWeight="700">Popular MLS Games in |</chakra.span>
                <Image src={flag} width="10px" height="14px" />
                <Text display="flex" alignItems="center" gap="8px">
               <chakra.span color="#00000" fontSize="14px" fontWeight="700">
               France</chakra.span>   
                  <Image src={arrowd} width="13px" height="6px" />
                </Text>
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
        <Box gap="20px" display="flex" justifyContent="center" flexWrap="wrap" marginTop="-20px" className="soccercardshero">
          {game.map((item, index) => {
            return (
              <Box key={index} className="soccercards" marginTop="20px">
                <Image src={item.bet} />
                <VStack padding="0px 20px" display="block">
                  <Heading
                    marginTop="20px"
                    color="#FBFAFB"
                    fontWeight="700"
                    fontSize="18px"
                  >
                    {item.title}
                  </Heading>
                  <Text marginTop="10px" color="#FBFAFB" fontSize="16px">
                    {item.date}
                  </Text>
                  <Box
                    marginTop="10px"
                    display="flex"
                    alignItems="center"
                    gap="15px"
                  >
                    <Image height="30px" width="30px" src={item.img} />
                    <Text color="#FBFAFB" fontSize="18px">
                      {item.cartoonTitle}
                    </Text>
                  </Box>
                  <Box
                    paddingTop="10px"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                  >
                    <Text
                      cursor="pointer"
                      border="1px solid #FBFAFB"
                      padding="3px 12px"
                      borderRadius="20px"
                      color="#FBFAFB"
                      fontSize="12px"
                    >
                      {item.branch1}
                    </Text>
                    <Text
                      cursor="pointer"
                      border="1px solid #FBFAFB"
                      padding="3px 12px"
                      borderRadius="20px"
                      color="#FBFAFB"
                      fontSize="12px"
                    >
                      {item.branch2}
                    </Text>
                    <Text
                      cursor="pointer"
                      border="1px solid #FBFAFB"
                      padding="3px 12px"
                      borderRadius="20px"
                      color="#FBFAFB"
                      fontSize="12px"
                    >
                      {item.branch3}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            );
          })}
        </Box>
        <Box
          padding="40px"
          display="flex"
          justifyContent="center"
          marginTop="60px"
        >
          <Image width="56px" src={lock} cursor="pointer" />
        </Box>
        <Box>
          <AllTeam />
        </Box>
      </Box>
    </Box>
  );
}
