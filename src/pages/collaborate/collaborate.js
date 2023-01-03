import {
  Box,
  Button,
  chakra,
  Divider,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { React, useState } from "react";
import "../../styles/collaborate/collaborate.css";
import portalys from "../../static/assets/images/collaborate/portalys.png";
import leftboll from "../../static/assets/images/collaborate/leftboll.svg";
import graph from "../../static/assets/images/collaborate/graph.svg";
import { Progress } from "@chakra-ui/react";
import Pricing from "./pricing";
import Features from "./features";
import Sineup from "../sineup";
import GlobalPoints from "./globalpoints";
import rightboll from "../../static/assets/images/collaborate/rightboll.svg";

export default function Collaborate() {
  return (
    <Box background="black">
      <Box className="collaboratebg">
        <Box maxW="900px" textAlign="center">
          <Heading color="#02F6AD" fontWeight="700" fontSize="55px">
            One Stop For Collaboration
          </Heading>
          <Heading color="#FFFFFF" fontWeight="700" fontSize="55px">
            Across the World
          </Heading>
          <Button
            padding="20px"
            color="#000000"
            background="#02F6AD"
            marginTop="30px"
          >
            Start Callboration
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        padding="0px 90px"
        position="relative"
      >
        <Image objectFit="contain" src={portalys} className="portalysimg" />
        <Image
          objectFit="contain"
          height="400px"
          src={leftboll}
          className="leftboll"
        />
      </Box>
      <Box backgroundColor="#0A0909" position="relative" zIndex="1" >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="0px 70px"
          backgroundRepeat="no-repeat"
          className="stroryhero"
        >
          <Box width="50%">
            <Heading color="#FFFFFF" fontWeight="700" fontSize="50px">
              We Don’t just Tell Stories, We Live Them
            </Heading>
            <Text
              color="#FFFFFF"
              fontWeight="400"
              fontSize="16px"
              marginTop="25px"
            >
              Sell your event tickets with online payment methods or offline
              reservation system. More than 100 payment gateways ready to use.
            </Text>
          </Box>
          <Box width="50%">
            <Image objectFit="contain" src={graph} />
          </Box>
        </Box>
      </Box>
      {/* pricing */}
    <Box position="relative">
<Image className="rightboll" src={rightboll} />
    <Box padding="120px 80px 90px" textAlign="center" >

<Box>
        <Heading color="#FFFFFF" fontWeight="400" fontSize="45px">
          Pricing
        </Heading>
        <Text color="#A1A1AA" fontWeight="400" fontSize="17px" marginTop="10px">
          Amet minim mollit non deserunt ullamco.
        </Text>
</Box>
        <Box marginTop="60px">
          <Progress
            value={30}
            size="xs"
            colorScheme="green"
          />
        </Box>
        <Box marginTop="50px">
           <Pricing />
        </Box>
      </Box>
    </Box>
      {/* features */}
     <Box padding="40px 80px 60px 80px">
     <Features />
     </Box>
     {/* sineup */}
     <Box padding="90px 80px">
<Sineup />
     </Box>
     <Box padding="90px 80px" background="black" position="relative" zIndex="1">
<GlobalPoints />
     </Box>
    </Box>
  );
}
