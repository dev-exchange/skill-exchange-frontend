import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Content, Menu } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Menu />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
