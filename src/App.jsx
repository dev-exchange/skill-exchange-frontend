import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import uuid from 'uuid/v4';
import faker from 'faker';
import { Content, Menu, Alerter } from './components';
import { StateProvider } from './StateProvider';
import projectImage from './assets/images/shuffle.png';
import avatar from './assets/images/user.png';

const getDemoData = () => {
  const sizeIndex = 300;
  const projectTotal = 100;
  const fakeUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    skills: [],
    projects: [],
    collab: 'Yes',
    email: faker.internet.email(),
    password: faker.internet.password(),
    // avatar: `https://source.unsplash.com/${300}x${300}/?portrait`
    avatar
  };
  const users = [];
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed'];
  const memberships = ['Open', 'Closed', 'Invite Only'];
  const highlights = new Array(projectTotal).fill(undefined).map((element, index) => ({
    id: uuid(),
    title: faker.commerce.productName(),
    subtitle: faker.company.catchPhrase(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: faker.lorem.paragraph(),
    skills: [
      {
        key: 'A',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 10,
        color: '#69d2e7'
      },
      {
        key: 'B',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 20,
        color: '#a7dbd8'
      },
      {
        key: 'C',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 30,
        color: '#fa6900'
      },
      {
        key: 'D',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 40,
        color: '#e0e4cc'
      }
    ],
    membership: memberships[Math.floor(Math.random() * memberships.length)],
    imageSrc: projectImage,
    comments: new Array(Math.floor(Math.random() * 10)).fill(undefined).map(() => {
      const commentUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        skills: [],
        projects: [],
        collab: 'No',
        email: faker.internet.email(),
        password: faker.internet.password(),
        position: faker.name.jobTitle(),
        location: `${faker.address.city()}, ${faker.address.state()}`,
        memberSince: faker.date.past(),
        phone: faker.phone.phoneNumber(),
        about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
        id: uuid(),
        // avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
        avatar
      };
      users.push(commentUser);
      return {
        user: commentUser,
        timestamp: new Date(faker.date.past()).getTime(),
        comment: faker.lorem.paragraph(),
        replies: new Array(Math.floor(Math.random() * 5)).fill(undefined).map(() => {
          const replyUser = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            skills: [],
            projects: [],
            collab: 'Yes',
            email: faker.internet.email(),
            password: faker.internet.password(),
            position: faker.name.jobTitle(),
            location: `${faker.address.city()}, ${faker.address.state()}`,
            memberSince: faker.date.past(),
            phone: faker.phone.phoneNumber(),
            about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
            id: uuid(),
            // avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
            avatar
          };
          users.push(replyUser);
          return {
            user: replyUser,
            timestamp: new Date(faker.date.past()).getTime(),
            comment: faker.lorem.paragraph()
          };
        })
      };
    }),
    members: new Array(Math.floor(Math.random() * 20) + 10).fill(undefined).map(() => {
      const memberUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        skills: [],
        projects: [],
        collab: 'Yes',
        email: faker.internet.email(),
        password: faker.internet.password(),
        id: uuid(),
        position: faker.name.jobTitle(),
        location: `${faker.address.city()}, ${faker.address.state()}`,
        memberSince: faker.date.past(),
        phone: faker.phone.phoneNumber(),
        about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
        // avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
        avatar
      };
      users.push(memberUser);
      return memberUser;
    })
  }));
  const demoData = {
    users,
    highlights,
    fakeUser
  };
  return demoData;
};

const App = () => {
  const demoData = getDemoData();

  const initialState = {
    alert: { message: undefined, show: false },
    authed: false,
    currentUser: { id: null },
    highlights: demoData.highlights || [],
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
