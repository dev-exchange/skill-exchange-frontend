import React from 'react';

import HighlightListStyles from './HighlightList.style';

export default function HighlightList(props) {
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
    <HighlightListStyles type={type}>
      {itemDatas.map(highlight => (
        // eslint-disable-next-line
        <div
          onClick={() => changeActive(highlight)}
          key={highlight.title}
          className={
            active.id === highlight.id
              ? `highlight highlight--tiny highlight--tiny--active`
              : `highlight highlight--tiny`
          }
        >
          <div className="highlight__image__wrapper">
            <img src={highlight.imageSrc} alt="" className="highlight__image" />
          </div>
          <div className="highlight__details">
            <h4 className="highlight__title">{highlight.title}</h4>
            <p className="highlight__subtitle">{highlight.subtitle}</p>
            <div className="highlight__stats">
              <span className="highlight__stat">{highlight.status}</span>
              <span className="highlight__stat">
                {type === 'users' ? null : highlight.members.length}
              </span>
            </div>
          </div>
        </div>
      ))}
    </HighlightListStyles>
  );
}
