import React from "react";
import { Router } from "react-router-dom";
import Routes from "../routes";
import { AppStore } from "../stores";

const App = () => {
  return (
    <AppStore.Provider>
      <Routes />
    </AppStore.Provider>
  );
};

export default App;
