import {
  HStack,
  Stack,
  Box,
  Text,
  Flex,
  Select,
  Image,
} from "@chakra-ui/react";
import {
  carouselLeft,
  carouselRight,
  filters,
  filtersDark,
} from "../../static/assets/images";
import { HeaderSectionWrapper } from "../../styles/pages/home";
import _isEmpty from "lodash/isEmpty";
const SectionHeader = ({
  isMobile,
  isTablet,
  xsmall,
  colorMode,
  heading,
  flag,
  placeholder,
  options,
  isfilter = false,
  isEvents = false,
  isCarousel = false,
  onCarouselNext,
  onCarouselPrev,
  maxW,
}) => {
  return (
    <Flex justifyContent="center" w="100%" px={20}>
      <Box maxW={maxW} w="100%">
        <HeaderSectionWrapper>
          <Stack
            justifyContent={{ base: "center", sm: "space-between" }}
            spacing={0}
            gap={0}
            alignItems={{ base: "flex-start", md: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <Stack spacing={0} gap={0} alignItems="center" flexDir="row">
              <Text
                className="gordita700"
                fontSize={{ base: 22, md: 32, lg: 38 }}
              >
                {heading}
              </Text>
              <HStack
                pl={{ base: 10, lg: 16 }}
                className="gordita700"
                justifyContent="center"
                alignItems="flex-start"
                gap={0}
                spacing={0}
              >
                <Image
                  alt=""
                  style={{ width: xsmall ? "18px" : "28px" }}
                  src={flag}
                ></Image>
                <Box pl={{ base: 10, lg: 16 }}>
                  <Select
                    placeholder={placeholder}
                    p={0}
                    fontSize={isMobile ? 16 : 24}
                    color="primary.100"
                    w={{ base: "90px", md: "120px", lg: "120px" }}
                    border="none"
                    bg="transparent"
                    className="headerSelect"
                    h="26px"
                  >
                    {!_isEmpty(options) &&
                      options.map((option, index) => (
                        <option key={index}>{option.label}</option>
                      ))}
                  </Select>
                </Box>
              </HStack>
            </Stack>
            <Stack
              pt={{ base: 20, sm: 0 }}
              w={{ base: "100%", sm: "max" }}
              spacing={0}
              gap={10}
              alignItems="center"
              flexDir="row"
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                {isfilter && (
                  <Flex
                    cursor="pointer"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                  >
                    <Image
                      alt=""
                      style={{
                        width: xsmall ? "18px" : "24px",
                        height: "24px",
                      }}
                      src={colorMode === "light" ? filtersDark : filters}
                    ></Image>
                    <Text
                      fontSize={{ base: 12, sm: 14, lg: 16 }}
                      className="gordita600"
                      fontWeight="600"
                      pl={{ base: "", sm: "5px" }}
                    >
                      Filters
                    </Text>
                  </Flex>
                )}
                {isfilter && isEvents && <Text>|</Text>}
                {isEvents && (
                  <Text
                    className="gordita600"
                    fontSize={{ base: 12, sm: 14, lg: 16 }}
                  >
                    View All Events
                  </Text>
                )}
              </HStack>
              {isCarousel && (
                <HStack>
                  <Image
                    alt=""
                    onClick={onCarouselPrev}
                    style={{
                      width: isTablet ? (isMobile ? "24px" : "30px") : "38px",
                    }}
                    src={carouselLeft}
                  ></Image>
                  <Image
                    onClick={onCarouselNext}
                    style={{
                      width: isTablet ? (isMobile ? "24px" : "30px") : "38px",
                    }}
                    src={carouselRight}
                  ></Image>
                </HStack>
              )}
            </Stack>
          </Stack>
        </HeaderSectionWrapper>
      </Box>
    </Flex>
  );
};

export default SectionHeader;
