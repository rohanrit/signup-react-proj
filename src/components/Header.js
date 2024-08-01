import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Button,
  Typography,
} from "@mui/material";
import logo from "../logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  const theme = useTheme();
  const isScreenLessThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const styles = {
    apptoolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 350,
        padding: "15px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ textAlign: "right" }}>
        <Button
          sx={{
            marginLeft: "auto",
            backgroundColor: "#fff",
            color: "#00BFA5",
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: "#ECFDF5",
              border: "1px solid transparent",
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.05),0px 0px 0px 3px rgba(79, 222, 203, 0.4)",
            },
          }}
          variant="outlined"
          onClick={toggleDrawer(anchor, true)}
        >
          Close
        </Button>
      </div>
      <div>
        <Typography
          variant="p"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
            padding: "25px 0 0",
            background: "inherit",
            boxShadow: "none",
            color: "#93999e",
          }}
        >
          How It Works
        </Typography>
        <Typography
          variant="h3"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
            color: "#006658",
          }}
        >
          Joining is simple
        </Typography>
        <Typography
          variant="p"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
          }}
        >
          By simply registering and answering a few questions, you’ll unlock
          personalized health experience to start your health journey.
        </Typography>
      </div>

      <Box mt={5}>
        <Typography
          variant="p"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
            padding: "25px 0 0",
            background: "inherit",
            boxShadow: "none",
            color: "#93999e",
          }}
        >
          <FavoriteBorderIcon /> STEP 1
        </Typography>
        <Typography
          variant="h4"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
            color: "#006658",
          }}
        >
          Register an account
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Neuton, sans-serif",
            padding: "25px 0 0",
            background: "inherit",
            boxShadow: "none",
            color: "#93999e",
          }}
        >
          <FavoriteBorderIcon /> STEP 2
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Neuton, sans-serif",
            color: "#006658",
          }}
        >
          Tell us about your lifestyle and health
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          variant="p"
          margin="15px 0px"
          sx={{
            fontFamily: "Neuton, sans-serif",
            padding: "25px 0 0",
            background: "inherit",
            boxShadow: "none",
            color: "#93999e",
          }}
        >
          <FavoriteBorderIcon /> STEP 3
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Neuton, sans-serif",
            color: "#006658",
          }}
        >
          Receive Sharecare personalized health experience
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: isScreenLessThanMd ? "static" : "fixed",
          width: isScreenLessThanMd ? "100%" : "50%",
          padding: "25px 0 0",
          background: "inherit",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={styles.apptoolbar}>
          <Box
            sx={styles.logo}
            onClick={() => (window.location.href = "/registration")}
          >
            <img
              src={logo}
              alt="Free eBook"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{ width: "100%", maxWidth: "180px" }}
            />
          </Box>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: "#333",
                  border: "1px solid #00BFA5",
                  "&:hover": {
                    backgroundColor: "#ECFDF5",
                    border: "1px solid #00BFA5",
                    boxShadow:
                      "0px 1px 2px rgba(0, 0, 0, 0.05),0px 0px 0px 3px rgba(79, 222, 203, 0.4)",
                  },
                }}
                variant="outlined"
                onClick={toggleDrawer(anchor, true)}
              >
                How it works
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
