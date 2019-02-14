import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header, SignIn, SignUp, ProjectList } from '..';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import faker from 'faker';
import { pathTranslations } from '../../constants';

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
  overflow: hidden;
`;

function Dashboard() {
  return <div>Dashboard</div>;
}

function Skills() {
  return <div>Skills</div>;
}

function Content(props) {
  const { location } = props;
  const title = pathTranslations[location.pathname];
  useEffect(() => {
    document.title = `Skill Exchange - ${title}`;
  });
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed'];
  const memberships = ['Open', 'Closed', 'Invite Only'];
  const imageTags = ['project', 'design', 'forest', 'mountain', 'ocean'];
  const highlights = new Array(imageTags.length).fill(undefined).map((element, index) => ({
    title: faker.commerce.productName(),
    subtitle: faker.company.catchPhrase(),
    members: Math.floor(Math.random() * 100) + 1,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: faker.lorem.paragraph(),
    membership: memberships[Math.floor(Math.random() * memberships.length)],
    imageSrc: `https://source.unsplash.com/800x800/?${imageTags[index]}`,
    comments: new Array(Math.floor(Math.random() * 10)).fill(undefined).map((element, index) => ({
      user: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: `https://source.unsplash.com/${100 + index}x${100 + index}/?portrait`
      },
      timestamp: new Date(faker.date.past()).getTime(),
      comment: faker.lorem.paragraph(),
      replies: new Array(Math.floor(Math.random() * 5)).fill(undefined).map((element, index) => ({
        user: {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatar: `https://source.unsplash.com/${150 + index}x${150 + index}/?portrait`
        },
        timestamp: new Date(faker.date.past()).getTime(),
        comment: faker.lorem.paragraph()
      }))
    }))
  }));
  return (
    <ContentStyles>
      <Header pathname={location.pathname} title={title} />
      <Route exact path="/" component={Dashboard} />
      <Route path="/projects" render={() => <ProjectList highlights={highlights} />} />
      <Route path="/skills" component={Skills} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
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
