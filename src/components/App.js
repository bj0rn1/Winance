import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import KategoriteShpenzimeve from "./kategorite/KategoriteShpenzimeve";
import ShtoKategori from "./kategorite/ShtoKategori";
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
        <Route path="/shtoKategori" component={ShtoKategori} />
      </Switch>
    </div>
  );
}

export default App;
