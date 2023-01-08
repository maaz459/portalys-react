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
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { theme } from "../../../../styles/theme/base";
import { SingleDatepicker } from "../../../shared/datepicker";
import { BsArrowRight, BsChevronLeft } from "react-icons/bs";
import { InfoOutlineIcon, TimeIcon } from "@chakra-ui/icons";
import { TimeBoxWrapper } from "../../../../styles/pages/dashboard";
import isEmpty from "lodash/isEmpty";
import moment from "moment";
import { EventBar as EventStyles, SelectItem } from "../../../../styles/layout/sharedModules";
import { Steps } from "antd";

const stepss = [
  {
    status: "wait",
    title: "Event Basics",
  },
  {
    status: "wait",
    title: "Ticket Details ",
  },
  {
    status: "wait",
    title: "Artist and Lineup",
  },
  {
    status: "wait",
    title: "Permotion",
  },
  {
    status: "wait",
    title: "Summary",
  },
];

export const EventBar = ({
  textValue,
  step,
  heading,
  onStepChange,
  onGoBack,
  endStep,
  handleSubmit,
  onProgressChange,
  children,
}) => {
  const [items, setItems] = useState();
  const color = useColorModeValue("#000000", "#ffffff");
  useEffect(() => {
    const newSteps = stepss.map((val, index) => (index === step - 1 ? { status: "process", title: val.title } : val));
    setItems(newSteps);
  }, [step]);
  return (
    <EventStyles color={color}>
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
        <HStack h="48px" px={24} className="gordita600" flex={6} color={textValue}>
          <Steps
            type="navigation"
            current={step - 1}
            onChange={onProgressChange}
            className="site-navigation-steps"
            items={items}
          />
        </HStack>
        {endStep && (
          <Flex mt={56} justifyContent="flex-end" flex={1}>
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
        )}
      </HStack>
      {children}
      {step < 5 && (
        <Flex mt={56} justifyContent="flex-end" flex={1}>
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
      )}
    </EventStyles>
  );
};

export const InputBox = ({ label, name, placeholder, maxW, tooltip = false, ...rest }) => {
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW}>
      <Flex mb="8px" alignItems="center" gap={10}>
        <Text fontSize={14} color={textValue} className="heebo" fontWeight={500}>
          {label}
        </Text>
        {tooltip && (
          <Tooltip hasArrow label="Data Required" bg="gray.300" color="black">
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </Flex>
      <Input
        name={name}
        w="100%"
        type="text"
        h="56px"
        className="gordita400"
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
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
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
        className="gordita400"
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
          fontSize: 16,
        }}
      />
    </Box>
  );
};

export const SelectBox = ({ label, placeholder, name, maxW, options, ...rest }) => {
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW}>
      <SelectItem>
        <Text fontSize={14} mb="8px" color={textValue} className="heebo" fontWeight={500}>
          {label}
        </Text>
        <Select
          bg="black.400"
          color="purple.100"
          w="100%"
          maxW={maxW}
          className="gordita400"
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
              <option className="optionss" value={value}>
                {label}
              </option>
            ))}
        </Select>
      </SelectItem>
    </Box>
  );
};

export const DateBox = ({ name, label, placeholder, maxW, format, ...rest }) => {
  const [date, setDate] = useState();
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const { values, handleBlur, handleChange } = rest;
  return (
    <Box w={maxW || "100%"}>
      <Text fontSize={14} mb="8px" color={textValue} className="heebo" fontWeight={500}>
        {label}
      </Text>
      <SingleDatepicker
        className="shared"
        color="purple.100"
        name={name}
        maxW={"100%"}
        date={values[name + "1"]}
        onDateChange={(date, dateString) => {
          handleChange(name, moment(date).format(format));
          handleChange(name + "1", date);
        }}
        placeholder={placeholder}
      />
    </Box>
  );
};

export const SwitchBox = ({ name, maxW, label, placeholder, tooltip = false, ...rest }) => {
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const { values, handleBlur, handleChange } = rest;
  return (
    <HStack w="100%" maxW={maxW} spacing={0} alignItems="flex-start" justifyContent="space-between">
      <Flex mb="8px" alignItems="center" gap={10}>
        <Text fontSize={14} color={textValue} className="heebo" fontWeight={500}>
          {label}
        </Text>
        {tooltip && (
          <Tooltip hasArrow label="Data Required" bg="gray.300" color="black">
            <InfoOutlineIcon />
          </Tooltip>
        )}
      </Flex>
      <Switch
        defaultChecked={values[name]}
        onChange={(val) => handleChange(name, val.target.checked)}
        size="md"
        pl={56}
      />
    </HStack>
  );
};

export const TimeBox = ({ name, label, placeholder, maxW, color = "purple.100", ...rest }) => {
  const [date, setDate] = useState();
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const { values, handleBlur, handleChange } = rest;

  const icon = <TimeIcon fontSize="sm" />;

  return (
    <TimeBoxWrapper>
      <Box w={maxW || "100%"}>
        <Text fontSize={14} mb="8px" color={textValue} className="heebo" fontWeight={500}>
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
