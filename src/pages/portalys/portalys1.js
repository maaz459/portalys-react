import { Box, chakra, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../modules/layout/layout";
import { bgimg, game as bet } from "../../static/assets/images";
import arrowd from "../../static/assets/images/arrd.svg";
import cartoon from "../../static/assets/images/cartoon.svg";
import flag from "../../static/assets/images/flag.svg";
import goal from "../../static/assets/images/goal.svg";
import keeper from "../../static/assets/images/keeper.svg";
import lock from "../../static/assets/images/lock.svg";
import srch from "../../static/assets/images/srch.svg";
import "../../styles/portalys/portalys.css";
import { getAllEvents } from "../../utils/actions/event";
import AllTeam from "./allteam";
export default function Portalys1() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    const init = async () => {
      try {
        const val = await getAllEvents();
        if (!isEmpty(val)) {
          const newEvents = [];
          Object.values(val).forEach((et) => {
            newEvents.push({ ...et });
          });
          setEvents(newEvents);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  return (
    <Layout>
      <Box>
        <Box className="soccerhero">
          <Box w="100%" position="relative">
            <Image w="100%" src={bgimg} />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px="50px"
              position="relative"
              top="-7rem"
              className="ticketshero"
            >
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
                    <chakra.span color="#00000" fontSize="14px" fontWeight="700">
                      Popular MLS Games in |
                    </chakra.span>
                    <Image src={flag} width="10px" height="14px" />
                    <Text display="flex" alignItems="center" gap="8px">
                      <chakra.span color="#00000" fontSize="14px" fontWeight="700">
                        France
                      </chakra.span>
                      <Image src={arrowd} width="13px" height="6px" />
                    </Text>
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Box>
          <Box
            gap="20px"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            marginTop="-20px"
            className="soccercardshero"
          >
            {events?.map((item, index) => {
              return (
                <Box
                  cursor="pointer"
                  onClick={() => navigate("/newevents/" + item?.uuid)}
                  key={index}
                  className="soccercards"
                  marginTop="20px"
                >
                  <Image src={item?.eventImage} />
                  <VStack padding="0px 20px" display="block">
                    <Heading marginTop="20px" color="#FBFAFB" fontWeight="700" fontSize="18px">
                      {item?.eventName}
                    </Heading>
                    <HStack fontSize={{ base: 14, md: 16, "3xl": 16 }} w="100%" pt={16} className="gordita400">
                      <Text>{item?.startDate}</Text>
                      <Text> | </Text>
                      <Text>{item?.startTime}</Text>
                    </HStack>
                    <Box marginTop="10px" display="flex" alignItems="center" gap="15px">
                      <Image height="30px" width="30px" src={cartoon} />
                      <Text color="#FBFAFB" fontSize="18px">
                        Organizer
                      </Text>
                    </Box>
                    <HStack w="100%" alignContent="flex-start" pt={16}>
                      {["Industry", "Techno", "Bass"].map((cat, index) => (
                        <Box
                          borderRadius="25px"
                          border="1px"
                          py="5px"
                          px="15px"
                          key={cat + index}
                          fontSize={{ base: 12, sm: 13, "3xl": 14 }}
                        >
                          {cat}
                        </Box>
                      ))}
                    </HStack>
                  </VStack>
                </Box>
              );
            })}
          </Box>
          <Box padding="40px" display="flex" justifyContent="center" marginTop="60px">
            <Image width="56px" src={lock} cursor="pointer" />
          </Box>
          <Box>
            <AllTeam />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
