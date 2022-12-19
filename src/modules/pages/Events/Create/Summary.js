import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  chakra,
  Stack,
  Icon,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  resource,
  location,
  track2,
  track1,
  trailer,
  lineup,
  artist,
} from "../../../../static/assets/images/dashboard/sidebar";
import { map } from "../../../../static/assets/images";

import { AiFillHeart } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import MapComponent from "../../../shared/map";

const Summary = (props) => {
  const { handleBlur, handleChange, values } = props;

  return (
    <VStack alignItems="flex-start" w="100%">
      <Text className="gordita700" color="primary.100" fontSize={18}>
        Event Details
      </Text>
      <Stack flexDir="row">
        <Image src={resource} />
        <VStack spacing={56} px={36} alignItems="flex-start" color="white.100">
          <Box>
            <Text className="gordita600" fontSize={38}>
              The Preserve Waitlist
            </Text>
            <Text className="gordita600" fontSize={14} color="primary.100">
              Sat 5 nov | 10:00pm{" "}
            </Text>
            <HStack>
              <Image alt="" src={location} />
              <Text className="gordita600" fontSize={14}>
                Kia Forum, Inglewood, CA{" "}
              </Text>
            </HStack>
          </Box>
          <HStack borderRadius="10px" p={4} bg="black.400">
            <Text p={16} className="gordita600" fontSize={20}>
              Price
            </Text>
            <Divider h="100%" bg="#464646" orientation="vertical" />
            <VStack pl={24} w="100%" className="gordita600">
              <Box fontSize={13}>
                <chakra.span fontSize={16} opacity={0.7}>
                  Early Bird:
                </chakra.span>
                <chakra.span fontSize={16}> $ 5.80 </chakra.span>
                <chakra.span opacity={0.7}>
                  {" "}
                  (12 may 2022 Closed date)
                </chakra.span>
              </Box>
              <HStack w="100%" justifyContent="space-between">
                <Box fontSize={13}>
                  <chakra.span fontSize={16} opacity={0.7}>
                    Regular
                  </chakra.span>
                  <chakra.span fontSize={16}> $ 7.80 </chakra.span>
                </Box>
                <Box fontSize={13}>
                  <chakra.span fontSize={16} opacity={0.7}>
                    lATE
                  </chakra.span>
                  <chakra.span fontSize={16}> $ 10.80 </chakra.span>
                </Box>
              </HStack>
            </VStack>
          </HStack>
          <Box className="gordita600" fontSize={20} color="white.100">
            <chakra.span mr={24} color="#FBFAFB" opacity={0.7}>
              Total ticket:
            </chakra.span>
            4000
          </Box>
        </VStack>
      </Stack>
      <VStack pt={56} alignItems="flex-start" color="white.100">
        <Text className="gordita700" fontSize={18}>
          Description{" "}
        </Text>{" "}
        <Text className="gordita400" fontSize={18}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, orem Ipsum is simply dummy text of the printing and
          typesetting indust. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been delivered. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been delivered.
        </Text>
      </VStack>
      <Text pt={56} className="gordita700" fontSize={18}>
        Best Tracks
      </Text>
      <HStack spacing={12} pt={14}>
        <VStack>
          <Image alt="" src={track2} />
          <Text className="gordita700" fontSize={16}>
            Marco Shuttle{" "}
          </Text>{" "}
          <Text className="gordita400" fontSize={14}>
            Tombak Healer{" "}
          </Text>
        </VStack>
        <VStack>
          <Image alt="" src={track1} />
          <Text className="gordita700" fontSize={16}>
            Marco Shuttle{" "}
          </Text>{" "}
          <Text className="gordita400" fontSize={14}>
            Con Sequenza{" "}
          </Text>
        </VStack>
        <VStack>
          <Image alt="" src={track2} />
          <Text className="gordita700" fontSize={16}>
            Marco Shuttle{" "}
          </Text>{" "}
          <Text className="gordita400" fontSize={14}>
            Tombak Healer{" "}
          </Text>
        </VStack>
        <VStack>
          <Image alt="" src={track1} />
          <Text className="gordita700" fontSize={16}>
            Marco Shuttle{" "}
          </Text>{" "}
          <Text className="gordita400" fontSize={14}>
            Con Sequenza{" "}
          </Text>
        </VStack>
      </HStack>
      <Text pt={56} className="gordita700" fontSize={18}>
        Trailer{" "}
      </Text>
      <Image w="100%" h="376px" src={trailer} />
      <Text pt={56} className="gordita700" fontSize={18}>
        Line Up{" "}
      </Text>
      <HStack spacing={12} pt={14}>
        <Image alt="" src={lineup} />
        <Image alt="" src={lineup} />
        <Image alt="" src={lineup} />
      </HStack>
      <Text pt={56} className="gordita700" fontSize={18}>
        Artist{" "}
      </Text>
      <Stack
        gap={71}
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <HStack flex={1} w="100%">
          <Image src={artist} />
          <VStack alignItems="flex-start" w="100%" className="gordita600" p={8}>
            <Box fontSize={18} className="gordita700">
              Omar Torff
            </Box>
            <HStack
              spacing={24}
              alignItems="center"
              className="gordita400"
              w="100%"
            >
              <Box display="flex" gap={10}>
                <Icon as={AiFillHeart} color="red" />
                <Text fontSize={14}>2.6k Likes</Text>
              </Box>
              <Box display="flex" gap={10}>
                <Icon as={BsHandThumbsUp} color="primary.100" />
                <Text fontSize={14}>155k Followers</Text>
              </Box>
              <Box>
                <Button
                  className="gordita600"
                  bg="white.100"
                  borderRadius="19px"
                  color="black.100"
                >
                  Follow
                </Button>
              </Box>
            </HStack>
          </VStack>
        </HStack>
        <HStack flex={1} w="100%">
          <Image src={artist} />
          <VStack alignItems="flex-start" w="100%" className="gordita600" p={8}>
            <Box fontSize={18} className="gordita700">
              Omar Torff
            </Box>
            <HStack
              spacing={24}
              alignItems="center"
              className="gordita400"
              w="100%"
            >
              <Box display="flex" gap={10}>
                <Icon as={AiFillHeart} color="red" />
                <Text fontSize={14}>2.6k Likes</Text>
              </Box>
              <Box display="flex" gap={10}>
                <Icon as={BsHandThumbsUp} color="primary.100" />
                <Text fontSize={14}>155k Followers</Text>
              </Box>
              <Button
                className="gordita600"
                bg="white.100"
                borderRadius="19px"
                color="black.100"
              >
                Follow
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Stack>
      <Text pt={56} className="gordita700" fontSize={18}>
        Location
      </Text>
      <Image src={map} w="100%" h="387px" />{" "}
    </VStack>
  );
};

export default Summary;
