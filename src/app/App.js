import React from "react";
import { Router } from "react-router-dom";
import Routes from "../routes";
import { AppStore } from "../stores";

const App = () => {
  return (
    <div>
      <AppStore.Provider>
        <Routes />
      </AppStore.Provider>
    </div>
  );
};

export default App;
