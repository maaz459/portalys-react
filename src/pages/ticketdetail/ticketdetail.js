import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    chakra,
    Heading,
    HStack,
    Image,
    Link,
    Text
} from "@chakra-ui/react";
import React from "react";
import Layout from "../../modules/layout/layout";
import arrow from "../../static/assets/images/arrow.svg";
import greenarrow from "../../static/assets/images/greenarrow.svg";
import refresh from "../../static/assets/images/refresh.svg";
import "../../styles/ticketdetail/ticketdetail.css";
import Preserve from "./preserve";
import TicketHolder from "./ticketholder";

export default function TicketsDetail() {
  return (
    <Layout>
      <Box padding="0px 70px" background="black">
        <Box paddingTop="20px">
          <HStack>
            <Link>
              <chakra.span marginRight="10px">
                <chakra.span
                  marginRight="10px"
                  color="#828282"
                  fontWeight="500"
                  fontSize="13px"
                >
                  My Ticket
                </chakra.span>
                <ChevronRightIcon color="#828282" />
              </chakra.span>
            </Link>
            <Link>
              {" "}
              <chakra.span color="#828282" fontWeight="500" fontSize="13px">
                Go Back
              </chakra.span>
            </Link>
          </HStack>

          <HStack marginTop="25px" textAlign="left">
            <Link>
              <chakra.span marginRight="10px">
                <ChevronLeftIcon />
              </chakra.span>
              <chakra.span color="#FFFFFF" fontWeight="500" fontSize="14px">
                Go Back
              </chakra.span>
            </Link>
          </HStack>
        </Box>
        <Heading
          textAlign="center"
          color="#FFFFFF"
          fontWeight="900"
          fontSize="35px"
          paddingBottom="25px"
        >
          Ticket Details
        </Heading>
        <Box display="flex" gap="60px" paddingBottom="60px">
          <Box width="60%" paddingTop="60px">
            <Preserve />
          </Box>
          <Box width="40%">
            <Box display="flex" gap="20px" justifyContent="space-between">
              <Button
                width="140px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="4px"
                background="#F0F0F0"
                border="1px solid #02F6AD"
                borderRadius="43px"
                fontSize="14px"
                color="#000000"
                fontWeight="700"
                className="transferbutton"
              >
                <Image width="20px" src={arrow} />
                <Text>send</Text>
              </Button>
              <Button
                width="140px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="4px"
                background="transparent"
                border="1px solid #02F6AD"
                borderRadius="43px"
                fontSize="14px"
                color="#02F6AD"
                fontWeight="700"
                className="transferbutton"
              >
                <Image
                  width="20px"
                  fill="#02F6AD"
                  color="#02F6AD"
                  src={greenarrow}
                />
                <Text>Transfer</Text>
              </Button>
              <Button
                width="140px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="4px"
                background="#02F6AD"
                border="1px solid #02F6AD"
                borderRadius="43px"
                fontSize="14px"
                color="#000000"
                fontWeight="700"
                className="transferbutton"
              >
                <Image width="20px" src={refresh} />
                <Text>Resell</Text>
              </Button>
            </Box>

            <Box paddingTop="25px">
              <TicketHolder />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
