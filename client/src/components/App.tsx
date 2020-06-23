import Frames from '../pages/Frames';
import FramesDetail from '../pages/FramesDetail';
import React from "react";
import "../assets/styles/main.scss";
import { store } from "../store/store";
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
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={News} />
        <Route exact path='/cycles' component={Cycles} />
        <Route exact path='/fissures' component={Fissures} />
        <Route exact path='/invasions' component={Invasions} />
        <Route exact path='/sorties' component={Sorties} />
        <Route exact path='/items' component={Items} />
        <Route exact path='/frames' component={Frames} />
        <Route exact path='/frame/:name' component={FramesDetail} />
        <Route path="/register" component={SignUp} />
      </section>
    </Router>
  </Provider>
);
