import React from "react";
import { Container, Grid } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RoundButton from "../../../components/Button/RoundButton";
import TitleH2 from "../../../components/Text/TitleH2";
import TextMedium from "../../../components/Text/TextMedium";
import { ReactComponent as Pattern } from "./pattern.svg";
import Image from "./image.svg";
import OnbardingHeader from "../../../components/Header/OnbardingHeader";

const EatWell = ({ nextButtonClick }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      minHeight="100%"
    >
      <Grid item xs={12}>
        <OnbardingHeader
          Foreground={Pattern}
          foregroundHeight={"200px"}
          foregroundWidth={"100%"}
          backgrond={Image}
        />
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{
            textAlign: "left",
            paddingLeft: "24px !important",
          }}
        >
          <TitleH2>Eat Well</TitleH2>
          <br />
          <br />
          <TextMedium sx={{ width: "90%" }}>
            Let's start a healthy lifestyle with us, we can determine your diet
            every day. healthy eating is fun
          </TextMedium>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: "40px",
          paddingRight: "30px",
        }}
      >
        <Container
          sx={{
            textAlign: "end",
          }}
        >
          <RoundButton onClick={() => nextButtonClick()}>
            <ArrowForwardIosIcon />
          </RoundButton>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EatWell;
