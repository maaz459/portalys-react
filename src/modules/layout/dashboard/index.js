import { Box, useColorModeValue } from "@chakra-ui/react";
import { node, string } from "prop-types";
import React from "react";
import { MainWrapper, Child } from "../../../styles/layout/dashboard";
import Sidebar from "./sidebar";
import { theme } from "../../../styles/theme/base";
import Navbar from "./navbar";

const DashboardLayout = ({ children, dashboardName }) => {
  const value = useColorModeValue(
    theme.colors.white[100],
    theme.colors.black[100]
  );
  const navbarHeight = "78px";
  const sidebarWidth = "278px";
  const bodyMargin = 278;

  return (
    <MainWrapper background={value}>
      <Navbar dashboardName={dashboardName} navbarHeight={navbarHeight} />
      <Box w="100%">
        <Sidebar navbarHeight={navbarHeight} sidebarWidth={sidebarWidth} />
        <Box pl={`${bodyMargin + 28}px`} pr={28} w="100%">
          <Box borderTop="1px solid" color="black.300" py={30}>
            <Child id="main">{children}</Child>
          </Box>
        </Box>
      </Box>
    </MainWrapper>
  );
};

DashboardLayout.propTypes = {
  children: node,
  dashboardName: string,
};

export default DashboardLayout;
