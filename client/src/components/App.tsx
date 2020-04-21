import React from "react";
import "../assets/styles/main.scss";
import store from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav/index";
import Home from "../pages/Home";
import Cycles from "../pages/Cycles";
import Invasions from "../pages/Invasions";
import Sorties from "../pages/Sorties";
import News from "../pages/News";
import Fissures from "../pages/Fissures";
import Items from "../pages/Items";
import SignUp from "../pages/SignUp";

export default () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <section className="content">
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/cycles" component={Cycles} />
        <Route path="/fissures" component={Fissures} />
        <Route path="/invasions" component={Invasions} />
        <Route path="/sorties" component={Sorties} />
        <Route path="/items" component={Items} />
        <Route path="/register" component={SignUp} />
      </section>
    </Router>
  </Provider>
);
