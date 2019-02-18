import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectListStyles from './ProjectList.style';
import { HighlightListTiny, ProjectOverview } from '..';
import { getState } from '../../StateProvider';

export default function ProjectList(props) {
  const { type } = props;
  const [{ highlights, users }, dispatch] = getState();
  const items = {
    projects: highlights,
    users
  };
  const [active, setActive] = useState(items[type][0]);
  return (
    <ProjectListStyles>
      <div className="scroll__wrapper">
        <HighlightListTiny type={type} items={items[type]} setActive={setActive} active={active} />
      </div>
      {type === 'projects' ? (
        <div className="scroll__wrapper">
          <ProjectOverview project={active} />
        </div>
      ) : null}
    </ProjectListStyles>
  );
}
ProjectList.defaultProps = {
  highlights: []
};

ProjectList.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.object)
};
