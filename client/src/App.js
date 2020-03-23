import React from "react";
// import "./App.css";
import { Router } from "@components";
import { ThemeProvider } from "styled-components";
import theme from "@assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
