import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';
import UserOverviewStyles from './UserOverview.style';

function UserOverview(props) {
  const { user, overview, view, setView } = props;
  const [prevUser, setPrevUser] = useState(null);
  useEffect(() => {
    if (!Object.is(user, prevUser)) {
      document.querySelectorAll('.scroll__wrapper')[1].scrollTop = 0;
      setPrevUser(user);
    }
  });
  return (
    <UserOverviewStyles overview={overview} view={view}>
      {user === undefined ? null : (
        <React.Fragment>
          <button className="view__toggle__button" type="button" onClick={() => setView('list')}>
            <i className="fas fa-caret-left view__toggle" />
            Back
          </button>
          <div className="profile__header">
            <div className="profile__avatar__wrapper">
              <img src={user.avatar} alt="" className="profile__avatar__image" />
            </div>
            <div className="profile__user__title">
              <h2 className="profile__user__name">{`${user.firstName} ${user.lastName}`}</h2>
              {user.position !== undefined && user.position.length > 0 ? (
                <h5 className="profile__user__position">{`${user.position}`}</h5>
              ) : null}
            </div>
          </div>
          <div className="user__details">
            <span className="user__section__title">Basics</span>
            <div className="user__info">
              {user.location !== undefined && user.location.length > 0 ? (
                <div className="user__info__item">
                  <FontAwesomeIcon className="user__info__icon" icon={faMapPin} />
                  <span className="user__location">{user.location}</span>
                </div>
              ) : null}
              {user.email !== undefined && user.email.length > 0 ? (
                <div className="user__info__item">
                  <FontAwesomeIcon className="user__info__icon" icon={faEnvelope} />
                  <span className="user__location">{user.email}</span>
                </div>
              ) : null}
              {user.phone !== undefined && user.phone.length > 0 ? (
                <div className="user__info__item">
                  <FontAwesomeIcon className="user__info__icon" icon={faPhone} />
                  <span className="user__location">{user.phone}</span>
                </div>
              ) : null}
            </div>
            {user.about !== undefined && user.about.length > 0 ? (
              <React.Fragment>
                <span className="user__section__title user__section__title--sub">Bio</span>
                <span className="user__bio">{user.about}</span>
              </React.Fragment>
            ) : null}
          </div>
        </React.Fragment>
      )}
    </UserOverviewStyles>
  );
}

export default UserOverview;
