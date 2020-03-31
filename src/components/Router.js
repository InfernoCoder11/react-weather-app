import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import CityView from "./CityView";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/city/:cityName" component={CityView} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
