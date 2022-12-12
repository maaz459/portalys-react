import { Box, Button, HStack, Text, VStack, Image } from "@chakra-ui/react";
import {
  DateBox,
  InputBox,
  SelectBox,
  SwitchBox,
  TextBox,
} from "./SharedModules";
import {
  upload,
  lineup1,
  lineup2,
  lineup3,
  lineup4,
} from "../../../../static/assets/images/dashboard/sidebar";
const ArtistLineup = ({ handleBlur, handleChange, values }) => {
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
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Enter track name"
            label="Track Name"
            maxW="35%"
          />
          <InputBox
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Enter artist Name"
            label="Artist Name"
            maxW="35%"
          />
          <Image alt="" src={upload} />
          <Box maxW="10%" w="100%">
            <Button
              w="100%"
              h="56px"
              color="primary.100"
              bg="transparent"
              border="1px solid"
              borderColor="primary"
            >
              Add
            </Button>
          </Box>
        </HStack>
        <HStack spacing={24} pt={24} w="100%" alignItems="flex-start">
          <Box p={16} borderRadius="8px" bg="#141414" maxW="151px">
            <Image alt="" src={lineup1} />
          </Box>
          <Box p={16} borderRadius="8px" bg="#141414" maxW="151px">
            <Image alt="" src={lineup1} />
          </Box>
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
            handleChange={handleChange}
            placeholder="Enter track name"
            label="Track Name"
            maxW="35%"
          />
          <InputBox
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            placeholder="Enter artist Name"
            label="Artist Name"
            maxW="35%"
          />
          <Image h='56px' alt="" src={upload} />
          <Box maxW="10%" w="100%">
            <Button
              w="100%"
              h="56px"
              color="primary.100"
              bg="transparent"
              border="1px solid"
              borderColor="primary"
            >
              Add
            </Button>
          </Box>
        </HStack>
        <HStack spacing={24} pt={24} w="100%" alignItems="flex-start">
          <Box p={16} borderRadius="8px" bg="#141414" maxW="151px">
            <Image alt="" src={lineup3} />
          </Box>
          <Box p={16} borderRadius="8px" bg="#141414" maxW="151px">
            <Image alt="" src={lineup4} />
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ArtistLineup;
