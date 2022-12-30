import {
  Box,
  Flex,
  HStack,
  Select,
  Stack,
  Text,
  VStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  CircularProgress,
  CircularProgressLabel,
  Progress as LinearProgress,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { down, pdf, up, xls } from "../../../static/assets/images/dashboard/sidebar";
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
  BarChart,
  Bar,
} from "recharts";
import { SearchIcon } from "@chakra-ui/icons";
import { zoom } from "../../../static/assets/images";
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
    name: "Total Events",
    quantity: "60",
    percentage: "+9.15%",
    type: "up",
  },
  {
    name: "Total Earnings",
    quantity: "$1156",
    percentage: "-0.56",
    type: "up",
  },
  {
    name: "Total Booking",
    quantity: "354 ",
    percentage: "-11.01%",
    type: "up",
  },
  {
    name: "New Followers",
    quantity: "23",
    percentage: "-1.48%",
    type: "down",
  },
];

const Tabs = ({ name, color, setSelected }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Text fontSize={18} className="gordita700" cursor="pointer" onClick={() => setSelected(name)} color={color}>
      {name}
    </Text>
  );
};

const Progress = ({ trackColor, color }) => (
  <Box w="100%" h="8px" borderRadius="70px" zIndex={0} bg={trackColor} pos="relative">
    <Box borderRadius="70px" bg={color} left={0} top={0} w="80%" height="100%" zIndex={2} pos="absolute"></Box>
  </Box>
);

const DashboardComponent = () => {
  const [selected, setSelected] = useState("Tickets");
  const [graph, setGraph] = useState("Yearly");
  const colorValue = useColorModeValue("black.100", "white.100");
  return (
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
      <Flex gap={24} justifyContent="space-between" color="white.100" mt={12} w="100%">
        {analytics.map(({ name, percentage, quantity, type }, index) => (
          <Box p={24} bg="#1C1C1C" borderRadius="6px" flexBasis="25%">
            <Text className="gordita700">{name}</Text>
            <HStack mt={12} justifyContent="space-between" alignItems="flex-end" color="primary.100">
              <Text fontSize={24} className="gordita700">
                {quantity}
              </Text>
              <Flex gap={2}>
                <Text color={type === "up" ? "primary.100" : "#FF5C00"} className="gordita400" fontSize={12}>
                  {percentage}
                </Text>
                <Image alt="" src={type === "up" ? up : down}></Image>
              </Flex>
            </HStack>
          </Box>
        ))}
      </Flex>

      <Stack gap={56} flexDir="row">
        <VStack justifyContent="center" flexBasis="50%" alignItems="flex-start">
          <HStack alignItems="center" justifyContent="center" mt={24}>
            <Tabs
              color={selected === "Tickets" ? "primary.100" : colorValue}
              setSelected={setSelected}
              name={"Tickets"}
            />
            <Text fontSize={{ base: 16, md: 20, lg: 22 }} color={colorValue}>
              |
            </Text>
            <Tabs
              color={selected === "Collectables" ? "primary.100" : colorValue}
              setSelected={setSelected}
              name={"Collectables"}
            />
          </HStack>
          <Box w="100%" color="white.100" px={10} py={24} bg="#1C1C1C">
            <HStack justifyContent="space-between" mb={12}>
              <Text className="gordita700" fontSize={14}>
                Tickets Sold
              </Text>
              <HStack gap={8}>
                <Text
                  bg={graph === "Yearly" ? "rgba(2, 246, 173, 0.34)" : ""}
                  border={graph === "Yearly" ? "0.8px solid" : ""}
                  borderColor="#02F6AD"
                  className="gordita400"
                  borderRadius="8px"
                  px={4}
                  fontSize={14}
                  cursor="pointer"
                  onClick={() => setGraph("Yearly")}
                >
                  Yearly
                </Text>
                <Text
                  bg={graph === "Monthly" ? "rgba(2, 246, 173, 0.34)" : ""}
                  border={graph === "Monthly" ? "0.8px solid" : ""}
                  borderColor="#02F6AD"
                  className="gordita400"
                  borderRadius="8px"
                  px={4}
                  fontSize={14}
                  cursor="pointer"
                  onClick={() => setGraph("Monthly")}
                >
                  Monthly
                </Text>
                <Text
                  bg={graph === "Daily" ? "rgba(2, 246, 173, 0.34)" : ""}
                  border={graph === "Daily" ? "0.8px solid" : ""}
                  borderColor="#02F6AD"
                  className="gordita400"
                  borderRadius="8px"
                  px={4}
                  fontSize={14}
                  cursor="pointer"
                  onClick={() => setGraph("Daily")}
                >
                  Daily
                </Text>
              </HStack>
            </HStack>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
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
                <Line type="basis" dataKey="pv" stroke="#A8C5DA" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
        <VStack flexBasis="50%" alignItems="flex-start">
          <HStack mt={24}>
            <Tabs color={"primary.100"} name={"Finance"} />
          </HStack>
          <Box w="100%" color="white.100" px={10} py={24} bg="#1C1C1C">
            <HStack mb={12}>
              <Text className="gordita700" fontSize={14}>
                Total Earning
              </Text>
            </HStack>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" barSize={10} fill="#690DFF" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
      </Stack>

      <HStack alignItems="center" mt={24}>
        <HStack flex={1}>
          <Text flex={2} fontSize={18} color={colorValue} className="gordita700">
            Total Tickets Sold
          </Text>
          <InputGroup flex={3}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input
              border="1px solid"
              borderColor={colorValue}
              type="text"
              placeholder="Filter By Event"
              _placeholder={{ color: colorValue }}
              color={colorValue}
              pl={38}
            />
          </InputGroup>{" "}
        </HStack>
        <HStack alignItems="center" justifyContent="flex-end" flex={1}>
          <HStack justifyContent="center" alignItems="center" spacing={0}>
            <Text fontSize={14} color={colorValue} className="gordita700">
              Export to:
            </Text>
            <Image pl={16} src={pdf} />
            <Image pl={16} src={xls} />
          </HStack>
          <Text pl={30} color={colorValue} className="gordita700">
            View All Events{" "}
          </Text>{" "}
        </HStack>
      </HStack>

      <Stack
        mt={24}
        gap={56}
        bg="#1C1C1C"
        borderRadius="6px"
        px="46px"
        py="56px"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box bg="#C2FFED" p={0} m={0} borderRadius="100%">
          <CircularProgress
            p={0}
            m={0}
            value={80}
            color="#02F6AD"
            ringColor="#02F6AD"
            size="120px"
            trackColor="transparent"
          >
            <CircularProgressLabel>
              <VStack spacing={0} gap={0}>
                <Text fontSize={16} className="gordita600">
                  67%
                </Text>
                <Text fontSize={12} className="gordita400">
                  689/1000
                </Text>
              </VStack>
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <VStack spacing={30} flex={1}>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#690DFF" trackColor="#C2B8FF" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#690DFF" trackColor="#C2B8FF" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#690DFF" trackColor="#C2B8FF" />
          </VStack>
          I
        </VStack>
        <VStack spacing={30} flex={1}>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#02F6AD" trackColor="#C2FFED" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#02F6AD" trackColor="#C2FFED" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#02F6AD" trackColor="#C2FFED" />
          </VStack>
        </VStack>
        <VStack spacing={30} flex={1}>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#FF5C00" trackColor="#FB8340" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#FF5C00" trackColor="#FB8340" />
          </VStack>
          <VStack w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text color="white.100" fontSize={14}>
                Jedi vs Anakin
              </Text>
              <Text color="white.100" fontSize={14}>
                18%
              </Text>
            </HStack>
            <Progress color="#FF5C00" trackColor="#FB8340" />
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default DashboardComponent;
