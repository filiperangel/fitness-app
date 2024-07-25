import React from "react";
import { Container } from "@mui/material/";
import OvalButton from "../../../components/Button/OvalButton";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  return (
    <Container>
      <Container>
        <OvalButton sx={{ width: "200px" }}>Button</OvalButton>
        <OvalButton sx={{ width: "200px" }} startIcon={<LoginIcon />}>
          Button
        </OvalButton>
        <OvalButton sx={{ width: "200px" }} endIcon={<ArrowForwardIosIcon />}>
          Button
        </OvalButton>
      </Container>
      <Container sx={{ paddingTop: 2 }}>
        <OvalButton color="secondary" sx={{ width: "200px" }}>
          Button
        </OvalButton>
        <OvalButton
          color="secondary"
          sx={{ width: "200px" }}
          startIcon={<LoginIcon />}
        >
          Button
        </OvalButton>
        <OvalButton
          color="secondary"
          sx={{ width: "200px" }}
          endIcon={<ArrowForwardIosIcon />}
        >
          Button
        </OvalButton>
      </Container>
    </Container>
  );
};

export default Home;
