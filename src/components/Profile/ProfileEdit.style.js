import styled from 'styled-components';

const ProfileEditStyles = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  height: 100vh;
  left: 0;
  opacity: ${props => (props.edit ? 1 : 0)};
  padding: 50px;
  pointer-events: ${props => (props.edit ? 'all' : 'none')};
  position: fixed;
  top: 0;
  overflow-y: scroll;
  transition: opacity 250ms ease-in-out;
  width: 100vw;
  z-index: 1000;

  .profile__editor {
    align-items: start;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'basics security'
      'bio none'
      'control control';
  }

  .profile__editor__basics {
    grid-area: basics;
  }

  .profile__editor__security {
    grid-area: security;
  }

  .profile__editor__bio {
    grid-area: bio;
  }

  .form {
    align-self: start;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .profile__editor__controls {
    grid-area: control;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
  }

  .profile__editor__button {
    background: var(--blue);
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    height: 40px;
    outline: none;
    transition: background 250ms ease-in-out;
  }

  .profile__editor__button--save,
  .form__button--save {
    background: var(--lightorange);
  }
`;

export default ProfileEditStyles;
