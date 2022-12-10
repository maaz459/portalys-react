import React from "react";
import { Text } from "@chakra-ui/react";
import { any, oneOf, string } from "prop-types";
import { theme } from "../../styles/theme/base";
const { typography } = theme;

const Typography = ({ children, variant, isMobile, ...rest }) => {
  const selectedVariant = isMobile
    ? getTypographyStyles(theme, variant).mobile
    : getTypographyStyles(theme, variant).desktop;

  return (
    <Text {...selectedVariant} {...rest}>
      {children}
    </Text>
  );
};

Typography.propTypes = {
  children: any,
  variant: oneOf(Object.keys(typography)),
  display: string,
  mobileSize: string,
};

Typography.defaultProps = {
  variant: "text",
  display: "flex",
};

const getTypographyStyles = (theme, variant) => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h4":
    case "body":
    case "text":
    case "footerText":
    case "footerHeading":
    case "btnText":
      return theme.typography[variant];
    default:
      return theme.typography.body;
  }
};

export default Typography;
