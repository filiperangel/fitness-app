import React from "react";
import { Container, Grid } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RoundButton from "../../../components/Button/RoundButton";
import TitleH2 from "../../../components/Text/TitleH2";
import TextMedium from "../../../components/Text/TextMedium";
import { ReactComponent as Image } from "./image.svg";
import Pattern from "./pattern.svg";
import OnbardingHeader from "../../../components/Header/OnbardingHeader";

const GetBurn = ({ nextButtonClick }) => {
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
          <TitleH2>Get Burn</TitleH2>
          <br />
          <br />
          <TextMedium sx={{ width: "90%" }}>
            Let's keep burning, to achive yours goals, it hurts only
            temporarily, if you give up now you will be in pain forever
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

export default GetBurn;
