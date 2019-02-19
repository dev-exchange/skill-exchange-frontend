import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.style';
import { getState } from '../../StateProvider';
import { ProfileMenu } from '..';

function Header(props) {
  const { title } = props;
  const [{ currentUser, authed, user }] = getState();
  let headerTitle = title;
  if (headerTitle === undefined) {
    if (user !== undefined) {
      const docTitle = `${user.firstName} ${user.lastName}`;
      headerTitle = docTitle;
      document.title = docTitle;
    } else {
      headerTitle = 'Header';
    }
  }
  return (
    <HeaderStyles>
      <h3 className="content__header__title">{headerTitle}</h3>
      {authed ? <ProfileMenu user={currentUser} size={50} /> : null}
    </HeaderStyles>
  );
}
Header.defaultProps = {};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default withRouter(Header);
