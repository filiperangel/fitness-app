import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DEFAULT_BUTTON_HEIGHT } from "../../contants/sizes";
const OvalButtonStyled = styled(Button)(({ sx }) => {
  return `
  border-radius: calc(${sx?.height || DEFAULT_BUTTON_HEIGHT}/2);
`;
});

const OvalButton = ({
  variant = "contained",
  color = "primary",
  children,
  ...otherProps
}) => {
  return (
    <OvalButtonStyled variant={variant} color={color} {...otherProps}>
      {children}
    </OvalButtonStyled>
  );
};

export default OvalButton;
