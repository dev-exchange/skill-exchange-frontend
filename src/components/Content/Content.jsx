import React, { useEffect } from 'react';
import { Header, SignIn, SignUp, SignOut, Browser, Profile, Dashboard } from '..';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pathTranslations } from '../../constants';
import ContentStyles from './Content.style';

function Content(props) {
  const { location } = props;
  const title = pathTranslations[location.pathname];
  useEffect(() => {
    if (title !== undefined) {
      document.title = `${title} - SE`;
    }
  });
  return (
    <ContentStyles>
      <Header pathname={location.pathname} title={title} />
      <Route path="/projects" render={() => <Browser type="projects" />} />
      <Route exact path="/users" render={() => <Browser type="users" />} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/logout" component={SignOut} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/" component={Dashboard} />
      <Route path="/users/:id" component={Profile} />
    </ContentStyles>
  );
}

Content.defaultProps = {};

Content.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired
};

export default withRouter(Content);
