import React from 'react';
import UserOverviewStyles from './UserOverview.style';

function UserOverview(props) {
  const { user, overview, view, setView } = props;
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
            <h2 className="profile__user__name">{`${user.firstName} ${user.lastName}`}</h2>
          </div>
          <div className="project__details">
            <div className="project__info">
              <span className="project__section__title">Overview</span>
              <h2 className="project__title">{`${user.firstName} ${user.lastName}`}</h2>
              <p className="project__subtitle">{user.position}</p>
              {user.location !== undefined && user.location.length > 0 ? (
                <span className="user__location">{user.location}</span>
              ) : null}
              {user.about !== undefined ? (
                <p className="project__description">{user.about}</p>
              ) : null}
              <div className="project__stats">
                <span className="project__section__title">Contact Information</span>
                <div className="project__stat">
                  <span className="project__stat__name">Email</span>
                  <span className="project__stat__value">{user.email}</span>
                </div>
                {user.phone !== undefined && user.phone.length > 0 ? (
                  <div className="project__stat">
                    <span className="project__stat__name">Phone</span>
                    <span className="project__stat__value">{user.phone}</span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="project__stats">
              <span className="project__section__title">Stats</span>
              <div className="project__stat">
                <span className="project__stat__name">Skills</span>
                <span className="project__stat__value">{user.skills.length}</span>
              </div>
              <div className="project__stat">
                <span className="project__stat__name">Projects</span>
                <span className="project__stat__value">{user.projects.length}</span>
              </div>
              <div className="project__stat">
                <span className="project__stat__name">Open</span>
                <span className="project__stat__value">{user.collab}</span>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </UserOverviewStyles>
  );
}

export default UserOverview;
