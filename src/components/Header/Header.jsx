import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.style';

function Header(props) {
  const { title } = props;
  return (
    <HeaderStyles>
      <h3 className="content__header__title">{title}</h3>
      <div className="profile__menu">
        <img
          src="https://source.unsplash.com/200x200/?portrait"
          alt="profile"
          className="profile__menu__image"
        />
      </div>
    </HeaderStyles>
  );
}
Header.defaultProps = {};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default withRouter(Header);
