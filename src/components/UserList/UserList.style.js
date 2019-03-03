import styled from 'styled-components';

const UserListStyles = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px;

  .user__list__item {
    cursor: pointer;
    border-bottom: 1px solid var(--lightgrey);
    display: flex;
    padding: 15px;
    padding-left: 18px;
    transition: background 150ms ease-out;
  }

  .user__list__item:hover {
    background: var(--lightblue);
    border-bottom: 1px solid var(--lightgrey);
    border-left: 3px solid var(--blue);
    padding-left: 15px;
  }

  .user__list__item--active {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    padding-left: 15px;
  }

  .user__list__item--active:hover {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    cursor: default;
  }

  .user__list__item--active:hover .user__list__item__title {
    color: var(--black);
  }

  .user__list__item__image__wrapper {
    align-self: center;
    background: linear-gradient(135deg, var(--blue), var(--teal));
    border-radius: 50%;
    flex-shrink: 0;
    height: 40px;
    margin-right: 15px;
    mask-image: radial-gradient(white, black);
    overflow: hidden;
    width: 40px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  .user__list__item__image {
    height: 40px;
    object-position: center center;
    object-fit: cover;
    width: 100%;
    transition: all 300ms ease-out;
    display: ${props => (props.type === 'users' ? 'inline' : 'none')};
  }

  .user__list__item__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }

  .user__list__item__title {
    margin: 0;
    transition: all 150ms ease-out;
  }

  .user__list__item__subtitle {
    color: var(--grey);
    font-size: 0.9rem;
    margin: 0;
  }

  .user__list__item__stats {
    color: var(--grey);
    display: flex;
    font-size: 0.7rem;
    margin: 0;
    width: 100%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 250px;
    .user__list__item {
      flex-direction: column;
    }
    .user__list__item__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 10px;
      margin-top: 20px;
    }
    .user__list__item__subtitle {
      margin: 0;
    }

    .user__list__item__image__wrapper {
      height: 100px;
      margin: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 175px;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    .user__list__item {
      flex-direction: row;
    }
    .user__list__item__image__wrapper {
      height: 100px;
      margin: 0;
      width: 100px;
    }
    .user__list__item__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 5px;
      margin-top: 0px;
      margin-left: 10px;
    }
  }
`;

export default UserListStyles;
