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
  padding: 0 30px;

  .content__header__title {
    margin: 0;
  }

  .profile__menu {
    border: 3px solid var(--blue);
    border-radius: 50%;
    cursor: pointer;
    height: 50px;
    overflow: hidden;
    width: 50px;
  }

  .profile__menu__image {
    height: 100%;
  }
`;

export default HeaderStyles;
