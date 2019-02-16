import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuStyles from './Menu.style';
import MenuList from './MenuList';
import { getState } from '../../StateProvider';

function Menu(props) {
  const { location } = props;
  const { pathname } = location;
  const [{ user, authed }, dispatch] = getState();
  const menus = [
    {
      name: 'Menu',
      items: [
        { name: 'Dashboard', pathname: '/' },
        { name: 'Projects', pathname: '/projects' }
        // { name: 'Skills', pathname: '/skills' }
      ],
      visibility: 'all'
    },
    {
      name: 'Profile',
      items: [{ name: 'Sign In', pathname: '/login' }, { name: 'Sign Up', pathname: '/register' }],
      visibility: 'no_auth'
    },
    {
      name: 'Profile',
      items: [
        { name: 'My Profile', pathname: '/profile/about' },
        // { name: 'Messages', pathname: '/messages' },
        // { name: 'Tasks', pathname: '/tasks' },
        { name: 'Sign Out', pathname: '/logout' }
      ],
      visibility: 'auth'
    }
  ];
  return (
    <MenuStyles>
      <h3 className="menu__header header">Skill Exchange</h3>
      <div className="menu__body">
        {menus.map(menu => {
          if (menu.visibility === 'all') {
            return <MenuList key={menu.name} menu={menu} pathname={pathname} />;
          }
          if (authed && menu.visibility === 'auth') {
            return <MenuList key={menu.name} menu={menu} pathname={pathname} />;
          }
          if (!authed && menu.visibility === 'no_auth') {
            return <MenuList key={menu.name} menu={menu} pathname={pathname} />;
          }
          return null;
        })}
      </div>
    </MenuStyles>
  );
}

Menu.defaultProps = {};

Menu.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired
};

export default withRouter(Menu);
