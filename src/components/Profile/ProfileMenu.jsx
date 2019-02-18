import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { getState } from '../../StateProvider';

const ProfileMenuStyles = styled.button`
  background: var(--blue);
  border: 3px solid var(--pink);
  border-radius: 50%;
  cursor: pointer;
  height: ${props => props.size}px;
  outline: none;
  overflow: hidden;
  padding: 0;
  width: ${props => props.size}px;

  .profile__menu__image {
    height: 100%;
  }
`;

function ProfileMenu(props) {
  const [{ currentUser }, dispatch] = getState();
  const { size, user, history } = props;
  const setUser = () => {
    dispatch({
      type: 'setUser',
      user
    });
    if (user.id === currentUser.id) {
      history.push('/profile/about');
    } else {
      history.push(`/users/${user.id}/about`);
    }
  };
  return (
    <ProfileMenuStyles size={size} onClick={setUser}>
      <img src={user.avatar} alt="profile" className="profile__menu__image" />
    </ProfileMenuStyles>
  );
}

export default withRouter(ProfileMenu);
