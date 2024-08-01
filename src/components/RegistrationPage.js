import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import mockbg from "../UI_Mock_bg.png";
import RegistrationForm from "./RegistrationForm-other";
import Header from "./Header";

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
    height: "100%",
    borderRadius: "15px",
    // width: `calc(100vw + 48px)`
  },
};

const RegistrationPage = () => {
  return (
    <Grid container spacing={2} sx={styles.container}>
      <Header />
      <Grid item xs={12} sm={6} sx={styles.leftSide}>
        <Box style={styles.heroContainer}></Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={styles.rightSide}>
        <Container maxWidth="md" component="div" align="center">
          <Box sx={styles.formContainer}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{
                fontFamily: "Neuton, sans-serif",
                color: "#006658",
                marginBottom: "25px",
              }}
            >
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
