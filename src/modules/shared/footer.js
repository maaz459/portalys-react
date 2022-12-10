import {
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
  Stack,
  VStack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme/base";
import { FooterWrapper } from "../../styles/layout/footer";
import Typography from "./typography";
import { useMediaQuery } from "../../utils/useMediaQuery";
import {
  fbLight,
  fbDark,
  instaDark,
  instaLight,
  twitterDark,
  twitterLight,
  topIcon,
  DarkLogo,
  LightLogo,
} from "../../static/assets/images/index";
const Footer = () => {
  const isTablet = useMediaQuery("(max-width: 1320px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const xsmall = useMediaQuery("(max-width: 490px)");

  const { colorMode } = useColorMode();
  const value = useColorModeValue(
    theme.colors.white[100],
    theme.colors.black[100]
  );

  return (
    <FooterWrapper background={value}>
      <Box maxW="1662px" bg={value} h="100%" w="100%">
        <Stack
          justifyContent="space-between"
          alignItems="flex-start"
          direction={{ base: "column", md: "row" }}
          py="40px"
          px={isMobile ? "20px" : "90px"}
          h="100%"
        >
          <VStack w={isMobile ? "100%" : ""} h="100%">
            <Image
              alt=""
              style={{ width: "205px" }}
              src={colorMode === "light" ? DarkLogo : LightLogo}
            ></Image>
            {!isMobile && (
              <Typography color="white.200" pt="65" variant="footerText">
                © 2022 | All Rights Reserved.
              </Typography>
            )}
          </VStack>
          <Stack
            w={isMobile ? "100%" : ""}
            spacing={xsmall ? "24px" : "84px"}
            alignItems={xsmall ? "center" : "flex-start"}
            justifyContent="center"
            pt={isMobile ? 8 : 0}
            direction={xsmall ? "column" : "row"}
          >
            <VStack alignItems={xsmall ? "center" : "flex-start"}>
              <Typography color="primary.100" variant="footerHeading">
                About Us
              </Typography>
              {[
                { text: "Blog", link: "/" },
                { text: "Forum", link: "/" },
                { text: "Why Portalys?", link: "/" },
                { text: "We are hiring!", link: "/" },
              ].map(({ link, text }, index) => {
                return (
                  <Link key={index} href={link}>
                    <Typography isMobile={isTablet} variant="footerText">
                      {text}
                    </Typography>
                  </Link>
                );
              })}
            </VStack>
            <VStack alignItems={xsmall ? "center" : "flex-start"}>
              <Typography color="primary.100" variant="footerHeading">
                Helpful Links{" "}
              </Typography>
              {[
                { text: "Refund Policy", link: "/" },
                { text: "My Account", link: "/" },
                { text: "Help/FAQ", link: "/" },
                { text: "Security", link: "/" },
                { text: "Our Vision", link: "/" },
              ].map(({ link, text }, index) => {
                return (
                  <Link key={index} href={link}>
                    <Typography isMobile={isTablet} variant="footerText">
                      {text}
                    </Typography>
                  </Link>
                );
              })}
            </VStack>
            <VStack alignItems={xsmall ? "center" : "flex-start"}>
              <Typography color="primary.100" variant="footerHeading">
                Follow us on
              </Typography>
              {[
                {
                  text: "Facebook",
                  link: "/",
                  icon: colorMode === "light" ? fbDark : fbLight,
                },
                {
                  text: "Twitter",
                  link: "/",
                  icon: colorMode === "light" ? twitterDark : twitterLight,
                },
                {
                  text: "Instagram",
                  link: "/",
                  icon: colorMode === "light" ? instaDark : instaLight,
                },
              ].map(({ link, text, icon }, index) => {
                return (
                  <HStack key={index}>
                    <Image
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                      src={icon}
                    ></Image>
                    <Link key={index} href={link}>
                      <Typography isMobile={isTablet} variant="footerText">
                        {text}
                      </Typography>
                    </Link>
                  </HStack>
                );
              })}
            </VStack>
          </Stack>
          {isMobile && (
            <Box w="100%" display="flex" justifyContent="center">
              <Typography
                textAlign="center"
                color="white.200"
                py={8}
                variant="footerText"
              >
                © 2022 | All Rights Reserved.
              </Typography>
            </Box>
          )}
          <Stack
            direction={isMobile ? "row" : "column"}
            w={isMobile ? "100%" : ""}
            justifyContent={isMobile ? "flex-end" : ""}
            h="100%"
          >
            <Button
              bg="primary.100"
              w="46px"
              h="46px"
              px="15px"
              py="16px"
              borderRadius="75%"
              size="xs"
            >
              <Image
                alt=""
                style={{ width: "14px", height: "16px" }}
                src={topIcon}
              ></Image>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </FooterWrapper>
  );
};
export default Footer;
