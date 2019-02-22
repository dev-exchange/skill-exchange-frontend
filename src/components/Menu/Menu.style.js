import styled from 'styled-components';

const MenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: menu;
  overflow: hidden;
  background: white;
  transition: left 200ms ease-out;

  .menu__header {
    padding-left: 15px;
  }

  .menu__header::after {
    background: var(--lightgrey);
    content: '';
    position: absolute;
    height: 40px;
    top: 20px;
    left: 174px;
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
    padding: 30px 0px;
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

  /* flat style headers */
  .menu__list__header {
    color: var(--grey);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 10px;
    padding-left: 10px;
    text-transform: uppercase;
  }

  .menu__list__body {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;
    grid-gap: 0px; /* for flat style */
  }

  /* normal menu item */
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
    transition: color 150ms ease-out, background 150ms ease-out;
  }

  .menu__list__item:hover {
    background: var(--lightblue);
    color: var(--blue);
  }

  /* flat style menu item */
  .menu__list__item {
    border-radius: 0px;
    padding-left: 10px;
  }

  .menu__list__item:hover {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    color: var(--blue);
    padding-left: 7px;
  }

  /* normal active item */
  .menu__list__item--active {
    background: var(--blue);
    color: var(--white);
    padding-left: 7px;
  }

  .menu__list__item--active:hover {
    background: var(--blue);
    color: var(--white);
    cursor: default;
  }

  /* flat style active menu item */

  .menu__list__item--active {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    color: var(--blue);
  }

  .menu__list__item--active:hover {
    background: var(--lightblue);
    color: var(--blue);
    cursor: default;
  }

  /* responsive */
  @media only screen and (max-width: 850px) {
    position: fixed;
    left: ${props => (props.menuOpen ? 0 : '-180px')};
    z-index: 2000;
    height: 100vh;
    width: 176px;

    .menu__header {
      display: none;
    }

    .menu__header::after {
      display: none;
    }
  }
`;

export default MenuStyles;
