import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuList(props) {
  const { menu, pathname } = props;
  return (
    <div className="menu__list">
      <div className="menu__list__header">{menu.name}</div>
      <div className="menu__list__body">
        {menu.items.map(item => {
          const itemRoot =
            item.pathname.lastIndexOf('/') > 1
              ? item.pathname.substring(0, item.pathname.lastIndexOf('/'))
              : item.pathname;
          const pathRoot =
            pathname.lastIndexOf('/') > 1
              ? pathname.substring(0, pathname.lastIndexOf('/'))
              : pathname;
          return (
            <Link
              key={item.name}
              to={item.pathname}
              className={
                itemRoot === pathRoot
                  ? `menu__list__item menu__list__item--active`
                  : `menu__list__item`
              }
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
