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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { SingleDatepicker } from "../../../shared/datepicker";
import { BsArrowRight, BsChevronLeft } from "react-icons/bs";
import { TimeIcon } from "@chakra-ui/icons";
import { TimeBoxWrapper } from "../../../../styles/pages/dashboard";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

export const EventBar = ({
  textValue,
  step,
  heading,
  onStepChange,
  onGoBack,
  endStep,
  handleSubmit,
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
        onClick={endStep ? handleSubmit : onStepChange}
        bg="primary.100"
        color="black.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={4}
        fontSize={16}
        h="48px"
      >
        {endStep ? "Publish" : "Next Step"}
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
export const TextBox = ({ name, label, placeholder, ...rest }) => {
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
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
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

export const SelectBox = ({
  label,
  placeholder,
  name,
  maxW,
  options,
  ...rest
}) => {
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
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => handleChange(name, e.target.value)}
      >
        {!isEmpty(options) &&
          options.map(({ label, value }, index) => (
            <option value={value}>{label}</option>
          ))}
      </Select>
    </Box>
  );
};

export const DateBox = ({
  name,
  label,
  placeholder,
  maxW,
  format,
  ...rest
}) => {
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
        date={values[name]}
        onDateChange={(val) => handleChange(name, moment(val).format(format))}
        placeholder={placeholder}
      />
    </Box>
  );
};

export const SwitchBox = ({ name, maxW, label, placeholder, ...rest }) => {
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
      <Switch
        defaultChecked={values[name]}
        onChange={(val) => handleChange(name, val.target.checked)}
        size="md"
        pl={56}
      />
    </HStack>
  );
};

export const TimeBox = ({
  name,
  label,
  placeholder,
  maxW,
  color = "purple.100",
  ...rest
}) => {
  const [date, setDate] = useState();
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const { values, handleBlur, handleChange } = rest;

  const icon = <TimeIcon fontSize="sm" />;

  return (
    <TimeBoxWrapper>
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

        <InputGroup maxW="100%">
          <Input
            // id={id}
            type="time"
            bg="black.400"
            h="56px"
            autoComplete="off"
            name={name}
            color={color}
            placeholder="Enter Time"
            _placeholder={{
              color,
            }}
            w="100%"
            value={values[name]}
            onChange={handleChange}
          />
          {/* <InputRightElement
            color="gray.500"
            cursor="pointer"
            mt={2}
            children={icon}
          /> */}
        </InputGroup>
      </Box>
    </TimeBoxWrapper>
  );
};
