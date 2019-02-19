import styled from 'styled-components';

const OverViewListStyles = styled.div`
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

  > .scroll__wrapper:last-child {
    border-left: 1px solid var(--lightgrey);
  }
`;

export default OverViewListStyles;
