import {
  Box,
  HStack,
  useColorMode,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Button as CBtn,
  Text,
  Input,
  Link,
  Image,
} from "@chakra-ui/react";
import LightLogo from "../../../static/assets/images/logo.svg";
import DarkLogo from "../../../static/assets/images/logoBlack.svg";
import darkOrganizeIcon from "../../../static/assets/images/darkOrganizeIcon.svg";
import lightOrganizeIcon from "../../../static/assets/images/lightOrganizeIcon.svg";
import { menuIcon, menuIconLight } from "../../../static/assets/images";
import userIcon from "../../../static/assets/images/userIcon.svg";
import { theme } from "../../../styles/theme/base";
import { NavbarWrapper } from "../../../styles/layout/navbar";
import Typography from "../../shared/typography";
import { navLinks } from "../../../utils/constants";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { colorMode as colorModeImage } from "../../../static/assets/images";
import { RegistraionModalTypes, registration } from "../../../recoil/atoms/registration";
import { useRecoilState } from "recoil";
const Navbar = ({ navbarHeight, dashboardName }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLaptop = useMediaQuery("(max-width: 1320px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const xsmall = useMediaQuery("(max-width: 520px)");
  const [_, setRegistrationModal] = useRecoilState(registration);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const value = useColorModeValue(theme.colors.white[100], theme.colors.black[100]);

  return (
    <>
      <Box pos="fixed" bg={value} zIndex={100} h={navbarHeight} w="100%" px={33}>
        <HStack justifyContent="space-between" h="100%">
          <Image alt="" src={colorMode === "light" ? DarkLogo : LightLogo}></Image>
          <HStack
            display={isTablet ? "none" : "flex"}
            flex={{ base: 2, md: 4, lg: 3, "3xl": 2 }}
            justifyContent="space-between"
            h="100%"
          >
            <Box></Box>
            <HStack spacing={16} gap={0}>
              <Text color="primary.100" className="gordita700" fontSize={18}>
                {dashboardName || "Dashboard"}
              </Text>
              <Input
                className="inter"
                color="white.100"
                _placeholder={{ color: "white.100" }}
                placeholder="Search"
                bg="black.300"
                w="357px"
              />
            </HStack>
          </HStack>
          <HStack display={isTablet ? "none" : "flex"} justifyContent="flex-end" flex={{ md: 2, lg: 3 }} h="100%">
            <HStack gap={"20px"} pl="40px">
              <CBtn
                borderRadius="50px"
                bg="primary.100"
                size="xs"
                m={0}
                w="98px"
                h="46px"
                onClick={() => console.log("")}
              >
                <HStack gap={0}>
                  <Image alt="" style={{ width: "20px", height: "20px" }} src={menuIcon}></Image>
                  <Image alt="" style={{ width: "36px", height: "36px" }} src={userIcon}></Image>
                </HStack>
              </CBtn>
            </HStack>
            <Box>
              <CBtn
                bg="primary.100"
                borderRadius="100%"
                w={isMobile ? "" : "46px"}
                h={isMobile ? "" : "46px"}
                p={0}
                onClick={() => {
                  onClose();
                  toggleColorMode();
                }}
              >
                <Image alt="" style={{ width: "23px", height: "23px" }} src={colorModeImage}></Image>
              </CBtn>
            </Box>
          </HStack>
          <Box display={isTablet ? "block" : "none"} cursor="pointer" onClick={onOpen}>
            <Image alt="" src={colorMode === "light" ? menuIcon : menuIconLight}></Image>
          </Box>
        </HStack>
      </Box>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton color="black.100" alignSelf="end" />
          <DrawerBody w="100%" bg="white">
            <VStack className="gordita600" justifyContent="flex-start" alignItems="flex-start" pt={8}>
              {navLinks.map(({ link, text }, index) => {
                return (
                  <Stack direction={"row"} key={index}>
                    <Link href={link}>
                      <Typography color="black.100" isMobile={isLaptop} variant="text">
                        {text}
                      </Typography>
                    </Link>
                  </Stack>
                );
              })}
            </VStack>
            <HStack mt={10} justifyContent="space-between" w="100%" h="100%">
              <HStack gap={"70px"}>
                <HStack spacing={1}>
                  <Link className="navLink" href="/">
                    <Typography color="black.100" isMobile={isLaptop} variant="text" className="gordita600">
                      I'm an Organizer
                    </Typography>
                  </Link>
                  <Image alt="" src={darkOrganizeIcon}></Image>
                </HStack>
              </HStack>
            </HStack>
            <HStack mt={20}>
              <CBtn
                onClick={() => {
                  setRegistrationModal((lp) => {
                    return {
                      ...lp,
                      openModal: true,
                      modalType: RegistraionModalTypes.SIGNUP,
                    };
                  });
                }}
                bg="primary.100"
                borderRadius="50px"
              >
                <HStack gap={0}>
                  <Image alt="" style={{ width: "18px", height: "18px" }} src={menuIcon}></Image>
                  <Image alt="" style={{ width: "32px", height: "32px" }} src={userIcon}></Image>
                </HStack>
              </CBtn>
              <Box>
                <CBtn
                  bg="primary.100"
                  borderRadius="100%"
                  w={isMobile ? "" : "46px"}
                  h={isMobile ? "" : "46px"}
                  p={isMobile ? 2 : 0}
                  m={0}
                  onClick={() => {
                    onClose();
                    toggleColorMode();
                  }}
                >
                  <Image alt="" style={{ width: "24px", height: "24px" }} src={colorModeImage}></Image>
                </CBtn>
              </Box>
              <Box>
                <CBtn
                  bg="primary.100"
                  borderRadius="100px"
                  size="xs"
                  fontSize={{ base: 14, md: 16 }}
                  className="poppinsBold"
                  m={0}
                  w="121px"
                  h="38px"
                >
                  Connect Wallet
                </CBtn>
              </Box>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Navbar;
