import { Box, Button, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { InputBox } from "./SharedModules";
import {
  upload,
  lineup1,
  lineup3,
  lineup4,
} from "../../../../static/assets/images/dashboard/sidebar";
import { useState } from "react";
import uuid from "react-uuid";
import isEmpty from "lodash/isEmpty";

const ArtistLineup = (props) => {
  const { handleBlur, handleChange, values, setFieldValue } = props;
  const initialTrack = {
    trackName: "",
    artistName: "",
    image: null,
    imageToDisplay: "",
  };
  const [track, setTrack] = useState(initialTrack);

  const [lineup, setLineUp] = useState(initialTrack);
  return (
    <VStack spacing={56} w="100%">
      <VStack w="100%">
        <Text className="gordita700" fontSize={18} textAlign="left" w="100%">
          Best Track
        </Text>
        <HStack
          alignItems="flex-end"
          spacing={30}
          flex={1}
          justifyContent="flex-start"
          w="100%"
        >
          <InputBox
            values={track}
            handleChange={(val) =>
              setTrack({
                ...track,
                trackName: val.target.value,
              })
            }
            placeholder="Enter track name"
            label="Track Name"
            maxW="35%"
            name="trackName"
          />
          <InputBox
            values={track}
            handleChange={(val) =>
              setTrack({
                ...track,
                artistName: val.target.value,
              })
            }
            placeholder="Enter artist Name"
            label="Artist Name"
            maxW="35%"
            name="artistName"
          />
          <input
            style={{ display: "none" }}
            id="trackImage"
            type="file"
            onChange={(e) => {
              setTrack({
                ...track,
                image: e.target.files[0],
                imageToDisplay: URL.createObjectURL(e.target.files[0]),
              });
            }}
          ></input>

          <label htmlFor="trackImage">
            <Image alt="" src={upload} />
          </label>

          <Box maxW="10%" w="100%">
            <Button
              w="100%"
              h="56px"
              color="primary.100"
              bg="transparent"
              border="1px solid"
              borderColor="primary"
              onClick={() => {
                const id = uuid();
                setFieldValue(`track.${id}`, { ...track, id });
                setTrack(initialTrack);
              }}
            >
              Add
            </Button>
          </Box>
        </HStack>
        <HStack
          flexWrap="wrap"
          spacing={24}
          pt={24}
          w="100%"
          alignItems="flex-start"
        >
          {!isEmpty(values.track) &&
            Object.values(values.track).map(
              ({ id, imageToDisplay, trackName, artistName }) => (
                <Box
                  w="100%"
                  key={id}
                  p={16}
                  borderRadius="8px"
                  bg="#141414"
                  maxW="185px"
                  h="100%"
                  flexDir="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    maxW="150px"
                    maxH="171px"
                    h="100%"
                    w="100%"
                    alt=""
                    src={imageToDisplay}
                  />
                  <Text className="gordita600" mt={2}>
                    {trackName}
                  </Text>
                  <Text className="gordita400" fontSize={12}>
                    {artistName}
                  </Text>
                </Box>
              )
            )}
        </HStack>
      </VStack>
      <VStack w="100%">
        <Text className="gordita700" fontSize={18} textAlign="left" w="100%">
          Line Up
        </Text>
        <HStack
          alignItems="flex-end"
          spacing={30}
          flex={1}
          justifyContent="flex-start"
          w="100%"
        >
          <InputBox
            values={values}
            handleBlur={handleBlur}
            placeholder="Enter track name"
            label="Track Name"
            maxW="35%"
            handleChange={(val) =>
              setLineUp({
                ...lineup,
                trackName: val.target.value,
              })
            }
          />
          <InputBox
            values={values}
            handleBlur={handleBlur}
            handleChange={(val) =>
              setLineUp({
                ...lineup,
                artistName: val.target.value,
              })
            }
            placeholder="Enter artist Name"
            label="Artist Name"
            maxW="35%"
          />
          <input
            style={{ display: "none" }}
            id="lineupImage"
            type="file"
            onChange={(e) => {
              setLineUp({
                ...lineup,
                image: e.target.files[0],
                imageToDisplay: URL.createObjectURL(e.target.files[0]),
              });
            }}
          ></input>

          <label htmlFor="lineupImage">
            <Image h="56px" alt="" src={upload} />
          </label>
          <Box maxW="10%" w="100%">
            <Button
              w="100%"
              h="56px"
              color="primary.100"
              bg="transparent"
              border="1px solid"
              borderColor="primary"
              onClick={() => {
                const id = uuid();
                setFieldValue(`lineup.${id}`, { ...lineup, id });
                setLineUp(initialTrack);
              }}
            >
              Add
            </Button>
          </Box>
        </HStack>
        <HStack spacing={24} pt={24} w="100%" alignItems="flex-start">
          {!isEmpty(values.lineup) &&
            Object.values(values.lineup).map(
              ({ id, imageToDisplay, trackName, artistName }) => (
                <Box
                  w="100%"
                  key={id}
                  p={16}
                  borderRadius="8px"
                  bg="#141414"
                  maxW="185px"
                  h="100%"
                  flexDir="column"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    maxW="150px"
                    maxH="171px"
                    h="100%"
                    w="100%"
                    alt=""
                    src={imageToDisplay}
                  />
                  <Text className="gordita600" mt={2}>
                    {trackName}
                  </Text>
                  <Text className="gordita400" fontSize={12}>
                    {artistName}
                  </Text>
                </Box>
              )
            )}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ArtistLineup;
