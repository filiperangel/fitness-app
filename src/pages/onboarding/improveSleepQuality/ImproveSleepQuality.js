import React from "react";
import { Container, Grid } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RoundButton from "../../../components/Button/RoundButton";
import TitleH2 from "../../../components/Text/TitleH2";
import TextMedium from "../../../components/Text/TextMedium";
import { ReactComponent as Image } from "./image.svg";
import Pattern from "./pattern.svg";
import OnbardingHeader from "../../../components/Header/OnbardingHeader";

const ImproveSleepQuality = ({ nextButtonClick }) => {
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
          Foreground={Image}
          foregroundHeight={"241px"}
          backgrond={Pattern}
        />
      </Grid>
      <Grid item xs={12}>
        <Container
          sx={{
            textAlign: "left",
            paddingLeft: "24px !important",
          }}
        >
          <TitleH2>Improve Sleep Quality</TitleH2>
          <br />
          <br />
          <TextMedium sx={{ width: "90%" }}>
            Improve the quality of your sleep with us, good quality sleep can
            bring a good mood in the morning
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

export default ImproveSleepQuality;
