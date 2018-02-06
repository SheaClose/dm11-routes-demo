import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import AdultClothing from './AdultClothing';
import ChildClothing from './ChildClothing';
import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <nav className="test">
          <NavLink activeClassName="active" to="/Details/AdultClothing">
            Adult Clothing
          </NavLink>
          <NavLink activeClassName="active" to="/Details/ChildClothing">
            Child Clothing
          </NavLink>
        </nav>
        <Switch className="">
          <Route path="/Details/AdultClothing" component={AdultClothing} />
          <Route path="/Details/ChildClothing" component={ChildClothing} />
        </Switch>
      </div>
    );
  }
}
export default Details;
