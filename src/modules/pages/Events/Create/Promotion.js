import { Box, HStack, Text, VStack, Image } from "@chakra-ui/react";
import { upload2 } from "../../../../static/assets/images/dashboard/sidebar";
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
    </VStack>
  );
};

export default Promotion;
