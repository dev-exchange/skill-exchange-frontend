import styled from 'styled-components';

const ProjectListStyles = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px 1fr;
  overflow: hidden;
  padding-left: 0px;

  .scroll__wrapper {
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
`;

export default ProjectListStyles;
