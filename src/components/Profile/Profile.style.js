import styled from 'styled-components';

const ProfileStyles = styled.div`
  height: 100%;
  padding: ${props => (props.overview ? '20px 30px' : '30px')};
  overflow-y: scroll;

  .profile__header {
    border: 1px solid var(--lightgrey);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .profile__banner {
    background: linear-gradient(135deg, var(--blue), var(--teal));
    border-radius: 3px 3px 0 0;
    height: 125px;
    overflow: hidden;
    width: 100%;
    opacity: 0.5;
    z-index: -1;
    position: relative;
  }

  .profile__banner__image {
    object-fit: cover;
    width: 100%;
  }

  .profile__header__footer {
    display: flex;
    height: ${props => (props.overview ? '0px' : '75px')};
  }

  .profile__avatar__wrapper {
    align-self: flex-end;
    background: white;
    border: 3px solid var(--pink);
    border-radius: 50%;
    height: 150px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: ${props => (props.overview ? '-12.5px' : '20px')};
    overflow: hidden;
    width: 150px;
  }

  .profile__avatar__image {
    width: 100%;
  }

  .profile__user__name {
    color: var(--white);
    letter-spacing: 1px;
    margin-top: ${props => (props.overview ? '-75px' : '-60px')};
    margin-left: 200px;
    position: absolute;
  }

  .profile__header__navigation {
    display: flex;
    width: 100%;
  }

  .profile__link {
    align-items: center;
    color: var(--grey);
    display: flex;
    height: 100%;
    padding: 0 10px;
    text-decoration: none;
  }

  .profile__link--active {
    background: var(--lightblue);
    border-bottom: 3px solid var(--blue);
    color: var(--black);
    cursor: default;
    padding-top: 3px;
  }

  .profile__link:hover {
    background: var(--lightblue);
    border-bottom: 3px solid var(--blue);
    color: var(--blue);
    padding-top: 3px;
  }

  .profile__link--active:hover {
    color: var(--black);
  }

  .profile__controls {
    align-items: center;
    display: flex;
    font-size: 0.75rem;
    justify-content: center;
  }

  .profile__control {
    background: none;
    border: none;
    color: var(--grey);
    cursor: pointer;
    height: 100%;
    outline: none;
    width: 100%;
  }

  .profile__control:hover {
    color: var(--black);
  }
`;

export default ProfileStyles;
