import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import faker from 'faker';
import { Content, Menu } from './components';
import { StateProvider } from './StateProvider';

const App = () => {
  const initialState = {
    user: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: 'https://source.unsplash.com/200x200/?portrait',
      authed: true
    },
    loading: { loading: false, sectionName: undefined }
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

      case 'setLoading':
        return {
          ...state,
          loading: action.newLoading
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
