import React from "react";
import "./App.css";
import { Typography, Box } from "@mui/material";
import "@fontsource/roboto";

function App() {
  return (
    <>
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
          <Typography variant="subtitle2">
            ⛈️ Software engineer, full-stack developer
            <br />
            <br />
            ☁️ Passionate, dedicated, tenacious
            <br />
            <br />⚡ Certificate in Full-Stack Web Development from UCF
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default App;
