import { HStack, InputGroup, VStack, InputRightElement, Input as InputComponent } from "@chakra-ui/react";
import { DateBox, InputBox, SelectBox, TextBox, TimeBox } from "./SharedModules";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button as ABT, Dropdown, Space } from "antd";
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
        <Dropdown
          menu={{
            items: [
              {
                label: "Event",
                key: "1",
                style: {
                  backgroundColor: "#02F6AD",
                  border: "1px solid",
                  color: "#141414",
                  fontSize: 14,
                  paddingTop: 8,
                  paddingBottom: 8,
                },
                className: "gordita400",
              },
              {
                label: "Festival",
                key: "1",
                style: {
                  // backgroundColor: "#02F6AD",
                  border: "none",
                  color: "#141414",
                  fontSize: 14,
                  paddingTop: 8,
                  paddingBottom: 8,
                },
                className: "gordita400",
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
              All Events
              <DownOutlined />
            </Space>
          </ABT>
        </Dropdown>
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
