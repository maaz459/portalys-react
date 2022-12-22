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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Text,
} from "@chakra-ui/react";
import LightLogo from "../../static/assets/images/logo.svg";
import DarkLogo from "../../static/assets/images/logoBlack.svg";
import darkOrganizeIcon from "../../static/assets/images/darkOrganizeIcon.svg";
import lightOrganizeIcon from "../../static/assets/images/lightOrganizeIcon.svg";
import { menuIcon, menuIconLight, portalysGreen } from "../../static/assets/images";
import userIcon from "../../static/assets/images/userIcon.svg";
import { theme } from "../../styles/theme/base";
import { NavbarWrapper } from "../../styles/layout/navbar";
import Typography from "./typography";
import { navLinks, userRoles } from "../../utils/constants";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { colorMode as colorModeImage } from "../../static/assets/images";
import { RegistraionModalTypes, registration } from "../../recoil/atoms/registration";
import { useRecoilState } from "recoil";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Password from "../pages/Password";
import ForgotPassword from "../pages/ForgotPassword";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { user } from "../../recoil/atoms/user";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticateUser, getUserInfo, logout, login, provider }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isLaptop = useMediaQuery("(max-width: 1320px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const xsmall = useMediaQuery("(max-width: 520px)");
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState(false);
  const [_, setRegistrationModal] = useRecoilState(registration);
  const [_U, setUser] = useRecoilState(user);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const organizerCheck = window.location.pathname.includes("organizer");

  const value = useColorModeValue(theme.colors.white[100], theme.colors.black[100]);
  const renderModal = () => {
    switch (_.modalType) {
      case RegistraionModalTypes.LOGIN:
        return <Login />;
      case RegistraionModalTypes.SIGNUP:
        return <SignUp />;
      case RegistraionModalTypes.PASSWORD:
        return <Password />;
      case RegistraionModalTypes.RESET_PASSWORD:
        return <Password />;
      case RegistraionModalTypes.FORGOT:
        return <ForgotPassword />;
    }
  };

  useEffect(() => {
    if (provider !== null) {
      setBtnText(true);
    } else {
      setBtnText(false);
    }
  }, [provider]);

  return (
    <NavbarWrapper background={colorMode === "light" ? value : "transparent"}>
      <Box maxW="1662px" bg={colorMode === "light" ? value : "transparent"} h="100%" w="100%" px={xsmall ? 10 : 20}>
        <HStack justifyContent="space-between" h="100%">
          <HStack h="100%">
            <Image alt="" src={colorMode === "light" ? DarkLogo : LightLogo}></Image>
            <HStack className="gordita600" display={isTablet ? "none" : "flex"} pl="40px">
              {navLinks.map(({ link, text }, index) => {
                return (
                  <Stack direction={"row"} key={index}>
                    <Link className="navLink" href={link}>
                      <Typography isMobile={isLaptop} variant="text">
                        {text}
                      </Typography>
                    </Link>
                    {index < 3 && <Typography>|</Typography>}
                  </Stack>
                );
              })}
            </HStack>
          </HStack>
          <HStack display={isTablet ? "none" : "flex"} h="100%">
            <HStack gap={"20px"} pl="40px">
              <HStack spacing={1}>
                <Link className="navLink" href={organizerCheck ? "/" : "/organizer"}>
                  <Typography className="gordita600" isMobile={isLaptop} variant="text">
                    I'm {organizerCheck ? "a User" : "an Organizer"}
                  </Typography>
                </Link>
                <Image alt="" src={colorMode === "light" ? darkOrganizeIcon : lightOrganizeIcon}></Image>
              </HStack>
              {organizerCheck && _U?.token ? (
                <Popover>
                  <PopoverTrigger>
                    <CBtn borderRadius="50px" bg="primary.100" size="xs" m={0} w="98px" h="46px">
                      <HStack gap={0}>
                        <Image alt="" style={{ width: "20px", height: "20px" }} src={menuIcon}></Image>
                        <Image alt="" style={{ width: "36px", height: "36px" }} src={userIcon}></Image>
                      </HStack>
                    </CBtn>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent maxW="200px" className="gordita600" color="black.300" p={0} m={0} bg="white.100">
                      <PopoverBody p={0} m={0}>
                        <Text
                          onClick={() => navigate("/dashboard")}
                          cursor="pointer"
                          colorScheme="blue"
                          p={4}
                          _hover={{ bg: "primary.100" }}
                        >
                          Dashboard
                        </Text>
                        <Text
                          onClick={() => {
                            setUser((lp) => {
                              return {
                                ...lp,
                                token: "",
                                userData: null,
                              };
                            });
                            localStorage.removeItem("user_d");
                            localStorage.removeItem("x-auth-token");
                          }}
                          cursor="pointer"
                          colorScheme="blue"
                          p={4}
                          _hover={{ bg: "primary.100" }}
                        >
                          Logout
                        </Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              ) : (
                <CBtn
                  borderRadius="50px"
                  bg="primary.100"
                  size="xs"
                  m={0}
                  w="98px"
                  h="46px"
                  onClick={() => {
                    setRegistrationModal((lp) => {
                      return {
                        ...lp,
                        openModal: true,
                        modalType: RegistraionModalTypes.SIGNUP,
                      };
                    });
                  }}
                >
                  <HStack gap={0}>
                    <Image alt="" style={{ width: "20px", height: "20px" }} src={menuIcon}></Image>
                    <Image alt="" style={{ width: "36px", height: "36px" }} src={userIcon}></Image>
                  </HStack>
                </CBtn>
              )}
            </HStack>
            <Box>
              <CBtn
                bg={colorMode === "light" ? "primary.100" : "white.100"}
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
                w="141px"
                h="48px"
                _focus={{
                  bg: "primary.100",
                }}
                _hover={{
                  bg: "primary.100",
                }}
                _active={{
                  bg: "primary.100",
                }}
                onClick={async () => {
                  try {
                    const userInfo = await getUserInfo();
                    if (userInfo) {
                      await logout();
                    }
                  } catch (err) {
                    await login();
                  }
                }}
              >
                {btnText ? "Wallet Connected" : "Connect Wallet"}
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
                  <Link className="navLink" href={organizerCheck ? "/" : "/organizer"}>
                    <Typography color="black.100" isMobile={isLaptop} variant="text" className="gordita600">
                      I'm {organizerCheck ? "a User" : "an Organizer"}
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
                      userRole: organizerCheck ? userRoles.ATTENDEE : userRoles.ORGANIZER,
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
                  _focus={{
                    bg: "primary.100",
                  }}
                  _hover={{
                    bg: "primary.100",
                  }}
                  _active={{
                    bg: "primary.100",
                  }}
                  onClick={async () => {
                    try {
                      const userInfo = await getUserInfo();
                      if (userInfo) {
                        await logout();
                      }
                    } catch (err) {
                      await login();
                    }
                  }}
                >
                  {btnText ? "Wallet Connected" : "Connect Wallet"}
                </CBtn>
              </Box>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Modal
        closeOnOverlayClick={false}
        isOpen={_.openModal}
        onClose={() => {
          setRegistrationModal((lp) => {
            return { ...lp, openModal: false, userRole: "" };
          });
        }}
        size="lg"
        isCentered={isLaptop ? false : true}
      >
        <ModalOverlay />
        <ModalContent mx={10} bg="white.100" color="black.100">
          <ModalCloseButton />
          <ModalBody>
            <VStack py={{ base: 24, md: 60 }} w="100%">
              <Image alt="" style={{ width: "243px", height: "73px" }} src={portalysGreen} />
            </VStack>
            {renderModal()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </NavbarWrapper>
  );
};
export default Navbar;
