import * as React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { PRIMARY_TEXT_COLOR } from "../../contants/colors";

const RoundButtonStyled = styled(IconButton)(() => {
  return `
  color: ${PRIMARY_TEXT_COLOR};
`;
});

const RoundButton = ({
  variant = "contained",
  color = "primary",
  children,
  ...otherProps
}) => {
  return (
    <RoundButtonStyled variant={variant} color={color} {...otherProps}>
      {children}
    </RoundButtonStyled>
  );
};

export default RoundButton;
