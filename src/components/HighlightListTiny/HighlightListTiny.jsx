import React from 'react';

import HighlightListTinyStyles from './HighlightListTiny.style';

export default function HighlightListTiny(props) {
  const { highlights, setActive, active } = props;
  return (
    <HighlightListTinyStyles>
      {highlights.map(highlight => (
        // eslint-disable-next-line
        <div
          onClick={() => setActive(highlight)}
          key={highlight.title}
          className={
            active.title === highlight.title
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
              <span className="highlight__stat">{highlight.members.length}</span>
            </div>
          </div>
        </div>
      ))}
    </HighlightListTinyStyles>
  );
}
