import {
  Box,
  HStack,
  Text,
  VStack,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import SectionHeader from "../../../shared/sectionHeader";
import { france, caro1, jazz } from "../../../../static/assets/images";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import _isEmpty from "lodash/isEmpty";
const Festivals = ({
  isMobile,
  isTablet,
  xsmall,
  colorMode,
  festivals,
  maxW,
}) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const value = useColorModeValue("black.100", "white.200");
  return (
    <Box w="100%">
      <Box mt={{ base: 71, lg: 100 }}>
        <SectionHeader
          heading="For You in"
          flag={france}
          placeholder="France"
          onCarouselNext={() => swiperRef.current?.slideNext()}
          onCarouselPrev={() => swiperRef.current?.slidePrev()}
          {...{
            isMobile,
            isTablet,
            xsmall,
            colorMode,
            isCarousel: true,
            isEvents: true,
            isfilter: false,
            maxW,
          }}
        />
        <Box
          px={{ base: 20, sm: 36, md: 20 }}
          pl={{ lg: 44 }}
          w="100%"
          justifyContent="center"
          display="flex"
          mt={60}
        >
          <Box w="100%" maxW="1700">
            <HStack w="100%">
              <Swiper
                spaceBetween={24}
                slidesPerView={isMobile ? (xsmall ? 1 : 2) : 4.2}
                onSlideChange={() =>
                  setActiveIndex(swiperRef.current.activeIndex)
                }
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {!_isEmpty(festivals) &&
                  festivals.map(({ image, heading, date }, index) => (
                    <SwiperSlide key={index}>
                      <Box w="100%">
                        <VStack w="100%">
                          <Image style={{ width: "100%" }} src={image}></Image>
                          <VStack
                            alignItems={{ base: "center", sm: "flex-start" }}
                            py={{ base: 10, sm: 20 }}
                            w="100%"
                            gap={0}
                            spacing={0}
                            color={value}
                          >
                            {/* Name */}
                            <Box
                              maxW={{ base: "100%", sm: "398px" }}
                              className="gordita700"
                              w="100%"
                              fontSize={{ base: "", sm: 16, "3xl": 18 }}
                              // textAlign={{ base: "center", sm: "left" }}
                            >
                              {heading}
                            </Box>
                            {/* Date */}
                            <HStack
                              fontSize={{ base: 14, md: 16, "3xl": 16 }}
                              w="100%"
                              pt={16}
                              className="gordita400"
                              // justifyContent={{
                              //   base: "center",
                              //   sm: "flex-start",
                              // }}
                            >
                              <Text>{date}</Text>
                            </HStack>
                          </VStack>
                        </VStack>
                      </Box>
                    </SwiperSlide>
                  ))}
                {!_isEmpty(festivals) &&
                  festivals.length < 4 &&
                  Array.from(Array(4 - festivals.length)).map((val, index) => (
                    <SwiperSlide>
                      <Box w="100%"></Box>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Festivals;
