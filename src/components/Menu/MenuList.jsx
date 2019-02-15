import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuList(props) {
  const { menu, pathname } = props;
  return (
    <div className="menu__list">
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
  );
}
