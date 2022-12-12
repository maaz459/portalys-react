import {
  useDisclosure,
  VStack,
  useColorModeValue,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { SidebarWrapper } from "../../../styles/layout/sidebar";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import { theme } from "../../../styles/theme/base";
import { useNavigate } from "react-router-dom";
import {
  collectablesPrimary,
  collectablesLight,
  dashboardLight,
  dashboardPrimary,
  eventsLight,
  eventsPrimary,
  ordersLight,
  ordersPrimary,
  settingLight,
  settingPrimary,
  logout,
  dashboardDark,
  eventsDark,
  ordersDark,
  collectablesDark,
  settingDark,
} from "../../../static/assets/images/dashboard/sidebar";
import { useState } from "react";

const RenderSideLink = ({
  selectedImage,
  lightImage,
  name,
  link,
  darkImage,
}) => {
  const [hover, setHover] = useState("");
  const navigate = useNavigate();
  const imageVal = useColorModeValue(darkImage, lightImage);
  const textValue = useColorModeValue(
    theme.colors.black[100],
    theme.colors.white[100]
  );
  const checkPath = window.location.pathname?.includes(name?.toLowerCase());
  return (
    <HStack
      alignItems="center"
      w="100%"
      cursor="pointer"
      spacing={0}
      gap={0}
      onClick={() => navigate(link)}
      onMouseEnter={() => setHover(name)}
      onMouseLeave={() => setHover("")}
    >
      <Image
        style={{ width: "17px", height: "17px" }}
        alt=""
        src={hover || checkPath ? selectedImage : imageVal}
      ></Image>
      <Text
        color={hover || checkPath ? "primary.100" : textValue}
        pt={1}
        pl={20}
        className="gordita600"
      >
        {name}
      </Text>
    </HStack>
  );
};

const Sidebar = ({ navbarHeight, sidebarWidth }) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const value = useColorModeValue(
    theme.colors.white[200],
    theme.colors.black[300]
  );

  const navigate = useNavigate();
  return (
    <>
      <SidebarWrapper marginTop={navbarHeight}>
        <VStack
          h={`calc(100vh - ${navbarHeight})`}
          p={36}
          maxW={sidebarWidth}
          w="100%"
          bg={value}
          pos="fixed"
          left={0}
          justifyContent="space-between"
        >
          <VStack w="100%" spacing={44} gap={0}>
            {[
              {
                name: "Dashboard",
                selectedImage: dashboardPrimary,
                lightImage: dashboardLight,
                darkImage: dashboardDark,
                link: "/dashboard",
              },
              {
                name: "Events",
                selectedImage: eventsPrimary,
                lightImage: eventsLight,
                darkImage: eventsDark,
                link: "/events",
              },
              {
                name: "Orders",
                selectedImage: ordersPrimary,
                lightImage: ordersLight,
                darkImage: ordersDark,
                link: "",
              },
              // {
              //   name: "Collectables",
              //   selectedImage: collectablesPrimary,
              //   lightImage: collectablesLight,
              //   darkImage: collectablesDark,
              //   link: "",
              // },
              {
                name: "Settings",
                selectedImage: settingPrimary,
                lightImage: settingLight,
                darkImage: settingDark,
                link: "",
              },
            ].map((sideLink, index) => (
              <RenderSideLink key={index} {...sideLink} />
            ))}
          </VStack>
          <RenderSideLink
            name="Logout"
            lightImage={logout}
            darkImage={logout}
            selectedImage={logout}
            link="/"
          />
        </VStack>
        {/* <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent className="sidebarDrawer" alignItems="center">
            <DrawerBody w="100%" bg="white">
              <VStack>
                <Box mt={24}>
                  <Image src={logo1}></Image>
                </Box>
                <VStack spacing={36} pt={44}>
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={homeDark}
                    lightImage={homeLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={exchangeDark}
                    lightImage={exchangeLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={cartDark}
                    lightImage={cartLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={copySuccessDark}
                    lightImage={copySuccessLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={walletDark}
                    lightImage={walletLight}
                  />
                  <Box w="100%">
                    <Divider
                      bg="primary.200"
                      borderColor="primary.200"
                      border="1px solid"
                      w="100%"
                      opacity={0.2}
                      borderRadius="4px"
                    />
                  </Box>
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={globalDark}
                    lightImage={globalLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={usdDark}
                    lightImage={usdLight}
                  />
                  <RenderNavImage
                    onClick={() => navigate("/")}
                    darkImage={avatar}
                    lightImage={avatar}
                  />
                </VStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer> */}
      </SidebarWrapper>
    </>
  );
};
export default Sidebar;
