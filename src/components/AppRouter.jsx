import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts.jsx';
import About from '../pages/About.jsx';
import Error from '../pages/Error.jsx';

const AppRouter = () => (
  <Switch>
    <Route path="/about">
      <About></About>
    </Route>
    <Route path="/posts">
      <Posts></Posts>
    </Route>
    <Route path="/error">
      <Error></Error>
    </Route>
    <Redirect to="/error"></Redirect>
  </Switch>
);

export default AppRouter;
