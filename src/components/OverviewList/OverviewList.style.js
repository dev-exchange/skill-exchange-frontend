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
    -webkit-overflow-scrolling: touch;
    transition: left 200ms;
  }

  > .scroll__wrapper:last-child {
    border-left: 1px solid var(--lightgrey);
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 250px 1fr;
  }
  @media only screen and (max-width: 850px) {
    grid-template-columns: 175px 1fr;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    .scroll__wrapper:first-child {
      display: ${props => (props.view === 'list' ? 'block' : 'none')};
    }
    .scroll__wrapper:nth-child(2) {
      display: ${props => (props.view === 'overview' ? 'block' : 'none')};
    }
  }
`;

export default OverViewListStyles;
