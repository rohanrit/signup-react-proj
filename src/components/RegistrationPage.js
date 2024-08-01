import React, { useState } from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import mockbg from "../UI_Mock_bg.png";
import RegistrationForm from "../components/RegistrationForm";
import Header from "./Header";
import style from "../components/style.css";

const styles = {
  container: {
    display: "flex",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  leftSide: {
    minHeight: "250px",
    padding: "15px",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  formContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto",
    paddingTop: "20px",
    boxSizing: "border-box",
    maxWidth: "360px",
  },
  heroContainer: {
    backgroundImage: `url(${mockbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // width: `calc(100vw + 48px)`
  },
};

const RegistrationPage = () => {
  return (
    <Grid container spacing={3} sx={styles.container}>
      <Header />
      <Grid xs={12} sm={6} sx={styles.leftSide}>
        <Box
          height="100%"
          borderRadius="15px"
          style={styles.heroContainer}
        ></Box>
      </Grid>
      <Grid xs={12} sm={6} sx={styles.rightSide}>
        <Container maxWidth="md" component="div" align="center">
          <Box sx={styles.formContainer}>
            <Typography component="h1" variant="h5" align="center">
              Sign Up
            </Typography>
            <RegistrationForm />{" "}
            {/* Ensure this component handles form submission */}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
