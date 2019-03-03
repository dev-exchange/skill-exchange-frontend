import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Content, Menu, Alerter } from './components';
import { StateProvider } from './StateProvider';
import util from './util/util';

const App = () => {
  const demoData = util.getDemoData();

  const initialState = {
    alert: { message: undefined, show: false },
    authed: false,
    currentUser: { id: null },
    projects: demoData.projects || [],
    loading: { loading: false, sectionName: undefined },
    menuOpen: false,
    user: undefined,
    users: demoData.users || []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'clearAlert':
        return {
          ...state,
          alert: { show: false, message: undefined }
        };

      case 'closeMenu':
        return {
          ...state,
          menuOpen: false
        };

      case 'createUsers':
        return {
          ...state,
          users: action.users
        };

      case 'loginUser':
        return {
          ...state,
          currentUser: action.newUser,
          authed: true
        };

      case 'logoutUser':
        return {
          ...state,
          currentUser: { id: null },
          authed: false
        };

      case 'registerUser': {
        const { newUser } = action;
        newUser.skills = [];
        newUser.projects = [];
        newUser.collab = 'Yes';
        return {
          ...state,
          currentUser: newUser,
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

      case 'setUser':
        return {
          ...state,
          user: action.user
        };

      case 'toggleMenu':
        return {
          ...state,
          menuOpen: !state.menuOpen
        };

      case 'updateUser': {
        const { users } = state;
        const { updatedUser } = action;
        const filteredUsers = users.filter(user => user.id !== updatedUser.id);
        return {
          ...state,
          currentUser: updatedUser,
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
