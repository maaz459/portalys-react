import React, { useRef } from "react";
import lodash_isNil from "lodash/isNil";
import { useOutsideClick } from "@chakra-ui/react";

import { DatePicker as DStyle } from "../../styles/layout/sharedModules";
import { DatePicker } from "antd";
const MONTH_NAMES_DEFAULT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_NAMES_DEFAULT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DATE_FORMAT_DEFAULT = "DD/MM/YYYY";

export const SingleDatepicker = ({
  configs = {
    dateFormat: DATE_FORMAT_DEFAULT,
    monthNames: MONTH_NAMES_DEFAULT,
    dayNames: DAY_NAMES_DEFAULT,
  },
  color,
  dark,
  w,
  className,
  ...props
}) => {
  const { date, onDateChange, maxW } = props;

  const ref = useRef();

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

  return (
    <DStyle dark={dark}>
      <DatePicker
        className={className ? className + " gordita400" : "gordita400"}
        style={{
          border: "none",
          backgroundColor: "#1C1C1C",
          height: 56,
          color: { color },
          fontSize: 14,
          maxWidth: maxW,
          width: "100%",
        }}
        value={date}
        showToday={true}
        onChange={onDateChange}
      />
    </DStyle>
  );
};
