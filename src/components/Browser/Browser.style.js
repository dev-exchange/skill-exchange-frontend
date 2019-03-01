import styled from 'styled-components';

const BrowserStyles = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px 1fr;
  grid-template-areas: 'list overview';
  overflow: hidden;
  padding-left: 0px;

  .scroll__wrapper {
    grid-area: list;
    height: calc(100vh - 80px - 75px);
    margin-top: 75px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    transition: left 200ms;
  }

  > .scroll__wrapper:last-child {
    border-left: 1px solid var(--lightgrey);
    height: calc(100vh - 80px);
    margin: 0;
    grid-area: overview;
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 250px 1fr;
  }
  @media only screen and (max-width: 850px) {
    grid-template-columns: 175px 1fr;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    .list__filter {
      display: ${props => (props.view === 'list' ? 'block' : 'none')};
    }
    .scroll__wrapper:nth-child(2) {
      display: ${props => (props.view === 'list' ? 'block' : 'none')};
    }
    .scroll__wrapper:nth-child(3) {
      display: ${props => (props.view === 'overview' ? 'block' : 'none')};
    }
  }
`;

BrowserStyles.filter = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--lightgrey);
  display: flex;
  grid-area: list;
  height: 75px;
  width: 100%;
  padding-right: 10px;

  .list__filter__label {
    align-items: center;
    display: flex;
    width: 100%;
  }
  .list__filter__icon {
    color: var(--grey);
    height: 30px;
    margin: 0 10px;
    width: 30px;
  }
  .list__filter__input {
    border: none;
    height: 74px;
    outline: none;
    width: calc(100% - 10px);
  }
  .list__filter__clear {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--grey);
    display: flex;
    outline: none;
    padding: 0;
  }
  @media only screen and (max-width: 550px) {
    display: ${props => (props.view === 'list' ? 'block' : 'none')};
  }
`;

export default BrowserStyles;
