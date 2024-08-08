import React from "react";
import "./GetStarted.css";
import { Container, Grid } from "@mui/material/";
import OvalButton from "../../../components/Button/OvalButton";

const GetStarted = ({ nextButtonClick }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      minHeight="100%"
    >
      <Grid item xs={12}>
        <Container>
          <br />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <span className="logoText">Fitness</span>
          <span className="logoX">X</span>
          <br />
          <span className="homeSubText">Everybody Can Train</span>
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: "40px",
        }}
      >
        <Container>
          <OvalButton
            sx={{
              width: {
                xs: "90%",
                md: "90%",
                lg: "70%",
              },
            }}
            onClick={() => nextButtonClick()}
          >
            Get Started
          </OvalButton>
        </Container>
      </Grid>
    </Grid>
  );
};

export default GetStarted;
