import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import leftboll from "../../static/assets/images/collaborate/leftboll.svg";
import sineupimg from "../../static/assets/images/collaborate/sineupimg.svg";

export default function Sineup() {
  return (
    <Box display="flex" gap="50px" alignItems="center" position="relative" className="pricinghero">
      <Box width="50%" position="relative" zIndex="1" className="storyhero">
        <Image src={sineupimg} width="100%" />
      </Box>
      <Box width="50%" className="storyhero">
        <Heading color="#FFFFFF" fontSize="45px" fontWeight="700" className="globalheading">
          Sign Up For Demo
        </Heading>
        <Text color="#FFFFFF" fontSize="15px" fontWeight="400" marginTop="20px">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </Text>
        <Box display="flex" gap="15px" alignItems="center" marginTop="30px" className="signupbuttons">
          <Button
            border="2.88px solid #FFFFFF"
            color="#969696"
            borderRadius="49px"
            width="180px"
            fontSize="15px"
            fontWeight="400"
            className="demobutton"
            background="transparent"
          >
            Sign Up
          </Button>
          <Button
            border="2.88px solid #FFFFFF"
            color="#969696"
            borderRadius="49px"
            width="180px"
            fontSize="15px"
            fontWeight="400"
            className="demobutton"
            background="transparent"
          >
            Try Demo
          </Button>
        </Box>
      </Box>

      <Image src={leftboll} position="absolute" className="leftbollsineup" />
    </Box>
  );
}
