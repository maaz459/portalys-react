import { HStack, Text, VStack } from "@chakra-ui/react";
import { DateBox, InputBox, SelectBox, SwitchBox, TextBox } from "./SharedModules";
const TicktDetails = (props) => {
  const { handleBlur, handleChange, values, setFieldValue } = props;
  return (
    <VStack spacing={56} w="100%">
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Ticket Name"
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
          name="ticketQuantity"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Single"
          label="Ticket Type"
          maxW="45%"
          name="ticketType"
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
          name="earlyBird"
        />
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={setFieldValue}
          placeholder="Early Bird Ending Date"
          label="Early Bird Ending Date"
          maxW="45%"
          name="earlyBirdEndingDate"
          format="YYYY-MM-DD"
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
          name="regular"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Price"
          label="Late (Optional)"
          maxW="45%"
          name="late"
        />
      </HStack>
      <VStack spacing={20} w="100%" alignItems="flex-start">
        <SwitchBox
          name="asignCollectables"
          handleChange={setFieldValue}
          maxW="25%"
          values={values}
          label="Assign collectible to ticket"
        />
        <SwitchBox
          name="allowTransfer"
          handleChange={setFieldValue}
          maxW="25%"
          values={values}
          label="Allow transfers of this ticket"
        />
        <SwitchBox
          name="allowResale"
          handleChange={setFieldValue}
          maxW="25%"
          values={values}
          label="Allow resale of this ticket"
        />
      </VStack>
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter min resale"
          label="Minimum Resale"
          maxW="45%"
          name="minimumResale"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter max resale"
          label="Maximum Resale"
          maxW="45%"
          name="maximumResale"
        />
      </HStack>
    </VStack>
  );
};

export default TicktDetails;
