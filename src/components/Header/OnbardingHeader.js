import * as React from "react";
import { Container } from "@mui/material";
import {
  PRIMARY_COLOR_MAIN,
  PRIMARY_COLOR_ALTERNATIVE,
} from "../../contants/colors";

const OnbardingHeader = ({
  Foreground,
  foregroundHeight,
  foregroundWidth,
  backgrond,
  backgroundStyle = "no-repeat center center/contain",
}) => {
  return (
    <Container
      sx={{
        backgroundImage: `linear-gradient(${PRIMARY_COLOR_MAIN}, ${PRIMARY_COLOR_ALTERNATIVE})`,
      }}
    >
      <Container
        sx={{
          position: "relative",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          background: `url(${backgrond}) ${backgroundStyle}`,
        }}
      >
        <Container
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <Foreground height={foregroundHeight} width={foregroundWidth} />
        </Container>
      </Container>
    </Container>
  );
};

export default OnbardingHeader;
