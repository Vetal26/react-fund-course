import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/Posts.jsx';
import About from '../pages/About.jsx';
import Error from '../pages/Error.jsx';
import PostIdPage from '../pages/PostIdPage.jsx';

const AppRouter = () => (
  <Switch>
    <Route path="/about">
      <About></About>
    </Route>
    <Route exact path="/posts">
      <Posts></Posts>
    </Route>
    <Route exact path="/posts/:id">
      <PostIdPage></PostIdPage>
    </Route>
    <Route path="/error">
      <Error></Error>
    </Route>
    <Redirect to="/error"></Redirect>
  </Switch>
);

export default AppRouter;
