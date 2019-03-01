import React from 'react';

import BrowserListStyles from './BrowserList.style';

export default function UserList(props) {
  const { items, setActive, active, type, setView } = props;
  const itemDatas = items.map(item => {
    switch (type) {
      case 'projects':
        return item;
      case 'users':
        return {
          title: `${item.firstName} ${item.lastName}`,
          subtitle: item.position,
          status: item.location,
          members: [],
          imageSrc: item.avatar,
          ...item
        };
      default:
        return {
          title: 'title',
          subtitle: 'subtitle',
          status: 'status',
          members: []
        };
    }
  });
  const changeActive = item => {
    setActive(item);
    setView('overview');
  };
  return (
    <BrowserListStyles type={type}>
      {itemDatas.map(highlight => (
        // eslint-disable-next-line
        <div
          onClick={() => changeActive(highlight)}
          key={highlight.id}
          className={
            active.id === highlight.id
              ? `browser__list__item browser__list__item--active`
              : `browser__list__item`
          }
        >
          <div className="browser__list__item__image__wrapper">
            <img src={highlight.imageSrc} alt="" className="browser__list__item__image" />
          </div>
          <div className="browser__list__item__details">
            <h4 className="browser__list__item__title">{highlight.title}</h4>
            <p className="browser__list__item__subtitle">{highlight.subtitle}</p>
            <div className="browser__list__item__stats">
              <span className="browser__list__item__stat">{highlight.status}</span>
              <span className="browser__list__item__stat">
                {type === 'users' ? null : highlight.members.length}
              </span>
            </div>
          </div>
        </div>
      ))}
    </BrowserListStyles>
  );
}
