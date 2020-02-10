import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { TopBar } from "./pages/components/TopBar";
import { CurrentUserProvider } from "./context/currentUser";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
