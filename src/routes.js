import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Details from './Details';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Details/:id" component={Details} />
    <Route path="/About" component={About} />
    <Route
      path="*"
      render={() => (
        <div className="">
          <h1>404 Not Found</h1>
        </div>
      )}
    />
  </Switch>
);
