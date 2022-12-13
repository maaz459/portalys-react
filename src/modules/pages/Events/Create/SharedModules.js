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
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { SingleDatepicker } from "../../../shared/datepicker";
import { BsArrowRight, BsChevronLeft } from "react-icons/bs";
export const EventBar = ({
  textValue,
  step,
  heading,
  onStepChange,
  onGoBack,
}) => (
  <HStack justifyContent="space-between" spacing={10} flex={1}>
    <HStack
      alignItems="center"
      onClick={onGoBack}
      flex={1}
      cursor="pointer"
      className="gordita600"
      color={textValue}
      fontSize={16}
    >
      <BsChevronLeft />
      <Text pt={1}>Go Back</Text>
    </HStack>
    <HStack
      bgGradient="linear-gradient(89.98deg, #816CFF 1.37%, #9B6CFF 101.52%)"
      borderRadius="6px"
      h="48px"
      px={24}
      fontSize={16}
      className="gordita600"
      flex={6}
      color={textValue}
      justifyContent="space-between"
    >
      <Text>{heading}</Text>
      <Text>{"STEP " + step + " OF 5"}</Text>
    </HStack>
    <Flex justifyContent="flex-end" flex={1}>
      <Button
        className="gordita600"
        onClick={onStepChange}
        bg="primary.100"
        color="black.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={4}
        fontSize={16}
        h="48px"
      >
        Next Step
        <BsArrowRight />
      </Button>
    </Flex>
  </HStack>
);

export const InputBox = ({ label, name, placeholder, maxW, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW}>
      <Text
        mb="8px"
        fontSize={14}
        color={textValue}
        className="heebo"
        fontWeight={500}
      >
        {label}
      </Text>
      <Input
        name={name}
        w="100%"
        type="text"
        h="56px"
        borderRadius="8px"
        bg="black.400"
        border="none"
        color="purple.100"
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        _placeholder={{
          color: "purple.100",
        }}
        {...rest}
      />
    </Box>
  );
};
export const TextBox = ({ label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w="100%" spacing={0} alignItems="flex-start">
      <Text mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <Textarea
        bg="black.400"
        borderRadius="8px"
        w="100%"
        placeholder={placeholder}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        size="sm"
        minH="199px"
        color="purple.100"
        _placeholder={{
          color: "purple.100",
        }}
      />
    </Box>
  );
};

export const SelectBox = ({ label, placeholder, name, maxW, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW}>
      <Text
        fontSize={14}
        mb="8px"
        color={textValue}
        className="heebo"
        fontWeight={500}
      >
        {label}
      </Text>
      <Select
        bg="black.400"
        color="purple.100"
        w="100%"
        maxW={maxW}
        h="56px"
        borderRadius="8px"
        border="none"
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values[name]}
        placeholder={placeholder}
      >
        <option></option>
      </Select>
    </Box>
  );
};

export const DateBox = ({ name, label, placeholder, maxW, ...rest }) => {
  const [date, setDate] = useState();
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW || "100%"}>
      <Text
        fontSize={14}
        mb="8px"
        color={textValue}
        className="heebo"
        fontWeight={500}
      >
        {label}
      </Text>
      <SingleDatepicker
        color="purple.100"
        name={name}
        date={date}
        onDateChange={setDate}
        placeholder={placeholder}
      />
    </Box>
  );
};

export const SwitchBox = ({ maxW, label, placeholder, ...rest }) => {
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;
  return (
    <HStack
      w="100%"
      maxW={maxW}
      spacing={0}
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Text
        mb="8px"
        fontSize={14}
        color={textValue}
        className="heebo"
        fontWeight={500}
      >
        {label}
      </Text>
      <Switch size="md" pl={56} />
    </HStack>
  );
};
