import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <h3>Welcome to Hooks</h3>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
