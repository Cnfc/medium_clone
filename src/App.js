import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { TopBar } from "./pages/components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
