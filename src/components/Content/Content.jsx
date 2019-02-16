import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header, SignIn, SignUp, SignOut, ProjectList, Profile } from '..';
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

function Content(props) {
  const { location } = props;
  const title = pathTranslations[location.pathname];
  useEffect(() => {
    document.title = `Skill Exchange - ${title}`;
  });
  const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed'];
  const memberships = ['Open', 'Closed', 'Invite Only'];
  const imageTags = [
    'project',
    'design',
    'forest',
    'mountain',
    'ocean',
    'river',
    'puppies',
    'business',
    'meeting'
  ];
  const highlights = new Array(imageTags.length).fill(undefined).map((element, index) => ({
    title: faker.commerce.productName(),
    subtitle: faker.company.catchPhrase(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: faker.lorem.paragraph(),
    skills: [
      {
        key: 'A',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 10,
        color: '#69d2e7'
      },
      {
        key: 'B',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 20,
        color: '#a7dbd8'
      },
      {
        key: 'C',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 30,
        color: '#fa6900'
      },
      {
        key: 'D',
        title: `${faker.hacker.adjective()} ${faker.hacker.verb()}`,
        value: 40,
        color: '#e0e4cc'
      }
    ],
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
    })),
    members: new Array(Math.floor(Math.random() * 20) + 10)
      .fill(undefined)
      .map((element, index) => ({
        name: `${faker.name.firstName()}`,
        avatar: `https://source.unsplash.com/${200 + index}x${200 + index}/?portrait`
      }))
  }));
  return (
    <ContentStyles>
      <Header pathname={location.pathname} title={title} />
      <Route path="/projects" render={() => <ProjectList highlights={highlights} />} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/logout" component={SignOut} />
      <Route path="/profile" component={Profile} />
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
