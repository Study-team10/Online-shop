import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { publicRoutes } from "@routes";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact>
            <route.component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
