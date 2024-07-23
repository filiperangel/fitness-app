import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const RoundButtonStyled = styled(
  Button,
  {}
)(({ theme, width, height }) => ({
  color: theme.palette.text.primary,
  fontWeight: "bold",
  borderRadius: "50px",
  background: `linear-gradient(45deg, ${theme.palette.primary.alternative}, ${theme.palette.primary.main});`,
  width: width,
  height: height,
}));

export default function RoundButton({
  children,
  width = "200px",
  height = "55px",
}) {
  return (
    <RoundButtonStyled width={width} height={height} variant="contained">
      {children}
    </RoundButtonStyled>
  );
}
