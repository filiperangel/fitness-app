import React from "react";
import { Container } from "@mui/material/";
import RoundButton from "../../../components/Button/RoundButton";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  return (
    <Container>
      <Container>
        <RoundButton sx={{ width: "200px" }}>Button</RoundButton>
        <RoundButton sx={{ width: "200px" }} startIcon={<LoginIcon />}>
          Button
        </RoundButton>
        <RoundButton sx={{ width: "200px" }} endIcon={<ArrowForwardIosIcon />}>
          Button
        </RoundButton>
      </Container>
      <Container sx={{ paddingTop: 2 }}>
        <RoundButton color="secondary" sx={{ width: "200px" }}>
          Button
        </RoundButton>
        <RoundButton
          color="secondary"
          sx={{ width: "200px" }}
          startIcon={<LoginIcon />}
        >
          Button
        </RoundButton>
        <RoundButton
          color="secondary"
          sx={{ width: "200px" }}
          endIcon={<ArrowForwardIosIcon />}
        >
          Button
        </RoundButton>
      </Container>
    </Container>
  );
};

export default Home;
