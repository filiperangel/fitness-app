import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { GRAY_COLOR_DARK } from "../../contants/colors";
const TextMediumStyled = styled(Typography)(({ color, sx }) => {
  return `
  color: ${color};
  font-size: 14px;
`;
});

const TextMedium = ({ color = GRAY_COLOR_DARK, children, ...otherProps }) => {
  return (
    <TextMediumStyled color={color} {...otherProps}>
      {children}
    </TextMediumStyled>
  );
};

export default TextMedium;
