import { HStack, InputGroup, VStack, InputRightElement, Input as InputComponent } from "@chakra-ui/react";
import { DateBox, InputBox, SelectBox, TextBox, TimeBox } from "./SharedModules";
const BasicEvents = (props) => {
  const { handleBlur, handleChange, values, setFieldValue } = props;

  return (
    <VStack spacing={56} w="100%">
      <HStack spacing={30} flex={1} justifyContent="flex-start" w="100%">
        <InputBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="J Lo Concert"
          label="Event Name"
          name="eventName"
          maxW="70%"
        />
        <SelectBox
          values={values}
          handleBlur={handleBlur}
          handleChange={setFieldValue}
          placeholder="Event"
          label="Type"
          name="eventType"
          maxW="80%"
          options={[{ label: "Festival", value: "Festival" }]}
        />
      </HStack>
      <HStack spacing={30} justifyContent="space-between" w="100%">
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={setFieldValue}
          placeholder="Select Date and Time"
          label="Date"
          name="startDate"
          format="YYYY-MM-DD"
        />
        <TimeBox
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
          placeholder="Enter Time"
          label="Start Time"
          maxW="100%"
          name="startTime"
        />
      </HStack>

      <HStack spacing={30} justifyContent="space-between" w="100%">
        <DateBox
          values={values}
          handleBlur={handleBlur}
          handleChange={setFieldValue}
          placeholder="Select Date and Time"
          label="Date"
          name="endDate"
          format="YYYY-MM-DD"
        />
        <TimeBox
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
