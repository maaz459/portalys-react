import React from "react";
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
  VStack,
} from "@chakra-ui/react";
import "../../styles/collaborate/collaborate.css";

export default function GlobalPoints() {
  const data = [
    {
      count: "4,000+",
      title: "Global customers",
      para: "We’ve helped over 4,000 amazing global companies.",
    },
    {
        count: "10k",
        title: "Global downloads",
        para: "Our app has been downloaded over 10k times.",
      },
      {
        count: "200+",
        title: "5-star reviews",
        para: "We’re proud of our 5-star rating with over 200 reviews.",
      },
      {
        count: "600%",
        title: "Return on investment",
        para: "Our customers have reported an average of ~600% ROI.",
      },
  ];
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around" gap="30px">
      {data.map((item, index) => {
        return (
          <Box key={index} textAlign="center" maxWidth="280px">
            <Heading color="#02F6AD" fontWeight="600" fontSize="45px">{item.count}</Heading>
            <Text color="#FFFFFF" fontWeight="500" fontSize="18px" marginTop="10px">{item.title}</Text>
            <chakra.span color="#EBEBEB" fontWeight="400" fontSize="14px" marginTop="7px">{item.para}</chakra.span>
          </Box>
        );
      })}
    </Box>
  );
}
