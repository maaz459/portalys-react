import {
  Box,
  Flex,
  HStack,
  Select,
  Stack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { down, up } from "../../../static/assets/images/dashboard/sidebar";
import DashboardLayout from "../../layout/dashboard/index";
import Typography from "../../shared/typography";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 0,
    pv: 1000,
  },
  {
    name: "Tue",
    uv: 2500,
    pv: 3000,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 4000,
  },
  {
    name: "Thu",
    uv: 3000,
    pv: 2500,
  },
  {
    name: "Fri",
    uv: 4500,
    pv: 1200,
  },
  {
    name: "Sat",
    uv: 2500,
    pv: 3900,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
  },
];

const analytics = [
  {
    name: "Total Booking",
    quantity: "721K",
    percentage: "+11.04%",
    type: "up",
  },
  {
    name: "Number Of Events",
    quantity: "367K",
    percentage: "+9.15%",
    type: "up",
  },
  {
    name: "Total Organizer",
    quantity: "1156 ",
    percentage: "-0.56%",
    type: "down",
  },
  {
    name: "Total Customer",
    quantity: "239K",
    percentage: "-1.48%",
    type: "down",
  },
];

const Tabs = ({ name, color, setSelected }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Text
      fontSize={18}
      className="gordita700"
      cursor="pointer"
      onClick={() => setSelected(name)}
      color={color}
    >
      {name}
    </Text>
  );
};

const DashboardComponent = () => {
  const [selected, setSelected] = useState("Tickets");

  return (
    <DashboardLayout>
      <Box w="100%">
        <Select
          placeholder={"Last Month"}
          fontSize={18}
          color="white.100"
          w="160px"
          border="none"
          bg="transparent"
          className="gordita700"
          h="26px"
        >
          <option></option>
        </Select>
        <Flex
          gap={24}
          justifyContent="space-between"
          color="white.100"
          mt={12}
          w="100%"
        >
          {analytics.map(({ name, percentage, quantity, type }, index) => (
            <Box p={24} bg="#1C1C1C" borderRadius="6px" flexBasis="25%">
              <Text className="gordita700">{name}</Text>
              <HStack
                mt={12}
                justifyContent="space-between"
                alignItems="flex-end"
                color="primary.100"
              >
                <Text fontSize={24} className="gordita700">
                  {quantity}
                </Text>
                <Flex gap={2}>
                  <Text
                    color={type === "up" ? "primary.100" : "#FF5C00"}
                    className="gordita400"
                    fontSize={12}
                  >
                    {percentage}
                  </Text>
                  <Image alt="" src={type === "up" ? up : down}></Image>
                </Flex>
              </HStack>
            </Box>
          ))}
        </Flex>

        <Stack gap={56} flexDir="row">
          <VStack flexBasis="45%" alignItems="flex-start">
            <HStack mt={24}>
              <Tabs
                color={selected === "Tickets" ? "primary.100" : "white.100"}
                setSelected={setSelected}
                name={"Tickets"}
              />
              <Text fontSize={{ base: 16, md: 20, lg: 22 }} color="white.100">
                |
              </Text>
              <Tabs
                color={selected === "Festivals" ? "primary.100" : "white.100"}
                setSelected={setSelected}
                name={"Festivals"}
              />
            </HStack>
            <Box w="100%" color="white.100" px={10} py={24} bg="#1C1C1C">
              <HStack justifyContent="space-between" mb={12}>
                <Text className="gordita700" fontSize={14}>
                  Total Sales
                </Text>
                <HStack>
                  <Text className="gordita400" fontSize={14}>
                    Primary Sales
                  </Text>
                  <Text className="gordita400" fontSize={14}>
                    Secondary Sales
                  </Text>
                </HStack>
              </HStack>
              <LineChart
                width={650}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="basis"
                  dataKey="pv"
                  stroke="#A8C5DA"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="basis"
                  dataKey="uv"
                  stroke="#FFFFFF"
                  style={{ border: "3px solid #FFFFFF" }}
                />
              </LineChart>
            </Box>
          </VStack>
          <VStack flexBasis="45%" alignItems="flex-start">
            <HStack mt={24}>
              <Tabs color={"primary.100"} name={"Finance"} />
            </HStack>
            <Box w="100%" color="white.100" px={10} py={24} bg="#1C1C1C">
              <HStack mb={12}>
                <Text className="gordita700" fontSize={14}>
                  Total Earning
                </Text>
              </HStack>
              <LineChart
                width={650}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="basis"
                  dataKey="pv"
                  stroke="#A8C5DA"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </Box>
          </VStack>
        </Stack>
      </Box>
    </DashboardLayout>
  );
};

export default DashboardComponent;
