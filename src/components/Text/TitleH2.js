import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
const TitleH2Styled = styled(Typography)(({ color, sx }) => {
  return `font-weight: bold;
  color: ${color};
  font-size: 24px;
`;
});

const TitleH2 = ({ color = "black", children, ...otherProps }) => {
  return (
    <TitleH2Styled color={color} {...otherProps}>
      {children}
    </TitleH2Styled>
  );
};

export default TitleH2;
