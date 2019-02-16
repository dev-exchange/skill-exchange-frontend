import React from 'react';
import styled from 'styled-components';
import nprogress from 'nprogress';
import { FormStyles } from '../styles';
import { getState } from '../../StateProvider';

import '../../assets/nprogress.css';
import savingIcon from '../../assets/loaders/svg-loaders/tail-spin.svg';

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
    display: grid;
    grid-gap: 25px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'basics projects security'
      'basics skills messages'
      'control control control';
  }

  .profile__editor__basics {
    grid-area: basics;
  }

  .profile__editor__security {
    grid-area: security;
  }

  .profile__editor__projects {
    grid-area: projects;
  }

  .profile__editor__skills {
    grid-area: skills;
  }

  .profile__editor__messages {
    grid-area: messages;
  }

  .form {
    align-self: start;
    left: 0;
    width: 100%;
  }

  .profile__editor__button {
    background: var(--blue);
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    grid-area: control;
    height: 40px;
    outline: none;
  }
`;

export default function ProfileEdit(props) {
  const { edit, toggleEdit } = props;

  const [{ loading }, dispatch] = getState();
  const handleSave = ev => {
    ev.preventDefault();
    nprogress.start();
    dispatch({
      type: 'setLoading',
      newLoading: { ...loading, loading: true }
    });
    setTimeout(() => {
      dispatch({
        type: 'setLoading',
        newLoading: { ...loading, loading: false }
      });
      nprogress.done();
    }, 2000);
  };
  return (
    <ProfileEditStyles edit={edit}>
      <div className="profile__editor">
        <div className="profile__editor__basics profile__editor__section">
          <FormStyles>
            <form className="form" onSubmit={handleSave}>
              <div className="form__header">
                <h3 className="form__heading">Basic Info</h3>
                <p>Edit your name and contact details</p>
              </div>
              <label className="form__label" htmlFor="firstName">
                First Name
                <input className="form__input" type="text" name="firstName" />
              </label>
              <label className="form__label" htmlFor="lastName">
                Last Name
                <input className="form__input" type="text" name="lastName" />
              </label>
              <label className="form__label form__label--wide" htmlFor="email">
                EMail
                <input className="form__input" type="email" name="email" />
              </label>
              <label className="form__label form__label--wide" htmlFor="phone">
                Phone
                <input className="form__input" type="text" name="phone" />
              </label>
              <button className="form__button" type="submit">
                {loading.loading ? (
                  <img className="loading__icon" alt="" src={savingIcon} />
                ) : (
                  'Save Changes'
                )}
              </button>
            </form>
          </FormStyles>
        </div>

        <div className="profile__editor__projects profile__editor__section">
          <FormStyles>
            <form className="form" onSubmit={handleSave}>
              <div className="form__header">
                <h3 className="form__heading">Project Settings</h3>
                <p>Change settings related to projects</p>
              </div>
              <label className="form__label" htmlFor="currentPassword">
                Field
                <input className="form__input" type="password" name="currentPassword" />
              </label>
              <label className="form__label" htmlFor="newPassword">
                Another Field
                <input className="form__input" type="password" name="newPassword" />
              </label>
              <label className="form__label form__label--wide" htmlFor="newPassConf">
                More Fields
                <input className="form__input" type="password" name="newPassConf" />
              </label>
              <button className="form__button" type="submit">
                {loading.loading ? (
                  <img className="loading__icon" alt="" src={savingIcon} />
                ) : (
                  'Save Changes'
                )}
              </button>
            </form>
          </FormStyles>
        </div>

        <div className="profile__editor__security profile__editor__section">
          <FormStyles>
            <form className="form" onSubmit={handleSave}>
              <div className="form__header">
                <h3 className="form__heading">Account Security</h3>
                <p>Reset your password</p>
              </div>
              <label className="form__label form__label--wide" htmlFor="currentPassword">
                Current Password
                <input className="form__input" type="password" name="currentPassword" />
              </label>
              <label className="form__label form__label--wide" htmlFor="newPassword">
                New Password
                <input className="form__input" type="password" name="newPassword" />
              </label>
              <label className="form__label form__label--wide" htmlFor="newPassConf">
                Confirm
                <input className="form__input" type="password" name="newPassConf" />
              </label>
              <button className="form__button" type="submit">
                {loading.loading ? (
                  <img className="loading__icon" alt="" src={savingIcon} />
                ) : (
                  'Save Changes'
                )}
              </button>
            </form>
          </FormStyles>
        </div>

        <button onClick={() => toggleEdit(!edit)} type="button" className="profile__editor__button">
          Done
        </button>
      </div>
    </ProfileEditStyles>
  );
}
