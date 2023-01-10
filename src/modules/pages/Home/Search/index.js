import { useRef, useState } from "react";
import {
  HStack,
  useColorMode,
  Stack,
  Box,
  chakra,
  Text,
  Button,
  Flex,
  VStack,
  Select,
  Input,
  Divider,
  Image,
} from "@chakra-ui/react";
import Typography from "../../../shared/typography";
import {
  cheveronLeft,
  cheveronRight,
  filters,
  colorMode as colorModeImage,
  filtersDark,
} from "../../../../static/assets/images";
import { useMediaQuery } from "../../../../utils/useMediaQuery";
import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  hero1,
  hero3,
  hero4,
  hero5,
} from "../../../../static/assets/images";
import { SearchWrapper } from "../../../../styles/pages/home";
import { theme } from "../../../../styles/theme/base";
import { search } from "../../../../static/assets/images";
import { bool } from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchBar from "./searchbar";

const btnColors = ["primary.100", "#AA08B8", "#FBF100", "#690DFF", "#FF5C00"];
const textColors = [
  "black.100",
  "white.100",
  "black.100",
  "white.100",
  "black.100",
];

const ImageRender = ({ image, zIndex, isMobile }) => {
  const { colorMode } = useColorMode();

  return (
    <Box zIndex={zIndex} w="100%" pos="absolute" top={isMobile ? 0 : -71}>
      <Image alt="" className="thumbnail" w="100%" src={image}></Image>
    </Box>
  );
};

const Tabs = ({ name, color, setSelected }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Typography
      cursor="pointer"
      onClick={() => setSelected(name)}
      color={color}
      variant="h4"
      isMobile={isMobile}
    >
      {name}
    </Typography>
  );
};

const SearchSection = ({ isMobile, isTablet, xsmall, maxW }) => {
  const [selected, setSelected] = useState("Events");
  const [activeIndex, setActiveIndex] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();
  const swiperRef = useRef();

  return (
    <Box w="100%" pos="relative" zIndex={0}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={true}
        // onSlideChange={() => {
        //   setActiveIndex(swiperRef.current.activeIndex);
        // }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -10,
        }}
      >
        {[
          {
            image: hero1,
          },
          {
            image: thumbnail1,
          },
          {
            image: hero3,
          },
          {
            image: hero4,
          },
          {
            image: hero5,
          },
        ].map(({ btnColor, image, textColor }, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "100%", position: "relative" }}
          >
            <ImageRender isMobile={isMobile} image={image} zIndex={-4} />
            <ImageRender isMobile={isMobile} image={thumbnail2} zIndex={-3} />
            <ImageRender isMobile={isMobile} image={thumbnail3} zIndex={-2} />
            <ImageRender isMobile={isMobile} image={thumbnail4} zIndex={-1} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        pos="relative"
        px={{ base: 10, sm: 20 }}
        zIndex={100}
        justifyContent="center"
        display="flex"
      >
        <Box
          w="100%"
          mt={isMobile ? "2%" : ""}
          pt={isMobile ? "" : "8%"}
          pb={{ base: 0, md: 44 }}
          maxW={maxW}
          display="flex"
          flexDir="column"
          alignItems={isMobile ? "center" : ""}
        >
          <Box w="100%" maxW={isMobile ? "330px" : "586px"}>
            <Box
              fontSize={{ base: 20, md: 32, lg: 40 }}
              lineHeight={{ base: 24, md: 38, lg: 48 }}
              className="interBold"
              textAlign={isMobile ? "center" : ""}
              color="white.100"
            >
              <chakra.span color="primary.100"> A</chakra.span> Blockchain{" "}
              <chakra.span color="primary.100">
                Event Ticketing Marketplace and B2B Solution for Event
              </chakra.span>{" "}
              Organizers <chakra.span color="primary.100">and</chakra.span>{" "}
              Artists
            </Box>

            <Box
              display="flex"
              justifyContent={{ base: "center", md: "flex-start" }}
              mt={{ base: 10, md: 56 }}
              maxW={{ base: "100%", md: "227px" }}
            >
              <Button
                borderRadius="50px"
                py={{ base: "0", md: "", lg: "25px" }}
                className="gordita700"
                color={textColors[activeIndex]}
                w={{ base: "", md: "100%" }}
                fontSize={{ base: 12, md: 15 }}
                bg={btnColors[activeIndex]}
              >
                Become A Attendee
              </Button>
            </Box>
          </Box>
          <Box w="100%" pt={{ base: "5%", md: "10%" }}>
            <Stack
              gap={0}
              spacing={0}
              className="gordita700"
              w="100%"
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Stack
                justifyContent={{ base: "center", md: "flex-start" }}
                flex={1}
                direction="row"
                alignItems="center"
              >
                <Text
                  color="white.100"
                  className="gordita700"
                  fontSize={{ base: 22, md: 32, lg: 38 }}
                >
                  Browse
                </Text>
                <HStack
                  alignItems="center"
                  justifyContent="center"
                  pl={isMobile ? 2 : 8}
                >
                  <Tabs
                    color={selected === "Events" ? "primary.100" : "white.100"}
                    setSelected={setSelected}
                    name={"Events"}
                  />
                  <Text
                    fontSize={{ base: 16, md: 20, lg: 22 }}
                    color="primary.100"
                  >
                    |
                  </Text>
                  <Tabs
                    color={
                      selected === "Festivals" ? "primary.100" : "white.100"
                    }
                    setSelected={setSelected}
                    name={"Festivals"}
                  />
                  <Box display={isMobile ? "none" : "flex"} pl="30px">
                    <Flex
                      borderRadius="30px"
                      color="black.200"
                      w="100%"
                      maxW="565px"
                      pr={2}
                      h="52px"
                      alignItems="center"
                    >
                      <HStack
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                        gap={0}
                      >
                        <SearchBar />
                      </HStack>
                    </Flex>
                  </Box>
                  <HStack display={isMobile ? "none" : "flex"} pl="30px">
                    <Image
                      alt=""
                      style={{ width: "24px", height: "24px" }}
                      src={filters}
                    ></Image>
                    <Text
                      fontSize={{ base: 12, sm: 14, lg: 16 }}
                      className="gordita600"
                      fontWeight="600"
                    >
                      Filters
                    </Text>
                  </HStack>
                </HStack>
              </Stack>

              <Stack
                alignItems="center"
                direction="row"
                justifyContent={isMobile ? "space-between" : "center"}
              >
                <HStack>
                  <Box display={isMobile ? "flex" : "none"}>
                    <Button
                      bg="black.100"
                      border="solid 4px"
                      borderColor="primary.100"
                      borderRadius="100%"
                      p={2}
                    >
                      <Image
                        alt=""
                        style={{
                          width: xsmall ? "18px" : "24px",
                          height: "24px",
                        }}
                        src={search}
                      ></Image>
                    </Button>
                  </Box>

                  <HStack display={isMobile ? "flex" : "none"}>
                    <Image
                      alt=""
                      style={{
                        width: xsmall ? "18px" : "24px",
                        height: "24px",
                      }}
                      src={filters}
                    ></Image>
                    <Text
                      fontSize={{ base: 12, sm: 14, lg: 16 }}
                      className="poppinsBold"
                      pl={{ base: "", sm: "5px" }}
                    >
                      Filters
                    </Text>
                  </HStack>
                </HStack>
                <HStack>
                  <HStack alignItems="center" justifyContent="center">
                    <ChevronLeftIcon
                      width={isTablet ? (isMobile ? "24px" : "30px") : "38px"}
                      color="rgba(0,0,0,0.5)"
                      h={isTablet ? (isMobile ? "24px" : "30px") : "38px"}
                      bg="white"
                      p={{ base: "1px", md: "5px" }}
                      borderRadius="100%"
                      cursor="pointer"
                      onClick={() => {
                        swiperRef.current?.slidePrev();
                        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 4);
                      }}
                    />

                    <ChevronRightIcon
                      width={isTablet ? (isMobile ? "24px" : "30px") : "38px"}
                      color="rgba(0,0,0,0.5)"
                      h={isTablet ? (isMobile ? "24px" : "30px") : "38px"}
                      bg="white"
                      p={{ base: "1px", md: "5px" }}
                      borderRadius="100%"
                      cursor="pointer"
                      onClick={() => {
                        swiperRef.current?.slideNext();
                        setActiveIndex(activeIndex < 4 ? activeIndex + 1 : 0);
                      }}
                    />
                  </HStack>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
