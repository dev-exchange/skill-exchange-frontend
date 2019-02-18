import React, { useState } from 'react';
import styled from 'styled-components';
import nprogress from 'nprogress';
import { FormStyles } from '../styles';
import { getState } from '../../StateProvider';
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
      'basics security'
      'basics security'
      'control control';
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

export default function ProfileEdit(props) {
  const { edit, toggleEdit } = props;
  const [{ loading, currentUser }, dispatch] = getState();

  // STATES

  // BASIC INFO SECTION
  const [basicForm, setBasicValues] = useState({
    firstName: currentUser.firstName || '',
    lastName: currentUser.lastName || '',
    email: currentUser.email || '',
    phone: currentUser.phone || ''
  });

  // SECURITY SECTION
  const [securityForm, setSecurityValues] = useState({
    currentPass: '',
    newPassword: '',
    newPassConf: ''
  });

  // CHANGED SECTIONS
  const [changed, setChanged] = useState({
    changed: false,
    sections: []
  });

  const closeEdit = () => {
    toggleEdit(!edit);
  };

  const handleChange = (ev, section) => {
    // ADD CHANGED SECTION TO CHANGED SECTIONS LIST
    const sections = changed.sections.filter(sectionName => sectionName !== section);
    setChanged({ changed: true, sections: [...sections, section] });

    // ADD CHANGES TO THE APPROPRIATE STATE
    switch (section) {
      case 'basics':
        setBasicValues({
          ...basicForm,
          [ev.target.name]: ev.target.value
        });
        break;
      case 'security':
        setSecurityValues({
          ...securityForm,
          [ev.target.name]: ev.target.value
        });
        break;
      default:
        break;
    }
  };

  // SAVE ALL CHANGED SECTIONS
  const saveChanged = () =>
    new Promise((resolve, reject) => {
      changed.sections.forEach(sectionTitle => {
        switch (sectionTitle) {
          case 'basics': {
            dispatch({
              type: 'updateUser',
              updatedUser: { ...currentUser, ...basicForm }
            });
            break;
          }
          default:
            break;
        }
      });
      resolve();
    });

  const handleSave = (ev, section) => {
    ev.preventDefault();
    // VALIDATE INPUT BEFORE SAVE
    if (section === 'basics') {
      if (basicForm.email === '') {
        dispatch({ type: 'setAlert', message: 'Email is required' });
        return;
      }
      if (basicForm.firstName === '') {
        dispatch({ type: 'setAlert', message: 'First Name is required' });
        return;
      }
    }
    if (section === 'security') {
      if (securityForm.currentPass !== currentUser.password) {
        dispatch({ type: 'setAlert', message: 'Your current password is incorrect' });
        return;
      }
      if (securityForm.newPassword === '') {
        dispatch({ type: 'setAlert', message: 'New password cannot be blank' });
        return;
      }
      if (securityForm.newPassConf !== securityForm.newPassword) {
        dispatch({ type: 'setAlert', message: 'New passwords do not match' });
        return;
      }
    }
    nprogress.start();
    dispatch({
      type: 'setLoading',
      newLoading: { loading: true, sectionName: section }
    });
    setTimeout(async () => {
      dispatch({
        type: 'setLoading',
        newLoading: { loading: false }
      });
      switch (section) {
        case 'changed':
          await saveChanged();
          closeEdit();
          break;
        case 'basics': {
          dispatch({
            type: 'updateUser',
            updatedUser: { ...currentUser, ...basicForm }
          });
          const sections = changed.sections.filter(sectionName => sectionName !== section);
          setChanged({ changed: sections.length > 0, sections: [...sections] });
          break;
        }
        case 'security': {
          dispatch({
            type: 'updateUser',
            updatedUser: { ...currentUser, password: securityForm.newPassword }
          });
          setSecurityValues({
            currentPass: '',
            newPassword: '',
            newPassConf: ''
          });
          const sections = changed.sections.filter(sectionName => sectionName !== section);
          setChanged({ changed: sections.length > 0, sections: [...sections] });
          break;
        }
        default:
          break;
      }
      nprogress.done();
    }, 2000);
  };
  return (
    <ProfileEditStyles edit={edit} sections={changed.sections}>
      <div className="profile__editor">
        <div className="profile__editor__basics profile__editor__section">
          <FormStyles>
            <form className="form" onSubmit={ev => handleSave(ev, 'basics')}>
              <div className="form__header">
                <h3 className="form__heading">Basic Info</h3>
                <p>Edit your name and contact details</p>
              </div>
              <label className="form__label" htmlFor="firstName">
                First Name
                <input
                  className="form__input"
                  type="text"
                  name="firstName"
                  value={basicForm.firstName}
                  onChange={ev => handleChange(ev, 'basics')}
                />
              </label>
              <label className="form__label" htmlFor="lastName">
                Last Name
                <input
                  className="form__input"
                  type="text"
                  name="lastName"
                  value={basicForm.lastName}
                  onChange={ev => handleChange(ev, 'basics')}
                />
              </label>
              <label className="form__label form__label--wide" htmlFor="email">
                EMail
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  value={basicForm.email}
                  onChange={ev => handleChange(ev, 'basics')}
                />
              </label>
              <label className="form__label form__label--wide" htmlFor="phone">
                Phone
                <input
                  className="form__input"
                  type="text"
                  name="phone"
                  value={basicForm.phone}
                  onChange={ev => handleChange(ev, 'basics')}
                />
              </label>
              {changed.changed && changed.sections.indexOf('basics') > -1 ? (
                <button className="form__button form__button--save" type="submit">
                  {loading.loading &&
                  (loading.sectionName === 'basics' || loading.sectionName === 'changed') ? (
                    <img className="loading__icon" alt="" src={savingIcon} />
                  ) : (
                    'Save Changes'
                  )}
                </button>
              ) : null}
            </form>
          </FormStyles>
        </div>

        <div className="profile__editor__security profile__editor__section">
          <FormStyles>
            <form className="form" onSubmit={ev => handleSave(ev, 'security')}>
              <div className="form__header">
                <h3 className="form__heading">Account Security</h3>
                <p>Reset your password</p>
              </div>
              <label className="form__label form__label--wide" htmlFor="currentPass">
                Current Password
                <input
                  className="form__input"
                  type="password"
                  name="currentPass"
                  value={securityForm.currentPass}
                  onChange={ev => handleChange(ev, 'security')}
                />
              </label>
              <label className="form__label form__label--wide" htmlFor="newPassword">
                New Password
                <input
                  className="form__input"
                  type="password"
                  name="newPassword"
                  value={securityForm.newPassword}
                  onChange={ev => handleChange(ev, 'security')}
                />
              </label>
              <label className="form__label form__label--wide" htmlFor="newPassConf">
                Confirm
                <input
                  className="form__input"
                  type="password"
                  name="newPassConf"
                  value={securityForm.newPassConf}
                  onChange={ev => handleChange(ev, 'security')}
                />
              </label>
              {changed.changed && changed.sections.indexOf('security') > -1 ? (
                <button className="form__button form__button--save" type="submit">
                  {loading.loading &&
                  (loading.sectionName === 'security' || loading.sectionName === 'changed') ? (
                    <img className="loading__icon" alt="" src={savingIcon} />
                  ) : (
                    'Save Changes'
                  )}
                </button>
              ) : null}
            </form>
          </FormStyles>
        </div>

        <div className="profile__editor__controls">
          <button
            onClick={changed.changed ? ev => handleSave(ev, 'changed') : closeEdit}
            type="button"
            className={
              changed.changed
                ? 'profile__editor__button profile__editor__button--save'
                : 'profile__editor__button'
            }
          >
            {changed.changed ? 'Save & Exit' : 'Done'}
          </button>
          {changed.changed ? (
            <button onClick={closeEdit} type="button" className="profile__editor__button">
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    </ProfileEditStyles>
  );
}
