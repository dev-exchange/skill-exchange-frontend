import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Content, Menu } from './components';
import { StateProvider } from './StateProvider';

const App = () => {
  const initialState = {
    user: {
      authed: false
    }
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'loginUser':
        return {
          ...state,
          user: action.newUser
        };

      case 'logoutUser':
        return {
          ...state,
          user: action.newUser
        };

      case 'registerUser':
        return {
          ...state,
          user: action.newUser
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Menu />
          <Content />
        </div>
      </Router>
    </StateProvider>
  );
};
export default App;
