import {
  HStack,
  InputGroup,
  VStack,
  InputRightElement,
  Input as InputComponent,
  Box,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { DateBox, InputBox, SelectBox, TextBox, TimeBox } from "./SharedModules";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button as ABT, Dropdown, Space } from "antd";
import { theme } from "../../../../styles/theme/base";
import { useState } from "react";
const BasicEvents = (props) => {
  const { handleBlur, handleChange, values, setFieldValue } = props;
  const textValue = useColorModeValue(theme.colors.black[100], theme.colors.white[100]);
  const [selectedEvent, setSelectedEvent] = useState("All Events");
  const [hover, setHover] = useState("");

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

        <Box w={"80%"}>
          <Text fontSize={14} mb="8px" color={textValue} className="heebo" fontWeight={500}>
            {"Event Type"}
          </Text>
          <Dropdown
            menu={{
              items: [
                {
                  label: "Event",
                  key: "1",
                  style: {
                    backgroundColor: selectedEvent === "Event" || hover === "Event" ? "#02F6AD" : "#ffffff",
                    border: selectedEvent === "Event" ? "1px solid" : "none",
                    color: "#141414",
                    fontSize: 14,
                    paddingTop: 8,
                    paddingBottom: 8,
                  },
                  className: "gordita400",
                  onClick: () => setSelectedEvent("Event"),
                  onMouseEnter: () => setHover("Event"),
                  onMouseLeave: () => setHover(""),
                },
                {
                  label: "Festival",
                  key: "1",
                  style: {
                    backgroundColor: selectedEvent === "Festival" || hover === "Festival" ? "#02F6AD" : "#ffffff",
                    border: selectedEvent === "Festival" ? "1px solid" : "none",
                    color: "#141414",
                    fontSize: 14,
                    paddingTop: 8,
                    paddingBottom: 8,
                  },
                  onClick: () => setSelectedEvent("Festival"),
                  className: "gordita400",
                  onMouseEnter: () => setHover("Festival"),
                  onMouseLeave: () => setHover(""),
                },
              ],
              onClick: () => console.log(""),
            }}
            overlayStyle={{
              padding: 0,
              margin: 0,
            }}
          >
            <ABT
              style={{
                backgroundColor: "#141414",
                color: "#A6A0BB",
                width: "100%",
                height: "56px",
                borderRadius: "8px",
                border: "none",
                fontSize: 14,
                maxWidth: "80%",
              }}
              className="gordita400"
            >
              <Space style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                {selectedEvent}
                <DownOutlined />
              </Space>
            </ABT>
          </Dropdown>
        </Box>
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
