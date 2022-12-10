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
import { Icon } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Events = ({ isMobile, isTablet, xsmall, colorMode, events, maxW }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [likeIndex, setLikeIndex] = useState(-1);

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
            isfilter: true,
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
                slidesPerView={isMobile ? 1 : 3.2}
                onSlideChange={() =>
                  setActiveIndex(swiperRef.current.activeIndex)
                }
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {!_isEmpty(events) &&
                  events.map(
                    (
                      { image, heading, organizer, date, time, categories },
                      index
                    ) => (
                      <SwiperSlide key={index}>
                        <Box w="100%">
                          <VStack w="100%">
                            <Box w="100%" pos="relative">
                              {likeIndex === index ? (
                                <Icon
                                  as={AiFillHeart}
                                  color="red"
                                  pos="absolute"
                                  right={10}
                                  top={10}
                                  w="25px"
                                  cursor="pointer"
                                />
                              ) : (
                                <Icon
                                  as={AiOutlineHeart}
                                  onClick={() => setLikeIndex(index)}
                                  color="primary.100"
                                  pos="absolute"
                                  right={10}
                                  top={10}
                                  w="25px"
                                  h="22px"
                                  cursor="pointer"
                                />
                              )}
                              <Image
                                alt=""
                                style={{ width: "100%" }}
                                src={image}
                              ></Image>
                            </Box>
                            <VStack
                              alignItems={{ base: "center", sm: "flex-start" }}
                              p={{ base: 10, sm: 20 }}
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
                                <chakra.span> | {organizer}</chakra.span>
                              </Box>
                              {/* Date */}
                              <HStack
                                fontSize={{ base: 14, md: 16, "3xl": 16 }}
                                w="100%"
                                pt={16}
                                className="gordita400"
                              >
                                <Text>{date}</Text>
                                <Text> | </Text>
                                <Text>{time}</Text>
                              </HStack>
                              {/* Organizer */}
                              <HStack
                                alignContent={{
                                  base: "flex-start",
                                  sm: "flex-start",
                                }}
                                w="100%"
                                pt={16}
                              >
                                <Image src={jazz} alt=""></Image>
                                <Text
                                  fontSize={{ base: 14, md: 16, "3xl": 16 }}
                                  className="gordita600"
                                >
                                  {organizer}
                                </Text>
                              </HStack>
                              {/* Category */}
                              <HStack
                                w="100%"
                                alignContent="flex-start"
                                pt={16}
                              >
                                {categories.map((cat, index) => (
                                  <Box
                                    borderRadius="25px"
                                    border="1px"
                                    py="5px"
                                    px="15px"
                                    key={cat + index}
                                    fontSize={{ base: 12, sm: 13, "3xl": 14 }}
                                  >
                                    {cat}
                                  </Box>
                                ))}
                              </HStack>
                            </VStack>
                          </VStack>
                        </Box>
                      </SwiperSlide>
                    )
                  )}
                {!_isEmpty(events) &&
                  events.length < 4 &&
                  Array.from(Array(4 - events.length)).map((val, index) => (
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

export default Events;
