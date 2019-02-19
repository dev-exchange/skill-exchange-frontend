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
  const [active, setActive] = useState(items[type][0]);
  return (
    <OverViewListStyles>
      <div className="scroll__wrapper">
        <HighlightList type={type} items={items[type]} setActive={setActive} active={active} />
      </div>
      {type === 'projects' ? (
        <div className="scroll__wrapper">
          <ProjectOverview project={active} />
        </div>
      ) : null}
      {type === 'users' ? (
        <div className="scroll__wrapper">
          <UserOverview user={active} overview />
        </div>
      ) : null}
    </OverViewListStyles>
  );
}
