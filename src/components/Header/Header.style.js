import styled from 'styled-components';

const HeaderStyles = styled.div`
  align-items: center;
  background: var(--white);
  border-bottom: 1px solid var(--lightgrey);
  display: flex;
  flex-shrink: 0;
  height: 80px;
  margin: 0;
  width: 100%;
  z-index: 100;
  justify-content: space-between;
  padding: 0 30px 0 15px;

  .logo {
    align-items: center;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .menu__button {
    border: none;
    display: none;
    cursor: pointer;
    align-items: center;
    outline: none;
    padding: none;
    color: var(--black);
    padding-right: 15px;
    font-size: 1.5rem;
  }

  .content__header__title {
    margin: 0;
  }
  @media only screen and (max-width: 850px) {
    .menu__button {
      display: flex;
    }
  }
`;

export default HeaderStyles;
