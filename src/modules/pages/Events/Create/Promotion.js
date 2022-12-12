import { Box, HStack, Text, VStack, Image, chakra } from "@chakra-ui/react";
import {
  exportSvg,
  upload2,
} from "../../../../static/assets/images/dashboard/sidebar";
import { DateBox, InputBox, SelectBox, TextBox } from "./SharedModules";
const Promotion = ({ handleBlur, handleChange, values }) => {
  return (
    <VStack alignItems="flex-start" w="100%">
      <Text className="gordita700" fontSize={18}>
        Trailer
      </Text>
      <Box w="100%" h="212px" bg="#141414" borderRadius="8px" p="20px">
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          borderRadius="8px"
          border="1px dotted"
        >
          <Image alt="" src={upload2} />
        </Box>
      </Box>

      <Text pt={56} className="gordita700" fontSize={18}>
        Cover Picture
      </Text>
      <Box w="100%" h="212px" bg="#141414" borderRadius="8px" p="20px">
        <Box
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          borderRadius="8px"
          border="1px dotted"
        >
          <Image alt="" src={upload2} />
        </Box>
      </Box>
      <HStack spacing={56} w="100%">
        <Box w="45%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Image
          </Text>
          <Box
            minH="273px"
            w="100%"
            h="212px"
            bg="#141414"
            borderRadius="8px"
            p="20px"
          >
            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
            >
              <VStack color="#B6B6B6">
                <Image alt="" src={exportSvg} />
                <Box className="gordita600" fontSize={17}>
                  Drop your files here or
                  <chakra.span color="#615EED"> Browse</chakra.span>
                </Box>
                <Box className="gordita600" fontSize={14}>
                  Max.file size is 25 MB
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
        <Box w="45%">
          <Text pt={56} className="gordita700" fontSize={18}>
            Preview
          </Text>
          <Box
            minH="273px"
            w="100%"
            h="212px"
            bg="#141414"
            borderRadius="8px"
            p="20px"
          >
            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="100%"
              borderRadius="8px"
            ></Box>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Promotion;
