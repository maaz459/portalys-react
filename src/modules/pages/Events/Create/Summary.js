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
import moment from "moment";
import { isEmpty } from "lodash";

const Summary = (props) => {
  const { handleBlur, handleChange, values } = props;
  return (
    <VStack alignItems="flex-start" w="100%">
      <Text className="gordita700" color="primary.100" fontSize={18}>
        Event Details
      </Text>
      <Stack flexDir="row">
        <Box maxW="40%">
          <Image src={values?.eventImage?.imageToDisplay} />
        </Box>
        <VStack spacing={56} px={36} alignItems="flex-start" color="white.100">
          <Box>
            <Text className="gordita600" fontSize={38}>
              {values?.eventName}
            </Text>
            {values?.startTime && values?.startDate && (
              <Text className="gordita600" fontSize={14} color="primary.100">
                {moment(values.startDate).format("dddd D MMM")} |{" "}
                {moment(values.startTime, "h:mm a").format("h:mm A")}
              </Text>
            )}
            {values?.location && (
              <HStack>
                <Image alt="" src={location} />
                <Text className="gordita600" fontSize={14}>
                  {values?.location}
                </Text>
              </HStack>
            )}
          </Box>
          {values?.earlyBird && (
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
                  <chakra.span fontSize={16}>
                    {" "}
                    $ {values?.earlyBird}{" "}
                  </chakra.span>
                  <chakra.span opacity={0.7}>
                    {" "}
                    (
                    {moment(values?.earlyBirdEndingDate).format("d MMM YYYY") +
                      " Closed date"}
                    )
                  </chakra.span>
                </Box>
                <HStack w="100%" justifyContent="space-between">
                  <Box fontSize={13}>
                    <chakra.span fontSize={16} opacity={0.7}>
                      Regular
                    </chakra.span>
                    <chakra.span fontSize={16}>
                      {" "}
                      $ {values?.regular}{" "}
                    </chakra.span>
                  </Box>
                  <Box fontSize={13}>
                    <chakra.span fontSize={16} opacity={0.7}>
                      Late
                    </chakra.span>
                    <chakra.span fontSize={16}> $ {values?.late} </chakra.span>
                  </Box>
                </HStack>
              </VStack>
            </HStack>
          )}
          {values?.ticketQuantity && (
            <Box className="gordita600" fontSize={20} color="white.100">
              <chakra.span mr={24} color="#FBFAFB" opacity={0.7}>
                Total ticket:
              </chakra.span>
              {values?.ticketQuantity}
            </Box>
          )}
        </VStack>
      </Stack>
      {values?.description && (
        <VStack pt={56} alignItems="flex-start" color="white.100">
          <Text className="gordita700" fontSize={18}>
            Description{" "}
          </Text>{" "}
          <Text className="gordita400" fontSize={18}>
            {values?.description}
          </Text>
        </VStack>
      )}
      {!isEmpty(values.track) && (
        <Box>
          <Text pt={56} className="gordita700" fontSize={18}>
            Best Tracks
          </Text>
          <HStack spacing={12} pt={14}>
            {!isEmpty(values.track) &&
              Object.values(values.track).map(
                ({ id, imageToDisplay, trackName, artistName }, index) => (
                  <VStack key={index}>
                    <Image
                      maxW="150px"
                      maxH="171px"
                      h="100%"
                      w="100%"
                      alt=""
                      src={imageToDisplay}
                    />
                    <Text className="gordita700" fontSize={16}>
                      {trackName}
                    </Text>{" "}
                    <Text className="gordita400" fontSize={14}>
                      {artistName}
                    </Text>
                  </VStack>
                )
              )}
          </HStack>
        </Box>
      )}
      {values?.trailer && (
        <Box w="100%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Trailer{" "}
          </Text>
          <Box
            as="video"
            // controls
            autoPlay
            src={values?.trailer?.videoToDisplay}
            alt="Big Buck Bunny"
            objectFit="cover"
            w="100%"
            maxH="376px"
          />
        </Box>
      )}
      {!isEmpty(values.lineup) && (
        <Box>
          <Text pt={56} className="gordita700" fontSize={18}>
            Line Up{" "}
          </Text>
          <HStack spacing={12} pt={14}>
            {!isEmpty(values.lineup) &&
              Object.values(values.lineup).map(
                ({ id, imageToDisplay, trackName, artistName }, index) => (
                  <Image
                    maxW="150px"
                    maxH="171px"
                    h="100%"
                    w="100%"
                    key={index}
                    alt=""
                    src={imageToDisplay}
                  />
                )
              )}
          </HStack>
        </Box>
      )}
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
      {values?.location && (
        <Box w="100%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Location
          </Text>
          <Image src={map} w="100%" h="387px" />{" "}
        </Box>
      )}
    </VStack>
  );
};

export default Summary;
