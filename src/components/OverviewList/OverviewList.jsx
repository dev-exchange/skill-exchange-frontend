import React, { useState } from 'react';
import OverViewListStyles from './OverviewList.style';
import { HighlightList, ProjectOverview, UserOverview } from '..';
import { getState } from '../../StateProvider';

export default function OverviewList(props) {
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
    if (scroll + height >= childHeight - 100) {
      setPage(page + 1);
      setItems(items[type].slice(0, limit * page));
    }
  };
  return (
    <OverViewListStyles view={view}>
      <div className="scroll__wrapper" onScroll={handleScroll}>
        <HighlightList
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
    </OverViewListStyles>
  );
}
