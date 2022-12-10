import {
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Text,
  useColorModeValue,
  VStack,
  Textarea,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { SingleDatepicker } from "../../../shared/datepicker";

export const EventBar = ({
  textValue,
  step,
  heading,
  onStepChange,
  onGoBack,
}) => (
  <HStack justifyContent="space-between" spacing={10} flex={1}>
    <Text
      onClick={onGoBack}
      flex={1}
      cursor="pointer"
      className="gordita600"
      color={textValue}
    >
      {"<" + " Go Back"}{" "}
    </Text>
    <HStack
      bgGradient="linear-gradient(89.98deg, #816CFF 1.37%, #9B6CFF 101.52%)"
      borderRadius="6px"
      h="48px"
      px={24}
      flex={6}
      color={textValue}
      justifyContent="space-between"
    >
      <Text className="gordita600">{heading}</Text>
      <Text>{"STEP " + step + " OF 4"}</Text>
    </HStack>
    <Flex justifyContent="flex-end" flex={1}>
      <Button onClick={onStepChange} bg="primary.100" color="black.100">
        {"Next Step -->"}
      </Button>
    </Flex>
  </HStack>
);

export const InputBox = ({ label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <VStack w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <Input
        w="100%"
        type="text"
        h="56px"
        borderRadius="12px"
        borderColor="primary.300"
        color={textValue}
        placeholder={placeholder}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </VStack>
  );
};
export const TextBox = ({ label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <VStack w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <Textarea
        w="100%"
        placeholder={placeholder}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        size="sm"
      />
    </VStack>
  );
};

export const SelectBox = ({ label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <VStack w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <Select
        bg="black.300"
        color="white.100"
        maxW="210px"
        placeholder={placeholder}
      >
        <option></option>
      </Select>
    </VStack>
  );
};

export const DateBox = ({ label, placeholder, ...rest }) => {
  const [date, setDate] = useState();
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <VStack w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <SingleDatepicker
        name="date-input"
        date={date}
        onDateChange={setDate}
        placeholder={placeholder}
      />
    </VStack>
  );
};

export const SwitchBox = ({ label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <HStack w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <Switch pl={56} />
    </HStack>
  );
};
