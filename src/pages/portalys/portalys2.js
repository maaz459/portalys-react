import { React, useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Image,
  Progress as LinearProgress,
  Heading,
  chakra,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import "../../styles/portalys/portalys.css";
import location from "../../static/assets/images/location.svg";
import bgimg from "../../static/assets/images/bg2.png";
import track2 from "../../static/assets/images/2trk.svg";
import men from "../../static/assets/images/men.svg";
import { map, ltrk as track } from "../../static/assets/images";
import loc from "../../static/assets/images/loc.svg";
import infra from "../../static/assets/images/infra.svg";
import thumb from "../../static/assets/images/thumb.svg";
import hrt from "../../static/assets/images/hrt.svg";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../modules/layout/layout";
import { getEventsByUUID } from "../../utils/actions/event";
import { isEmpty } from "lodash";
import moment from "moment";
export default function Portalys2() {
  const tracks = [
    {
      img: track,
      title: "Marco Shuttle",
      para: "Tombak Healer",
    },
    {
      img: track2,
      title: "Marco Shuttle",
      para: "Tombak Healer",
    },
    {
      img: track,
      title: "Marco Shuttle",
      para: "Tombak Healer",
    },
    {
      img: track2,
      title: "Marco Shuttle",
      para: "Tombak Healer",
    },
  ];
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [event, setEvent] = useState();

  useEffect(() => {
    const init = async () => {
      if (id) {
        try {
          const val = await getEventsByUUID(id);
          if (!isEmpty(val)) {
            setEvent(val);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    init();
  }, [id]);
  return (
    <Layout>
      <Box className="soccerhero">
        <Box w="100%">
          <Image w="100%" src={bgimg} />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="40px"
            position="relative"
            top="-9rem"
            className="preservehero"
          >
            <VStack display="flex" justify="left" alignItems="baseline">
              <Heading color="#FBFAFB" fontWeight="700" fontSize="36px" className="preserveheading">
                {event?.eventName}
              </Heading>
              {event?.startTime && event?.startDate && (
                <Text mt={13} className="gordita600" fontSize={22} color="primary.100">
                  {moment(event.startDate).format("ddd D MMM")} | {moment(event.startTime, "h:mm a").format("h:mm A")}
                </Text>
              )}
              <Box display="flex" alignItems="center" gap="10px">
                <Image src={location} />
                <Text color="#FFFFFF" fontSize="15px" fontWeight="700">
                  {event?.location}{" "}
                </Text>
              </Box>
            </VStack>
            <HStack></HStack>
          </Box>
        </Box>
        {/* // */}
        <Box display="flex" alignItems="center" justifyContent="space-between" gap="50px" className="birdcard">
          <Box w="60%" className="birdhero">
            <Box display="flex" alignItems="center" justifyContent="space-between" width="50%">
              <Text color="#FFFFFF" fontSize="25px">
                Tickets
              </Text>
              <Box display="flex" alignItems="center" gap="7px">
                <chakra.span fontSize="25px" color="#02F6AD">
                  0
                </chakra.span>
                <chakra.span color="#FFFFFF" fontSize="14px">
                  Sold
                </chakra.span>
              </Box>
              <chakra.span color="#02F6AD" mx="10px">
                |
              </chakra.span>
              <Box display="flex" alignItems="center" gap="7px">
                <chakra.span fontSize="25px" color="#02F6AD">
                  {event?.supply}
                </chakra.span>
                <chakra.span color="#FFFFFF" fontSize="14px">
                  Available
                </chakra.span>
              </Box>
            </Box>
          </Box>
          <Box Box w="40%">
            <Text color="#FFFFFF" fontSize="25px" className="checkheader">
              Checkout
            </Text>
          </Box>
        </Box>
        <Box display="flex" paddingTop="30px" gap="50px" className="regularcards">
          <Box display="block" width="60%" alignItems="center" justifyContent="space-between" className="darkcard">
            <VStack
              padding="20px"
              display="grid"
              backgroundColor="#1A1A1A"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
              borderRadius="10px"
            >
              <chakra.span color="#FFFFFF" fontSize="15px">
                Early Bird
              </chakra.span>
              <chakra.span color="#02F6AD" fontSize="15px">
                $ {event?.earlyBird}
              </chakra.span>
            </VStack>
            <VStack
              padding="20px"
              marginTop="20px"
              display="grid"
              backgroundColor="#1A1A1A"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
              borderRadius="10px"
            >
              <chakra.span color="#FFFFFF" fontSize="15px">
                Regular
              </chakra.span>
              <chakra.span color="#02F6AD" fontSize="15px">
                $ {event?.regular}
              </chakra.span>
            </VStack>
            <VStack
              padding="20px"
              marginTop="20px"
              display="grid"
              backgroundColor="#1A1A1A"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
              borderRadius="10px"
            >
              <chakra.span color="#FFFFFF" fontSize="15px">
                Late
              </chakra.span>
              <chakra.span color="#02F6AD" fontSize="15px">
                $ 1{event?.late}
              </chakra.span>
            </VStack>
          </Box>
          <Box width="40%" className="darkcard">
            <Text color="#FFFFFF" fontSize="25px" className="checkheadershow">
              Checkout
            </Text>
            <HStack
              display="flex"
              backgroundColor="#1A1A1A"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25"
              borderRadius="10px"
              justifyContent="space-between"
            >
              <VStack padding="10px 20px" display="grid">
                <chakra.span color="#FFFFFF" fontSize="15px">
                  Late
                </chakra.span>
                <chakra.span color="#02F6AD" fontSize="15px">
                  $ 1{event?.late}
                </chakra.span>
              </VStack>
              <HStack padding="10px 20px" display="flex" gap="20px" alignItems="center">
                <chakra.span
                  backgroundColor="#02F6AD"
                  padding="10px"
                  height="25px"
                  width="25px"
                  borderRadius="50px"
                  display="flex"
                  justifyItems="center"
                  alignItems="center"
                >
                  -
                </chakra.span>
                <chakra.span color="#02F6AD" fontSize="20" padding="7px">
                  1
                </chakra.span>
                <chakra.span
                  backgroundColor="#02F6AD"
                  padding="7px"
                  height="25px"
                  width="25px"
                  borderRadius="50px"
                  display="flex"
                  alignItems="center"
                  justifyItems="center"
                >
                  +
                </chakra.span>
              </HStack>
            </HStack>
          </Box>
        </Box>
        {/* // */}
        <Box gap="50px" display="flex" className="regularcards">
          <Box w="60%" className="darkcard">
            <Box w="100%" marginTop="80px">
              <hr />
            </Box>
            <Box>
              <Heading as="h4" size="md" marginTop="50px" color="#FFFFFF" fontSize="25px">
                Description
              </Heading>
              <Text color="#FFFFFF" fontSize="15px" marginTop="25px">
                {event?.description}
              </Text>
              {/* <chakra.sapn color="#02F6AD" fontSize="15px">
                {" "}
                Read more
              </chakra.sapn> */}
            </Box>
          </Box>
          <Box w="40%" className="darkcard">
            <Box w="100%" marginTop="-30px">
              <chakra.span fontSize="12px" color="#9A9A9A">
                Have a promo code ?
              </chakra.span>
              <input type="" placeholder="Add Promo Code here" borderRadius="30px" className="promoinput" />
              <HStack display="flex" justifyContent="space-between" marginTop="12px">
                <Text color="#FFFFFF" fontSize="15px">
                  Services Fees
                </Text>
                <Text color="#FFFFFF" fontSize="15px">
                  $ 5.80
                </Text>
              </HStack>
              <HStack display="flex" justifyContent="space-between" marginTop="10px">
                <Text color="#FFFFFF" fontWeight="700" fontSize="22px">
                  Total
                </Text>
                <Text fontSize="22px" color="#02F6AD" fontWeight="700">
                  $ 14.80
                </Text>
              </HStack>
              <HStack display="flex" justifyContent="space-between" marginTop="30px" className="intrestedbtnhero">
                <Button
                  className="intrestedbtn"
                  fontWeight="700"
                  padding="10px 35px"
                  textAlign="center"
                  fontSize="15px"
                  color="black"
                  bg="#ffff"
                  borderRadius="40px"
                  outline="none"
                >
                  INTERESTED
                </Button>
                <Button
                  className="intrestedbtn"
                  fontWeight="700"
                  padding="10px 35px"
                  textAlign="center"
                  fontSize="15px"
                  color="black"
                  bg="#ffff"
                  borderRadius="40px"
                  outline="none"
                  onClick={() => navigate("/booking/seat")}
                >
                  NOW FROM 18$
                </Button>
              </HStack>
            </Box>
          </Box>
        </Box>
        {/* / */}
        <Box>
          <Box mt={56} width="60%" className="darkcard1">
            <Heading as="h4" size="md" color="#FFFFFF" fontSize="25px">
              Best tracks
            </Heading>
            <HStack>
              <HStack gap="8px" marginTop="25px" className="trackcards">
                {event?.track?.map((item, id) => {
                  return (
                    <Box key={id} textAlign="center" className="trackcardshero">
                      <Image maxW="180px" maxH="220px" src={item?.image} />
                      <Text color="#FFFFFF" fontSize="15px" marginTop="12px">
                        {item?.trackName}
                      </Text>

                      <chakra.span color="#FFFFFF" fontSize="13px" marginTop="6px">
                        {item?.artistName}
                      </chakra.span>
                    </Box>
                  );
                })}
              </HStack>
            </HStack>
          </Box>
          <Box width="40%"></Box>
        </Box>
        {/*  */}
        <Box marginTop="100px">
          <Box w="60%" className="darkcard">
            <Heading as="h4" size="md" color="#FFFFFF" fontSize="25px">
              Trailer
            </Heading>
            <Box
              as="iframe"
              src={event?.trailer}
              width="100%"
              allow="autoplay"
              sx={{
                aspectRatio: "16/9",
              }}
              marginTop="25px"
            />
          </Box>
          <Box w="40%"></Box>
        </Box>
        {/* /// */}
        <Box marginTop="100px">
          <Box w="60%" className="darkcard">
            <Heading as="h4" size="md" color="#FFFFFF" fontSize="25px">
              Line up
            </Heading>
            <Flex gap="2%">
              {!isEmpty(event?.lineup) &&
                event?.lineup?.map((item, index) => <Image marginTop="25px" width="200px" src={item?.image} />)}
            </Flex>
          </Box>
          <Box w="40%"></Box>
        </Box>
        {/* // */}
        <Box marginTop="100px">
          <Box w="60%" className="darkcard">
            <Heading as="h4" size="md" color="#FFFFFF" fontSize="25px">
              Location
            </Heading>
            <Box marginTop="25px" display="flex" justifyContent="space-between" alignItems="center">
              <HStack gap="15px">
                <Image src={loc} width="16px" />
                <Text fontSize="15px" fontWeight="700" color="#ffff">
                  {event?.location}{" "}
                </Text>
              </HStack>
              <Text fontSize="13px" fontWeight="400" color="#ffff">
                Public
              </Text>
            </Box>
            <Image marginTop="25px" width="100%" src={map} />
            <Box w="100%" marginTop="40px">
              <hr />
            </Box>
          </Box>
          <Box w="40%"></Box>
        </Box>
        {/* // */}
        <Box marginTop="90px" paddingBottom="70px">
          <Box w="60%" className="darkcard">
            <Heading as="h4" size="md" color="#FFFFFF" fontSize="25px">
              Organized by
            </Heading>
            <HStack marginTop="35px" display="flex" justifyContent="space-between" className="organizedcard">
              <Image width="120px" src={infra} />
              <Text color="#02F6AD" fontSize="25px" fontWeight="700">
                infra
              </Text>
              <Box display="flex" alignItems="center" gap="7px">
                <Image width="15px" src={hrt} />
                <chakra.span color="#F2F2F2" fontSize="14px" fontWeight="400">
                  2,6k Likes
                </chakra.span>
              </Box>
              <Box display="flex" alignItems="center" gap="7px">
                <Image width="15px" src={thumb} />
                <chakra.span color="#F2F2F2" fontSize="14px" fontWeight="400">
                  2,6k Likes
                </chakra.span>
              </Box>
              <Button fontSize="15px" color="#00000" borderRadius="30px" bg="#FFFF" outline="none" padding="4px 25px">
                Follow
              </Button>
            </HStack>
          </Box>
          <Box w="40%"></Box>
        </Box>
      </Box>
    </Layout>
  );
}
