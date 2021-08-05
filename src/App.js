import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/homePage.jsx";
import ShopPage from "./Pages/shopPage/shopPage.jsx";
import Header from "./Components/header/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
