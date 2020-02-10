import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { TopBar } from "./pages/components/TopBar";
import { CurrentUserProvider } from "./context/currentUser";
import CurrentUserChecker from "./pages/components/CurrentUserChecker";

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <BrowserRouter>
          <TopBar />
          <Routes />
        </BrowserRouter>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

export default App;
