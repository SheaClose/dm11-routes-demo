import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Link style={{ color: 'white' }} to="/">
              Home
            </Link>
            <Link style={{ color: 'white' }} to="/About">
              About
            </Link>
            <Link
              style={{ color: 'white' }}
              to={`/Details/${Math.floor(Math.random() * 10)}`}
            >
              Details
            </Link>
          </div>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
