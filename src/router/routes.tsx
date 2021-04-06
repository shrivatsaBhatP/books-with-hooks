import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Searchpage from '../pages/Searchpage';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Searchpage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
