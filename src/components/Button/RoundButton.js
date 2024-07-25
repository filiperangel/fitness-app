import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DEFAULT_BUTTON_HEIGHT } from "../../contants/sizes";

const RoundButtonStyled = styled(Button)(({ theme, color }) => {
  return `
  background: linear-gradient(45deg, ${theme.palette[color].alternative}, ${theme.palette[color].main});
  border-radius: 25px;
  height: ${DEFAULT_BUTTON_HEIGHT};
  font-size: 17px;
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
