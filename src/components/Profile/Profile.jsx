import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileEdit from './ProfileEdit';
import { getState } from '../../StateProvider';

const ProfileStyles = styled.div`
  height: 100%;
  padding: 30px;
  overflow-y: scroll;

  .profile__header {
    border: 1px solid var(--lightgrey);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .profile__banner {
    border-radius: 3px 3px 0 0;
    height: 150px;
    overflow: hidden;
    width: 100%;
    opacity: 0.5;
    z-index: -1;
    position: relative;

    background: linear-gradient(186deg, var(--blue), var(--lightorange));
    background-size: 400% 400%;

    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 49% 0%;
      }
      50% {
        background-position: 52% 100%;
      }
      100% {
        background-position: 49% 0%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 49% 0%;
      }
      50% {
        background-position: 52% 100%;
      }
      100% {
        background-position: 49% 0%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 49% 0%;
      }
      50% {
        background-position: 52% 100%;
      }
      100% {
        background-position: 49% 0%;
      }
    }
  }

  .profile__banner__image {
    object-fit: cover;
    width: 100%;
  }

  .profile__header__footer {
    display: flex;
    height: 75px;
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
    margin-bottom: 20px;
    overflow: hidden;
    width: 150px;
  }

  .profile__avatar__image {
    width: 100%;
  }

  .profile__user__name {
    color: var(--white);
    letter-spacing: 1px;
    margin-top: -60px;
    margin-left: 190px;
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

function Profile(props) {
  const { location, history, match } = props;
  const [{ users, currentUser }] = getState();
  const [edit, toggleEdit] = useState(false);
  let user;
  if (location.pathname.indexOf('/profile') > -1) {
    user = currentUser;
  } else {
    [user] = users.filter(userObject => userObject.id === match.params.id);
  }
  if (user === undefined || user.id === null) {
    history.push('/');
  }
  return (
    <ProfileStyles>
      {user === undefined ? null : (
        <React.Fragment>
          {edit ? <ProfileEdit edit={edit} toggleEdit={toggleEdit} /> : null}
          <div className="profile__header">
            <div className="profile__banner" />
            <div className="profile__header__footer">
              <h2 className="profile__user__name">{`${user.firstName} ${user.lastName}`}</h2>
              <div className="profile__avatar__wrapper">
                <img src={user.avatar} alt="" className="profile__avatar__image" />
              </div>
              <div className="profile__header__navigation">
                <Link
                  to={user.id === currentUser.id ? '/profile/about' : `/users/${user.id}/about`}
                  className={
                    location.pathname.indexOf('about') > -1
                      ? 'profile__link profile__link--active'
                      : 'profile__link'
                  }
                >
                  About
                </Link>
                <Link
                  to={
                    user.id === currentUser.id ? '/profile/projects' : `/users/${user.id}/projects`
                  }
                  className={
                    location.pathname.indexOf('projects') > -1
                      ? 'profile__link profile__link--active'
                      : 'profile__link'
                  }
                >
                  Projects
                </Link>
                <Link
                  to={user.id === currentUser.id ? '/profile/skills' : `/users/${user.id}/skills`}
                  className={
                    location.pathname.indexOf('skills') > -1
                      ? 'profile__link profile__link--active'
                      : 'profile__link'
                  }
                >
                  Skills
                </Link>
                <Link
                  to={user.id === currentUser.id ? '/profile/contact' : `/users/${user.id}/contact`}
                  className={
                    location.pathname.indexOf('contact') > -1
                      ? 'profile__link profile__link--active'
                      : 'profile__link'
                  }
                >
                  Contact
                </Link>
              </div>
              {user.id === currentUser.id ? (
                <div className="profile__controls">
                  <button
                    onClick={() => toggleEdit(!edit)}
                    type="button"
                    className="profile__control"
                  >
                    Edit Profile
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </React.Fragment>
      )}
    </ProfileStyles>
  );
}

export default withRouter(Profile);
