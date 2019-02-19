import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header, SignIn, SignUp, SignOut, OverviewList, Profile } from '..';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pathTranslations } from '../../constants';

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  overflow: hidden;
`;

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
      <Route path="/projects" render={() => <OverviewList type="projects" />} />
      <Route exact path="/users" render={() => <OverviewList type="users" />} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/logout" component={SignOut} />
      <Route path="/profile" component={Profile} />
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
