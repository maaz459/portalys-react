import {
  useColorMode,
  Stack,
  Box,
  Text,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import SearchSection from "./Search";
import Events from "./Events";
import SectionHeader from "../../shared/sectionHeader";
import {
  caro1,
  caro2,
  caro3,
  djDark,
  djLight,
  fest1,
  fest2,
  fest3,
  fest4,
  fest5,
  france,
  interestingDark,
  interestingLight,
  map,
  newsDark,
  newsLight,
  telegraphDark,
  telegraphLight,
  varietyDark,
  varietyLight,
  djBg,
  djBgOverlay,
  djBgOverlayLight,
  organizerBg,
  organizerMask,
  dance,
  blur1,
} from "../../../static/assets/images";
import Festivals from "./Festivals";
import Tickets from "./Tickets";
import FAQs from "./FAQs";
import { HomeWrapper } from "../../../styles/pages/home";
import Button from "../../shared/button";
import Features from "./Features";
import { useEffect } from "react";
const events = [
  {
    image: caro1,
    heading: "Automatic Invite Raresh, Ion Ludwig Eomatic Writing",
    organizer: "Masetor Jazz",
    date: "Sun, 15 dec, 2022",
    time: "12:00pm",
    categories: ["Industry", "Techno", "Bass"],
  },
  {
    image: caro2,
    heading: "Automatic Invite Raresh, Ion Ludwig Eomatic Writing",
    organizer: "Masetor Jazz",
    date: "Sun, 15 dec, 2022",
    time: "12:00pm",
    categories: ["Industry", "Techno", "Bass"],
  },
  {
    image: caro3,
    heading: "Automatic Invite Raresh, Ion Ludwig Eomatic Writing",
    organizer: "Masetor Jazz",
    date: "Sun, 15 dec, 2022",
    time: "12:00pm",
    categories: ["Industry", "Techno", "Bass"],
  },
  {
    image: caro2,
    heading: "Automatic Invite Raresh, Ion Ludwig Eomatic Writing",
    organizer: "Masetor Jazz",
    date: "Sun, 15 dec, 2022",
    time: "12:00pm",
    categories: ["Industry", "Techno", "Bass"],
  },
];

const festivals = [
  {
    image: fest1,
    heading: "Dernier Cri - Fasme - Belaria - Garfld",
    date: "Today | 11:59 PM",
  },
  {
    image: fest2,
    heading: "Dernier Cri - Fasme - Belaria - Garfld",
    date: "Today | 11:59 PM",
  },
  {
    image: fest3,
    heading: "Dernier Cri - Fasme - Belaria - Garfld",
    date: "Today | 11:59 PM",
  },
  {
    image: fest4,
    heading: "Dernier Cri - Fasme - Belaria - Garfld",
    date: "Today | 11:59 PM",
  },
  {
    image: fest2,
    heading: "Dernier Cri - Fasme - Belaria - Garfld",
    date: "Today | 11:59 PM",
  },
];

const HomePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const xsmall = useMediaQuery("(max-width: 520px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const maxW = "1662px";

  return (
    <HomeWrapper>
      <Stack alignItems="center" justifyContent="center" w="100%" spacing={0}>
        <SearchSection {...{ isMobile, xsmall, isTablet, maxW }} />
        <Events {...{ isMobile, xsmall, isTablet, colorMode, events, maxW }} />
        <Box
          alignItems="center"
          display="flex"
          flexDir="column"
          w="100%"
          pt={{ base: 71, sm: 100 }}
        >
          <SectionHeader
            heading="Explore Cities in"
            flag={france}
            placeholder="France"
            {...{ isMobile, isTablet, xsmall, maxW }}
          />
          <Box px={20} maxW="1662px" mt={{ base: 16, sm: 60 }} w="100%">
            <Image alt="" style={{ width: "100%" }} src={map}></Image>
          </Box>
        </Box>
        <Festivals
          {...{ isMobile, xsmall, isTablet, colorMode, festivals, maxW }}
        />
        <Tickets
          {...{ colorMode, isMobile, isTablet, xsmall, maxW: "1900px" }}
        />
        <Features
          {...{
            features: [
              {
                image:
                  colorMode === "light" ? interestingDark : interestingLight,
              },
              {
                image: colorMode === "light" ? djDark : djLight,
              },
              {
                image: colorMode === "light" ? varietyDark : varietyLight,
              },
              {
                image: colorMode === "light" ? newsDark : newsLight,
              },
              {
                image: colorMode === "light" ? telegraphDark : telegraphLight,
              },
            ],
            isMobile,
            maxW,
          }}
        />
        <Box w="100%" display="flex" justifyContent="center">
          <Box maxW="1662px" w="100%" pos="relative" mt={108} px={10}>
            <Image
              alt=""
              style={{ padding: "20px", width: "100%", height: "100%" }}
              src={djBg}
            />
            <Image
              alt=""
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                height: "100%",
              }}
              src={colorMode === "light" ? djBgOverlayLight : djBgOverlay}
            />
          </Box>
        </Box>
        <Box maxW={maxW}>
          <Box mt={100}>
            <Text
              className="gordita700"
              fontSize={{ base: 22, md: 32, lg: 38 }}
              textAlign="center"
            >
              Creating event tickets, reimagined{" "}
            </Text>{" "}
          </Box>
        </Box>
        <FAQs {...{ colorMode, isMobile, isTablet, xsmall, maxW }} />
        <Flex
          py={"10%"}
          pos="relative"
          justifyContent="center"
          w="100%"
          zIndex={0}
          maxW="1900px"
          // overflow="hidden"
          px={10}
        >
          <Box top={-150} right={-250} pos="absolute" zIndex={-1} maxW="486px">
            <Image
              alt=""
              style={{
                width: isMobile ? "" : "",
                height: isMobile ? "350px" : "486px",
              }}
              src={blur1}
            />
          </Box>
          <Box
            pos="relative"
            zIndex={0}
            py="108"
            bg="#191A1C"
            borderRadius="12px"
            textAlign="center"
            maxW="1662px"
            w="100%"
            overflow="hidden"
          >
            <Image
              alt=""
              src={organizerBg}
              style={{ position: "absolute", zIndex: -2, right: 0, top: 0 }}
            ></Image>
            <Image
              alt=""
              src={organizerMask}
              style={{
                position: "absolute",
                zIndex: -2,
                top: 0,
                width: "100%",
              }}
            ></Image>
            <Text
              fontSize={{ base: 20, md: 32, lg: 56 }}
              className="gordita700 organizerText"
            >
              Become an Organizer
            </Text>
            <Text
              color="white.200"
              fontSize={{ base: 14, lg: 16 }}
              className="gordita400"
              maxW={{ base: "325px", sm: "100%" }}
            >
              Create your first event and sell tickets on biggest 2+ billion
              users plaftorm
            </Text>
            <Box mt={30}>
              <Button borderRadius="50px">Become A Host</Button>
            </Box>
          </Box>
        </Flex>

        <Flex mt={{ base: 60, md: "10%" }} justifyContent="center" w="100%">
          <Flex px={20} maxW="1662px" wrap="wrap" w="100%">
            <Box w="100%" flexBasis={{ base: "100%", md: "50%" }}>
              <VStack w="100%" justifyContent="flex-start" alignItems="center">
                <Text
                  maxW={{ base: "100%", md: "484px" }}
                  color="primary.100"
                  className="gordita700"
                  fontSize={{ base: 36, md: 50, lg: 58 }}
                  lineHeight={{ base: "", md: "58px", lg: "82px" }}
                  textAlign={{ base: "center", md: "start" }}
                  w="100%"
                >
                  Be Part of the Change{" "}
                </Text>
                <Text
                  className="gordita400"
                  fontSize={{ base: 16, md: 24, lg: 30 }}
                  textAlign={{ base: "center", md: "start" }}
                  w="100%"
                  maxW="484px"
                >
                  We are here to disrupt the event-ticketing status quo.{" "}
                </Text>
              </VStack>
            </Box>
            <Box
              mt={{ base: 60, md: 0 }}
              flexBasis={{ base: "100%", md: "50%" }}
            >
              <Image style={{ width: "100%" }} src={dance} />
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </HomeWrapper>
  );
};

export default HomePage;
