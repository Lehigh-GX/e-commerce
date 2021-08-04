import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/homePage.jsx";

const HatsPage = () => (
  <div>
    <h1>hat</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
