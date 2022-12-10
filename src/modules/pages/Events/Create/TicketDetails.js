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
    <VStack w="100%">
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter your name"
          label="Ticket Name"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter quantity"
          label="Ticket Quantity"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter your name"
          label="Ticket Type"
        />
      </HStack>
      <Text className="gordita700" fontSize={18} textAlign="left" w="100%">
        Ticket Price
      </Text>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Early Bird"
        />
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder=""
          label="Early Bird Ending Date"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Regular"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Late (Optional)"
        />
      </HStack>
      <VStack w="100%" alignItems="flex-start">
        <SwitchBox label="Assign collectible to ticket" />
        <SwitchBox label="Allow transfers of this ticket" />
        <SwitchBox label="Allow resale of this ticket" />
      </VStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter max resale"
          label="Maximum Resale"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter max resale"
          label="Maximum Resale"
        />
      </HStack>
    </VStack>
  );
};

export default TicktDetails;
