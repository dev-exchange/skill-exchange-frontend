import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuStyles from './Menu.style';

function Menu(props) {
  const { location } = props;
  const { pathname } = location;
  const menus = [
    {
      name: 'Menu',
      items: [
        { name: 'Dashboard', pathname: '/' },
        { name: 'Projects', pathname: '/projects' },
        { name: 'Skills', pathname: '/skills' }
      ]
    },
    {
      name: 'Profile',
      items: [{ name: 'Sign In', pathname: '/login' }, { name: 'Sign Up', pathname: '/register' }]
    }
  ];
  return (
    <MenuStyles>
      <h3 className="menu__header header">Skill Exchange</h3>
      <div className="menu__body">
        {menus.map(menu => (
          <div key={menu.name} className="menu__list">
            <div className="menu__list__header">{menu.name}</div>
            <div className="menu__list__body">
              {menu.items.map(item => (
                <Link
                  key={item.name}
                  to={item.pathname}
                  className={
                    item.pathname === pathname
                      ? `menu__list__item menu__list__item--active`
                      : `menu__list__item`
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
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
