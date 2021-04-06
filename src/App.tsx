import React from 'react';
import './styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Searchpage from './pages/Searchpage';

const App: React.FC = () => {
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

export default App;
