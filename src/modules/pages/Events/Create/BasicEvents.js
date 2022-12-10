import { HStack, VStack } from "@chakra-ui/react";
import {
  DateBox,
  InputBox,
  SelectBox,
  TextBox,
} from "./SharedModules";
const BasicEvents = ({ handleBlur, handleChange, values }) => {
  return (
    <VStack w="100%">
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Type Event Name"
          label="Event Name"
        />
        <SelectBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Type"
          label="Type"
        />
      </HStack>
      <HStack w="100%">
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Date and Time"
          label="Date"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Time"
          label="Start Time"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Time"
          label="End Time(Optional)"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Location"
          label="Location"
        />
      </HStack>
      <HStack w="100%">
        <TextBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Location"
          label="Description"
        />
      </HStack>
    </VStack>
  );
};

export default BasicEvents;
