import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { publicRoutes, adminRoutes } from "@routes";
import { AdminLayout } from "@components";
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
      <Switch>
        {adminRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact>
            <AdminLayout>
              <route.component />
            </AdminLayout>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
