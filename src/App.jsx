import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import uuid from 'uuid/v4';
import { Content, Menu, Alerter } from './components';
import { StateProvider } from './StateProvider';

const App = () => {
  const initialState = {
    authed: false,
    user: undefined,
    loading: { loading: false, sectionName: undefined },
    users: [],
    alert: { message: undefined, show: false }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'clearAlert':
        return {
          ...state,
          alert: { show: false, message: undefined }
        };
      case 'loginUser':
        return {
          ...state,
          user: action.newUser,
          authed: true
        };

      case 'logoutUser':
        return {
          ...state,
          user: undefined,
          authed: false
        };

      case 'registerUser': {
        const { newUser } = action;
        newUser.id = uuid();
        return {
          ...state,
          user: newUser,
          users: [...state.users, newUser],
          authed: true
        };
      }

      case 'setAlert':
        return {
          ...state,
          alert: { show: true, message: action.message }
        };

      case 'setLoading':
        return {
          ...state,
          loading: action.newLoading
        };

      case 'updateUser': {
        const { users } = state;
        const { updatedUser } = action;
        const filteredUsers = users.filter(user => user.id !== updatedUser.id);
        return {
          ...state,
          user: updatedUser,
          users: [...filteredUsers, updatedUser]
        };
      }

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Alerter />
          <Menu />
          <Content />
        </div>
      </Router>
    </StateProvider>
  );
};
export default App;
