import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProfileEdit from './ProfileEdit';
import { getState } from '../../StateProvider';
import ProfileStyles from './Profile.style';

function Profile(props) {
  const { location, history, match, selectedUser, overview } = props;
  const [{ users, currentUser, user }, dispatch] = getState();
  const [edit, toggleEdit] = useState(false);
  let profileUser;
  if (profileUser === undefined) {
    if (location.pathname.indexOf('/profile') > -1) {
      profileUser = currentUser;
    } else if (selectedUser !== undefined) {
      profileUser = selectedUser;
    } else {
      [profileUser] = users.filter(userObject => userObject.id === match.params.id);
    }
  }
  if (profileUser === undefined || profileUser.id === null) {
    history.push('/');
  }
  return (
    <ProfileStyles overview={overview}>
      {profileUser === undefined ? null : (
        <React.Fragment>
          {edit ? <ProfileEdit edit={edit} toggleEdit={toggleEdit} /> : null}
          <div className="profile__header">
            <div className="profile__banner" />
            <div className="profile__header__footer">
              <h2 className="profile__user__name">
                {`${profileUser.firstName} ${profileUser.lastName}`}
              </h2>
              <div className="profile__avatar__wrapper">
                <img src={profileUser.avatar} alt="" className="profile__avatar__image" />
              </div>
              {!overview ? (
                <div className="profile__header__navigation">
                  <Link
                    to={
                      profileUser.id === currentUser.id
                        ? '/profile/about'
                        : `/users/${profileUser.id}/about`
                    }
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
                      profileUser.id === currentUser.id
                        ? '/profile/projects'
                        : `/users/${profileUser.id}/projects`
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
                    to={
                      profileUser.id === currentUser.id
                        ? '/profile/skills'
                        : `/users/${profileUser.id}/skills`
                    }
                    className={
                      location.pathname.indexOf('skills') > -1
                        ? 'profile__link profile__link--active'
                        : 'profile__link'
                    }
                  >
                    Skills
                  </Link>
                  <Link
                    to={
                      profileUser.id === currentUser.id
                        ? '/profile/contact'
                        : `/users/${profileUser.id}/contact`
                    }
                    className={
                      location.pathname.indexOf('contact') > -1
                        ? 'profile__link profile__link--active'
                        : 'profile__link'
                    }
                  >
                    Contact
                  </Link>
                </div>
              ) : null}
              {profileUser.id === currentUser.id ? (
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
