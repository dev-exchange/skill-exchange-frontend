import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectListStyles from './ProjectList.style';
import { HighlightListTiny, ProjectOverview } from '..';

export default function ProjectList(props) {
  const { highlights } = props;
  const [active, setActive] = useState(highlights[0]);
  return (
    <ProjectListStyles>
      <div className="scroll__wrapper">
        <HighlightListTiny highlights={highlights} setActive={setActive} active={active} />
      </div>
      <div className="scroll__wrapper">
        <ProjectOverview project={active} />
      </div>
    </ProjectListStyles>
  );
}
ProjectList.defaultProps = {
  highlights: []
};

ProjectList.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.object)
};
