import React from "react";
import "./App.css";
import "@fontsource/roboto";
import {
  Typography,
  Box,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { WbSunny } from "@mui/icons-material";

const App = () => {
  return (
    <>
    {/* <CssBaseline/> */}
    <AppBar position="relative">
      <Toolbar>
        <WbSunny/>
        <Typography variant="h6">hello</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <header class="App-header">
          <Typography variant="h3">
            Hello! I'm Gabrielle Noelle Donald 🌩️
          </Typography>
        </header>
      </div>
      <div class="desc">
        <Box
          display="flex"
          width={500}
          height={200}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="subtitle1">
            ⛈️ Software engineer, full-stack developer
            <br />
            ☁️ Passionate, dedicated, consistent
            <br />⚡ Certificate in Full-Stack Web Development from UCF
          </Typography>
        </Box>
      </div>
      </main>
    </>
  );
};

export default App;
