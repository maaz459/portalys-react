import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { SingleDatepicker } from "../../shared/datepicker";
import {
  cancel,
  edit,
  event,
  event2,
  grid,
  list,
  location as locImage,
  refund,
} from "../../../static/assets/images/dashboard/sidebar";
import { useNavigate } from "react-router-dom";
const spacing = {
  gap: 0,
  spacing: 0,
  w: "100%",
};

const SingleEvent = {
  image: event,
  eventName: "Joker (VIP) Ticket",
  date: "24 Dec, 2022",
  startTime: "15:00",
  venue: "Licester Squre",
  status: "Live",
  location: "Kia Forum, Inglewood, CA",
};

const events = [
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
  SingleEvent,
];

const EventsComponent = () => {
  const [date, setDate] = useState();
  const [displayType, setDisplayType] = useState("table");
  const navigate = useNavigate();
  return (
    <Box w="100%">
      <Stack {...{ spacing }} flexDir="row">
        <HStack {...{ spacing }} spacing={10} flex={1}>
          <SingleDatepicker
            eventName="date-input"
            date={date}
            onDateChange={setDate}
            placeholder="Date venue"
            maxW="281px"
          />
          <Select
            bg="black.300"
            color="white.100"
            maxW="210px"
            placeholder="All Events"
          >
            <option></option>
          </Select>
        </HStack>
        <HStack
          justifyContent="flex-end"
          {...{ spacing }}
          spacing={12}
          flex={1}
        >
          <Button
            onClick={() => {
              if (displayType === "table") {
                setDisplayType("list");
              } else {
                setDisplayType("table");
              }
            }}
            color="white.100"
            bg="#690DFF"
          >
            <Image src={displayType === "list" ? list : grid}></Image>
          </Button>
          <Button
            onClick={() => navigate("/events/create")}
            bg="primary.100"
            color="black.100"
          >
            + Create Event
          </Button>
        </HStack>
      </Stack>
      <Box mt={56} w="100%">
        {displayType === "table" ? (
          <TableContainer>
            <Table
              style={{ borderCollapse: "separate", borderSpacing: "0 1em" }}
              variant="unstyled"
            >
              <Thead
                borderBottom="1px solid"
                borderColor="rgba(153, 159, 187,0.2)"
              >
                <Tr>
                  {[
                    "Event eventName",
                    "Date",
                    "Start Time",
                    "Event Venue",
                    "Status",
                    "Actions",
                  ].map((column, index) => {
                    return (
                      <Th
                        textTransform="capitalize"
                        key={index}
                        fontSize={16}
                        color="gray.100"
                      >
                        {column}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {events.map(
                  (
                    { date, status, eventName, startTime, venue, image },
                    index
                  ) => {
                    return (
                      <Tr
                        borderRadius="6px"
                        bg="#1C1C1C"
                        color="white.100"
                        key={index}
                      >
                        <Td>
                          <HStack spacing={10}>
                            <Image alt="" w={"32px"} h={"32px"} src={image} />
                            <Text className="gordita400" fontSize={16}>
                              {eventName}
                            </Text>
                          </HStack>
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {date}
                          </Text>
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {startTime}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {venue}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <Text fontSize={14} className="gordita400">
                            {status}
                          </Text>{" "}
                        </Td>
                        <Td>
                          <HStack alignItems="center" spacing={24}>
                            <VStack justifyContent="center" alignItems="center">
                              <Image alt="" src={edit}></Image>
                              <Text>Edit</Text>
                            </VStack>
                            <VStack justifyContent="center" alignItems="center">
                              <Image alt="" src={cancel}></Image>
                              <Text>Cancel</Text>
                            </VStack>
                            <VStack justifyContent="center" alignItems="center">
                              <Image alt="" src={refund}></Image>
                              <Text>Refund</Text>
                            </VStack>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  }
                )}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Flex wrap="wrap" gap={1} justifyContent="space-between">
            {events.map(
              (
                { date, status, eventName, startTime, venue, image, location },
                index
              ) => {
                return (
                  <Box
                    flexBasis="23%"
                    mb={56}
                    borderRadius="6px"
                    bg="#1C1C1C"
                    color="white.100"
                    key={index}
                  >
                    <Image
                      alt=""
                      style={{ width: "100%", height: "131px" }}
                      src={event2}
                    />
                    <VStack spacing={10} mt={12} alignItems="flex-start" p={12}>
                      <Text className="gordita400" fontSize={16}>
                        Event Name:
                      </Text>
                      <Text className="gordita600" fontSize={16}>
                        {eventName}
                      </Text>
                      <Text
                        className="gordita600"
                        fontSize={14}
                        color="primary.100"
                      >
                        {date + "|" + startTime}
                      </Text>
                      <HStack>
                        <Image alt="" src={locImage} />
                        <Text className="gordita600" fontSize={14}>
                          {location}
                        </Text>
                      </HStack>
                    </VStack>
                    <HStack
                      borderTop="1px solid #2D2D2D"
                      px={24}
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={24}
                    >
                      <VStack justifyContent="center" alignItems="center">
                        <Image alt="" src={edit}></Image>
                        <Text>Edit</Text>
                      </VStack>
                      <VStack justifyContent="center" alignItems="center">
                        <Image alt="" src={cancel}></Image>
                        <Text>Cancel</Text>
                      </VStack>
                      <VStack justifyContent="center" alignItems="center">
                        <Image alt="" src={refund}></Image>
                        <Text>Refund</Text>
                      </VStack>
                    </HStack>
                  </Box>
                );
              }
            )}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default EventsComponent;
