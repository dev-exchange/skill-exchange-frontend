import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.style';
import { getState } from '../../StateProvider';

function Header(props) {
  const { title } = props;
  const [{ user, authed }] = getState();
  return (
    <HeaderStyles>
      <h3 className="content__header__title">{title}</h3>
      {authed ? (
        <div className="profile__menu">
          <img src={user.avatar} alt="profile" className="profile__menu__image" />
        </div>
      ) : null}
    </HeaderStyles>
  );
}
Header.defaultProps = {};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default withRouter(Header);
