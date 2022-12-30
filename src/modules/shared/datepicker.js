import React, { Fragment, useRef, useState } from "react";
import lodash_isEmpty from "lodash/isEmpty";
import lodash_map from "lodash/map";
import lodash_isNil from "lodash/isNil";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { InputGroup, Input as InputComponent, InputRightElement } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useDayzed } from "dayzed";
import moment from "moment";

const MONTH_NAMES_DEFAULT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_NAMES_DEFAULT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DATE_FORMAT_DEFAULT = "DD/MM/YYYY";

const SingleDatepickerBackButtons = (props) => {
  const { calendars, getBackProps } = props;
  return (
    <Fragment>
      <Button
        color="black.100"
        {...getBackProps({
          calendars,
          offset: 12,
        })}
        variant="ghost"
        size="sm"
      >
        {"<<"}
      </Button>
      <Button color="black.100" {...getBackProps({ calendars })} variant="ghost" size="sm">
        {"<"}
      </Button>
    </Fragment>
  );
};

const SingleDatepickerForwardButtons = (props) => {
  const { calendars, getForwardProps } = props;
  return (
    <Fragment>
      <Button color="black.100" {...getForwardProps({ calendars })} variant="ghost" size="sm">
        {">"}
      </Button>
      <Button
        color="black.100"
        {...getForwardProps({
          calendars,
          offset: 12,
        })}
        variant="ghost"
        size="sm"
      >
        {">>"}
      </Button>
    </Fragment>
  );
};

const SingleDatepickerCalendar = (props) => {
  const { calendars, getDateProps, getBackProps, getForwardProps, configs } = props;

  if (lodash_isEmpty(calendars)) {
    return null;
  }

  return (
    <HStack w="100%" className="datepicker-calendar">
      {lodash_map(calendars, (calendar) => {
        return (
          <VStack w="100%" key={`${calendar.month}${calendar.year}`}>
            <HStack>
              <SingleDatepickerBackButtons calendars={calendars} getBackProps={getBackProps} />
              <Heading color="black.100" size="sm" textAlign="center">
                {configs.monthNames[calendar.month]} {calendar.year}
              </Heading>
              <SingleDatepickerForwardButtons calendars={calendars} getForwardProps={getForwardProps} />
            </HStack>
            <Divider />
            <SimpleGrid columns={7} spacing={2} textAlign="center">
              {lodash_map(configs.dayNames, (day) => (
                <Box key={`${calendar.month}${calendar.year}${day}`}>
                  <Text fontSize="sm" fontWeight="semibold">
                    {day}
                  </Text>
                </Box>
              ))}
              {lodash_map(calendar.weeks, (week, weekIndex) => {
                return lodash_map(week, (dateObj, index) => {
                  const {
                    date,
                    today,
                    // prevMonth,
                    // nextMonth,
                    selected,
                  } = dateObj;
                  const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;

                  return (
                    <Button
                      {...getDateProps({
                        dateObj,
                        // disabled: isDisabled
                      })}
                      key={key}
                      color="black"
                      size="sm"
                      variant="outline"
                      borderColor={today ? "purple.400" : "transparent"}
                      bg={selected ? "primary.100" : undefined}
                    >
                      {date.getDate()}
                    </Button>
                  );
                });
              })}
            </SimpleGrid>
          </VStack>
        );
      })}
    </HStack>
  );
};

export const SingleDatepicker = ({
  configs = {
    dateFormat: DATE_FORMAT_DEFAULT,
    monthNames: MONTH_NAMES_DEFAULT,
    dayNames: DAY_NAMES_DEFAULT,
  },
  color,
  ...props
}) => {
  const { date, name, disabled, onDateChange, id, placeholder, maxW } = props;

  const ref = useRef();
  const initialFocusRef = useRef();
  const [popoverOpen, setPopoverOpen] = useState(false);

  const icon = <CalendarIcon fontSize="sm" />;

  useOutsideClick({
    ref: ref,
    handler: () => setPopoverOpen(false),
  });

  const onDateSelected = (options) => {
    const { selectable, date } = options;
    if (!selectable) return;
    if (!lodash_isNil(date)) {
      onDateChange(date);
      setPopoverOpen(false);
      return;
    }
  };

  const dayzedData = useDayzed({
    showOutsideDays: true,
    onDateSelected,
    selected: date,
  });

  return (
    <Popover
      placement="bottom-start"
      variant="responsive"
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      initialFocusRef={initialFocusRef}
      isLazy
    >
      <PopoverTrigger>
        <InputGroup maxW={maxW}>
          <InputComponent
            id={id}
            w="100%"
            bg="black.400"
            h="56px"
            autoComplete="off"
            isDisabled={disabled}
            ref={initialFocusRef}
            onClick={() => setPopoverOpen(!popoverOpen)}
            name={name}
            color={color}
            placeholder={placeholder}
            _placeholder={{
              color,
            }}
            value={!date ? "" : moment(date).format(configs.dateFormat)}
            onChange={(e) => e.target.value}
          />
          <InputRightElement
            onClick={() => setPopoverOpen(!popoverOpen)}
            color="gray.500"
            cursor="pointer"
            mt={2}
            children={icon}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent w="100%" ref={ref}>
        <PopoverBody bg="white.200" padding={"10px 5px"} borderWidth={1} borderColor="blue.400" w="100%">
          <SingleDatepickerCalendar {...dayzedData} configs={configs} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
