import React from 'react';
import { getState } from '../../StateProvider';
import UserListStyles from './UserList.style';

export default function UserList(props) {
  const { users, setActive, active, type, setView } = props;
  const changeActive = item => {
    setActive(item);
    setView('overview');
  };
  return (
    <UserListStyles type={type}>
      {users.map(user => (
        // eslint-disable-next-line
        <div
          onClick={() => changeActive(user)}
          key={user.id}
          className={
            active.id === user.id ? `user__list__item user__list__item--active` : `user__list__item`
          }
        >
          <div className="user__list__item__image__wrapper">
            <img src={user.avatar} alt="" className="user__list__item__image" />
          </div>
          <div className="user__list__item__details">
            <h4 className="user__list__item__title">{`${user.firstName} ${user.lastName}`}</h4>
            <p className="user__list__item__subtitle">{user.position}</p>
            <div className="user__list__item__stats">
              <span className="user__list__item__stat">{user.location}</span>
            </div>
          </div>
        </div>
      ))}
    </UserListStyles>
  );
}
