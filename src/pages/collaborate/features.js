import {
  Box, chakra, Heading, Image, Text
} from "@chakra-ui/react";
import React from "react";
import calender from "../../static/assets/images/collaborate/calender.svg";
import dollar from "../../static/assets/images/collaborate/doller.svg";
import light from "../../static/assets/images/collaborate/light.svg";
import mirror from "../../static/assets/images/collaborate/mirror.svg";
import phone from "../../static/assets/images/collaborate/phone.svg";
import shakehand from "../../static/assets/images/collaborate/shakehand.svg";
import "../../styles/collaborate/collaborate.css";

export default function Features() {
  const features = [
    {
      img: shakehand,
      title: "Friendly Team",
      text: "More Then 200 Event",
    },
    {
      img: mirror,
      title: "Perfect Venue",
      text: "The Best and Perfect Venue",
    },
    {
      img: dollar,
      title: "Crypto Payment",
      text: "We Made Your Payments Easy",
    },
    {
      img: light,
      title: "New & Brilliant Idea",
      text: "We Have Millions Idea",
    },
    {
      img: phone,
      title: "24/7 Support",
      text: "Anytime Anywhere",
    },
    {
      img: calender,
      title: "Unforgettable Time",
      text: "We Make You Perfect Event",
    },
  ];
  return (
    <Box marginTop="20px">
      <Heading
        color="#FFFFFF"
        fontSize="45px"
        fontWeight="700"
        textAlign="center"
        className="globalheading"
      >
        Product <chakra.span color="#02F6AD">Features</chakra.span>
      </Heading>
      <Box
        marginTop="70px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        borderCollapse="collapse"
      >
        {features.map((item, index) => {
          return (
           <Box  key={index} className="tablehero">
            <Box className="teamhero">
<Box display="flex" justifyContent="center" flexDir="column" alignItems="center" textAlign="center">
<Image src={item.img} width="65px" />               
<Heading
                  marginTop="50px"
                  color="#FFFFFF"
                  fontSize="25px"
                  fontWeight="700"
                >
                  {item.title}
                </Heading>
                <Text
                  marginTop="15px"
                  color="#FFFFFF"
                  fontSize="15px"
                  fontWeight="400"
                >
                  {item.text}
                </Text>
               </Box>
              </Box>
           </Box>
          );
        })}
      </Box>

      <Box></Box>
    </Box>
  );
}
