import { HStack, VStack } from "@chakra-ui/react";
import { DateBox, InputBox, SelectBox, TextBox } from "./SharedModules";
const BasicEvents = ({ handleBlur, handleChange, values }) => {
  return (
    <VStack spacing={56} w="100%">
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Type Event Name"
          label="Event Name"
          name="eventName"
          maxW="70%"
        />
        <SelectBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Type"
          label="Type"
          name="eventType"
          maxW="80%"
        />
      </HStack>
      <HStack spacing={30} justifyContent="space-between" w="100%">
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Date and Time"
          label="Date"
          name="date"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Time"
          label="Start Time"
          maxW="100%"
          name="startTime"
        />
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Time"
          label="End Time(Optional)"
          name="endTime"
          maxW="100%"
        />
      </HStack>
      <HStack w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Select Location"
          label="Location"
          name="location"
          maxW="65%"
        />
      </HStack>
      <HStack w="100%">
        <TextBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Description"
          label="Description"
          name="description"
        />
      </HStack>
    </VStack>
  );
};

export default BasicEvents;
