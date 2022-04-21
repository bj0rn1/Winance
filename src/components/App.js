import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import KategoriteShpenzimeve from "./kategorite/KategoriteShpenzimeve";
import Sidebar from "./Sidebar";

import "../App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/kategorite" component={KategoriteShpenzimeve} />
      </Switch>
    </div>
  );
}

export default App;
