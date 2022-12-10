import { useColorModeValue } from "@chakra-ui/react";
import { node, string } from "prop-types";
import React from "react";
import { MainWrapper, Child, Header } from "../../styles/layout/layout";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
import { theme } from "../../styles/theme/base";

const Layout = ({ children }) => {
  const value = useColorModeValue(
    theme.colors.white[100],
    theme.colors.black[100]
  );
  return (
    <MainWrapper background={value}>
      <Header>
        <Navbar />
      </Header>
      <Child id="main">{children}</Child>
      <Footer />
    </MainWrapper>
  );
};

Layout.propTypes = {
  children: node,
  background: string,
};

export default Layout;
