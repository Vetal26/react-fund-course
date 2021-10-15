import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';

const AppRouter = () => {
  const isAuth = true;

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          key={route.component}
          component={route.component}
          path={route.path}
          exact={route.exact}
        ></Route>
      ))}
      <Redirect to="/posts"></Redirect>
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.component}
          component={route.component}
          path={route.path}
          exact={route.exact}
        ></Route>
      ))}
      <Redirect to="/login"></Redirect>
    </Switch>
  );
};

export default AppRouter;
