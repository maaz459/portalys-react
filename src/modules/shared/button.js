import { Button as CBtn } from "@chakra-ui/react";
import { any, bool, func, oneOf, string } from "prop-types";
import React from "react";
import { theme } from "../../styles/theme/base";

const { buttons } = theme;

const Button = ({
  children,
  disabled,
  type,
  onClick,
  variant,
  loading,
  size,
  ...rest
}) => {
  const sizes = getButtonSizes(size);
  const selectedVariant = getButtonVariant(theme, variant);
  return (
    <CBtn
      {...rest}
      {...sizes}
      bg={selectedVariant.default}
      color={selectedVariant.color}
      disabled={disabled}
      type={type}
      onClick={onClick}
      loading={loading}
      _pressed={{
        bg: selectedVariant.pressed,
      }}
      _disabled={{
        bg: selectedVariant.disabled,
      }}
    >
      {children}
    </CBtn>
  );
};

Button.propTypes = {
  children: any,
  disabled: bool,
  variant: oneOf(Object.keys(buttons)),
  size: oneOf(["xl", "md", "sm", "xs", "default", "block"]),
  type: oneOf(["button", "submit"]),
  onClick: func,
  loading: bool,
  variant: string,
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
};

const getButtonSizes = (size) => {
  switch (size) {
    case "xl":
      return {
        minWidth: "380px",
        height: "84px",
        fontSize: "22px",
      };
    case "md":
      return {
        minWidth: "172px",
        height: "52px",
        fontSize: "16px",
      };
    case "sm":
      return {
        minWidth: "140px",
        height: "42px",
        fontSize: "16px",
      };
    case "xs":
      return {
        minWidth: "80px",
        height: "46px",
        fontSize: "16px",
      };
    case "block":
      return {
        width: "100%",
        height: "48px",
        fontSize: "16px",
      };
    default:
      return {
        minWidth: "200px",
        height: "48px",
        fontSize: "16px",
      };
  }
};

const getButtonVariant = (theme, variant) => {
  return theme.buttons[variant];
};

export default Button;
