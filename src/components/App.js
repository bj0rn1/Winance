import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import KategoriteShpenzimeve from "./kategorite/KategoriteShpenzimeve";
import TeArdhurat from "./te ardhurat/TeArdhurat";

import "../sidebar.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/kategorite" component={KategoriteShpenzimeve} />
        <Route path="/teardhurat" component={TeArdhurat} />
      </Switch>
    </div>
  );
}

export default App;
