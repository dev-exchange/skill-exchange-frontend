import styled from 'styled-components';

const MenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: menu;
  overflow: hidden;

  .menu__header {
    padding-left: 15px;
  }

  .menu__header::after {
    background: var(--lightgrey);
    content: '';
    position: absolute;
    height: 40px;
    top: 20px;
    left: 199px;
    width: 1px;
  }

  .menu__body {
    align-content: start;
    border-right: 1px solid var(--lightgrey);
    display: grid;
    grid-auto-flow: row;
    grid-gap: 50px;
    flex-grow: 1;
    overflow-y: scroll;
    padding: 30px 10px;
  }

  .menu__list {
    display: flex;
    flex-direction: column;
  }

  .menu__list__header {
    color: var(--grey);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 10px;
    padding-left: 5px;
    text-transform: uppercase;
  }

  .menu__list__body {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;
  }

  .menu__list__item {
    align-items: center;
    background: none;
    border: none;
    border-radius: 3px;
    color: var(--black);
    cursor: pointer;
    display: flex;
    font-size: 0.9rem;
    height: 40px;
    letter-spacing: 0.5px;
    outline: none;
    text-align: left;
    padding: 0;
    padding-left: 5px;
    text-decoration: none;
    transition: all 150ms ease-out;
  }

  .menu__list__item:hover {
    background: var(--lightblue);
    color: var(--blue);
  }

  .menu__list__item--active {
    background: var(--blue);
    color: var(--white);
  }

  .menu__list__item--active:hover {
    background: var(--blue);
    color: var(--white);
    cursor: default;
  }
`;

export default MenuStyles;
