import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getState } from '../../StateProvider';
import ProfileEdit from './ProfileEdit';

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
    height: 300px;
    overflow: hidden;
    width: 100%;
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
    border: 5px solid var(--blue);
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
  const [edit, toggleEdit] = useState(false);
  const { location } = props;
  return (
    <ProfileStyles>
      <ProfileEdit edit={edit} toggleEdit={toggleEdit} />
      <div className="profile__header">
        <div className="profile__banner">
          <img
            src="https://source.unsplash.com/800x800/?waves"
            alt=""
            className="profile__banner__image"
          />
        </div>
        <div className="profile__header__footer">
          <div className="profile__avatar__wrapper">
            <img
              src="https://source.unsplash.com/400x400/?portrait"
              alt=""
              className="profile__avatar__image"
            />
          </div>
          <div className="profile__header__navigation">
            <Link
              to="/profile/about"
              className={
                location.pathname === '/profile/about'
                  ? 'profile__link profile__link--active'
                  : 'profile__link'
              }
            >
              About
            </Link>
            <Link
              to="/profile/projects"
              className={
                location.pathname === '/profile/projects'
                  ? 'profile__link profile__link--active'
                  : 'profile__link'
              }
            >
              Projects
            </Link>
            <Link
              to="/profile/skills"
              className={
                location.pathname === '/profile/skills'
                  ? 'profile__link profile__link--active'
                  : 'profile__link'
              }
            >
              Skills
            </Link>
            <Link
              to="/profile/contact"
              className={
                location.pathname === '/profile/contact'
                  ? 'profile__link profile__link--active'
                  : 'profile__link'
              }
            >
              Contact
            </Link>
          </div>
          <div className="profile__controls">
            <button onClick={() => toggleEdit(!edit)} type="button" className="profile__control">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </ProfileStyles>
  );
}

export default withRouter(Profile);
