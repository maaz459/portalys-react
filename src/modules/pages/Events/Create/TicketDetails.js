import { HStack, Text, VStack } from "@chakra-ui/react";
import {
  DateBox,
  InputBox,
  SelectBox,
  SwitchBox,
  TextBox,
} from "./SharedModules";
const TicktDetails = ({ handleBlur, handleChange, values }) => {
  return (
    <VStack spacing={56} w="100%">
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter your name"
          label="Ticket Name"
          name="ticketName"
          maxW="45%"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter quantity"
          label="Ticket Quantity"
          maxW="45%"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter your name"
          label="Ticket Type"
          maxW="45%"
        />
      </HStack>
      <Text className="gordita700" fontSize={18} textAlign="left" w="100%">
        Ticket Price
      </Text>
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Early Bird"
          maxW="45%"
        />
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Early Bird Ending Date"
          label="Early Bird Ending Date"
          maxW="45%"
        />
      </HStack>
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Regular"
          maxW="45%"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Late (Optional)"
          maxW="45%"
        />
      </HStack>
      <VStack spacing={20} w="100%" alignItems="flex-start">
        <SwitchBox maxW="25%" label="Assign collectible to ticket" />
        <SwitchBox maxW="25%" label="Allow transfers of this ticket" />
        <SwitchBox maxW="25%" label="Allow resale of this ticket" />
      </VStack>
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter max resale"
          label="Maximum Resale"
          maxW="45%"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter max resale"
          label="Maximum Resale"
          maxW="45%"
        />
      </HStack>
    </VStack>
  );
};

export default TicktDetails;
