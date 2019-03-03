import styled from 'styled-components';

const UserOverviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

  .profile__header {
    background: linear-gradient(135deg, var(--blue), var(--teal));
    align-items: center;
    border-radius: 3px;
    display: flex;
    height: 125px;
    margin-bottom: 30px;
    width: 100%;
  }

  .profile__avatar__wrapper {
    background: white;
    border: 3px solid var(--pink);
    border-radius: 50%;
    height: 150px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 30px;
    margin-right: 30px;
    overflow: hidden;
    width: 150px;
  }

  .profile__avatar__image {
    width: 100%;
  }

  .profile__user__title {
    display: flex;
    flex-direction: column;
  }

  .profile__user__title * {
    margin: 0;
  }

  .profile__user__name {
    color: var(--white);
    color: var(--pink);
    letter-spacing: 1px;
    margin: 0;
    opacity: 0.75;
    text-shadow: 1px 1px 1px white;
  }

  .profile__user__position {
    color: var(--pink);
    color: var(--white);
  }

  .user__section__title {
    border-bottom: 1px solid var(--lightgrey);
    color: var(--grey);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0;
    margin-bottom: 20px;
    padding-bottom: 5px;
    text-transform: uppercase;
    width: 100%;
  }

  .user__section__title--sub {
    border: none;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .user__details {
    display: flex;
    flex-direction: column;
  }

  .user__info {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  .user__info__item {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
  }

  .user__info__icon {
    color: var(--grey);
  }

  .view__toggle__button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    margin-bottom: 20px;
    outline: none;
    padding: 0;
  }

  .view__toggle {
    color: var(--black);
    font-size: 2rem;
    margin-right: 10px;
  }

  @media only screen and (max-width: 1000px) {
    .user__details {
      grid-template-columns: 1fr;
      grid-template-areas:
        'info'
        'stat';
    }
  }

  @media only screen and (max-width: 850px) {
    .profile__avatar__wrapper {
      height: 100px;
      margin-left: 10px;
      margin-right: 10px;
      width: 100px;
    }

    .profile__header {
      height: 75px;
    }
  }
  @media only screen and (max-width: 550px) {
    padding: 20px 12.5px;
    .view__toggle__button {
      display: flex;
    }
  }
  @media only screen and (max-width: 500px) {
    grid-column: 1;
  }
`;

export default UserOverviewStyles;
