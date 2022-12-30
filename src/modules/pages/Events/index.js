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
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
import dance from "../../../static/assets/images/dance.png";
import { getEvents } from "../../../utils/actions/event";
import { user } from "../../../recoil/atoms/user";
import { useRecoilState } from "recoil";
import { isEmpty } from "lodash";

const spacing = {
  gap: 0,
  spacing: 0,
  w: "100%",
};

const SingleEvent = {
  image: event,
  eventName: "Joker (VIP) Ticket",
  startDate: "24 Dec, 2022",
  startTime: "15:00",
  venue: "Licester Squre",
  status: "Live",
  location: "Kia Forum, Inglewood, CA",
};

const events = [SingleEvent];

const EventsComponent = () => {
  const [date, setDate] = useState(null);
  const [data, setData] = useState([]);
  const colorValue = useColorModeValue("black.100", "gray.100");
  const [displayType, setDisplayType] = useState("table");
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user_d"));
        const val = await getEvents(user.userId);
        if (!isEmpty(val)) {
          const newEvents = [];
          Object.values(val).forEach((et) => {
            newEvents.push({ ...et });
          });
          setData(newEvents);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  return (
    <Box w="100%">
      <Stack {...{ spacing }} flexDir="row">
        <HStack {...{ spacing }} spacing={10} flex={1}>
          <SingleDatepicker
            eventName="date-input"
            date={date}
            onDateChange={setDate}
            placeholder="Date Range"
            maxW="281px"
            color="white.100"
          />
          <Select
            bg="black.400"
            color="white.100"
            w="100%"
            maxW="210px"
            h="56px"
            borderRadius="8px"
            border="none"
            className="gordita400"
            fontSize={14}
            placeholder="All Events"
          >
            <option></option>
          </Select>
        </HStack>
        <HStack justifyContent="flex-end" {...{ spacing }} spacing={12} flex={1}>
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
          <Button onClick={() => navigate("/events/create")} bg="primary.100" color="black.100">
            + Create Event
          </Button>
        </HStack>
      </Stack>
      <Box mt={56} w="100%">
        {displayType === "table" ? (
          <TableContainer>
            <Table style={{ borderCollapse: "separate", borderSpacing: "0 1em" }} variant="unstyled">
              <Thead borderBottom="1px solid" borderColor="rgba(153, 159, 187,0.2)">
                <Tr>
                  {["Event eventName", "Date", "Start Time", "Event Venue", "Status"].map((column, index) => {
                    return (
                      <Th textTransform="capitalize" key={index} fontSize={16} color={colorValue}>
                        {column}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {data?.map(({ startDate, status, eventName, startTime, venue, eventImage, location }, index) => {
                  return (
                    <Tr borderRadius="6px" bg="#1C1C1C" color="white.100" key={index}>
                      <Td py={0} h="57px">
                        <HStack py={0} spacing={10}>
                          <Image w="57px" h="57px" alt="" src={eventImage} />
                          <Text className="gordita400" fontSize={16}>
                            {eventName}
                          </Text>
                        </HStack>
                      </Td>
                      <Td>
                        <Text fontSize={14} className="gordita400">
                          {startDate}
                        </Text>
                      </Td>
                      <Td>
                        <Text fontSize={14} className="gordita400">
                          {startTime}
                        </Text>{" "}
                      </Td>
                      <Td>
                        <Text fontSize={14} className="gordita400">
                          {location}
                        </Text>{" "}
                      </Td>
                      <Td>
                        <Text
                          px="30px"
                          py={2}
                          border="1px solid"
                          borderColor="primary.100"
                          fontSize={14}
                          w="max"
                          borderRadius="25px"
                          className="gordita400"
                        >
                          Live
                        </Text>{" "}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Flex wrap="wrap" gap="2%">
            {data.map(({ startDate, status, eventName, startTime, venue, eventImage, location }, index) => {
              return (
                <Box
                  flexBasis={{ base: "", md: "32", lg: "23%" }}
                  mb={56}
                  borderRadius="6px"
                  bg="#1C1C1C"
                  color="white.100"
                  key={index}
                >
                  <Box pos="relative">
                    <Box
                      px="30px"
                      py={2}
                      bg="primary.100"
                      fontSize={14}
                      w="max"
                      borderRadius="25px"
                      className="gordita600"
                      pos="absolute"
                      right={10}
                      bottom={-20}
                      color="black.100"
                    >
                      LIVE
                    </Box>
                    <Image alt="" style={{ width: "100%", height: "131px" }} src={eventImage} />
                  </Box>
                  <VStack spacing={10} mt={12} alignItems="flex-start" p={12}>
                    <Text className="gordita400" fontSize={16}>
                      Event Name:
                    </Text>
                    <Text className="gordita600" fontSize={16}>
                      {eventName}
                    </Text>
                    <Text className="gordita600" fontSize={14} color="primary.100">
                      {startDate + "|" + startTime}
                    </Text>
                    <HStack>
                      <Image alt="" src={locImage} />
                      <Text className="gordita600" fontSize={14}>
                        {location}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              );
            })}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default EventsComponent;
