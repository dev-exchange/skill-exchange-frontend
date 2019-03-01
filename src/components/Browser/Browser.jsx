import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import BrowserStyles from './Browser.style';
import { ProjectOverview, UserOverview, BrowserList } from '..';
import { getState } from '../../StateProvider';

export default function Browser(props) {
  const { type } = props;
  const [{ highlights, users }] = getState();
  const items = {
    projects: highlights,
    users: users.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    })
  };
  const limit = 10;
  const [view, changeView] = useState('list');
  const [filterTerm, setFilterTerm] = useState('');
  const [active, setActive] = useState(items[type][0]);
  const [page, setPage] = useState(1);
  const [itemList, setItems] = useState(items[type].slice(0, limit));
  const setView = viewName => {
    changeView(viewName);
  };
  const handleScroll = ev => {
    const scroll = ev.target.scrollTop;
    const height = ev.target.clientHeight;
    const childHeight = ev.target.childNodes[0].clientHeight;
    if (scroll + height >= childHeight - 200 && filterTerm.length === 0) {
      setPage(page + 1);
      setItems(items[type].slice(0, limit * page));
    }
  };
  const filter = ev => {
    setFilterTerm(ev.target.value.toLowerCase());
  };
  const clearFilter = () => {
    setFilterTerm('');
    setItems(items[type].slice(0, limit));
  };
  useEffect(() => {
    if (filterTerm.length >= 3) {
      setItems(
        items[type].filter(item =>
          type === 'users'
            ? item.firstName.toLowerCase().indexOf(filterTerm) > -1
            : item.title.toLowerCase().indexOf(filterTerm) > -1
        )
      );
    }
  });
  return (
    <BrowserStyles view={view}>
      <BrowserStyles.filter view={view}>
        <label htmlFor="filter" className="list__filter__label">
          <FontAwesomeIcon className="list__filter__icon" icon={faSearch} />
          <input
            type="text"
            className="list__filter__input"
            name="filter"
            placeholder="Search"
            onChange={filter}
            value={filterTerm}
          />
          <button onClick={clearFilter} type="button" className="list__filter__clear">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </label>
      </BrowserStyles.filter>
      <div className="scroll__wrapper" onScroll={handleScroll}>
        <BrowserList
          type={type}
          items={itemList}
          setView={setView}
          setActive={setActive}
          active={active}
        />
      </div>
      {type === 'projects' ? (
        <div className="scroll__wrapper">
          <ProjectOverview project={active} view={view} setView={setView} />
        </div>
      ) : null}
      {type === 'users' ? (
        <div className="scroll__wrapper">
          <UserOverview user={active} view={view} setView={setView} overview />
        </div>
      ) : null}
    </BrowserStyles>
  );
}
