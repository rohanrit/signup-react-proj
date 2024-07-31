import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Button,
  Typography,
} from "@mui/material";
import logo from "../logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import style from "../components/style.css";

const Header = () => {
  const theme = useTheme();
  const isScreenLessThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const styles = {
    apptoolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    drawerrightbar: {
      padding: "15px",
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={styles.drawerrightbar}
    >
      <div>
        <Typography variant="p">How It Works</Typography>
        <Typography variant="h6">Joining is simple</Typography>
        <Box sx={styles.sliderContent}>
          <p>
            By simply registering and answering a few questions, you’ll unlock
            personalized health experience to start your health journey.
          </p>
        </Box>
      </div>
      <Divider />

      <List>
        {[
          "Register an account",
          "Tell us about your lifestyle and health",
          "Receive Sharecare personalized health experience",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: isScreenLessThanMd ? "static" : "fixed",
          width: isScreenLessThanMd ? "100%" : "50%",
          padding: "0px 24px",
          background: "inherit",
          boxShadow: "none",
        }}
      >
        <Toolbar style={styles.apptoolbar}>
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
                color="success"
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
