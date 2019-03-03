import uuid from 'uuid/v4';
import faker from 'faker';
import projectImage from '../assets/images/shuffle.png';
import avatar from '../assets/images/user.png';

const util = {
  getDemoData() {
    let sizeIndex = 300;
    const projectTotal = 10;
    const fakeUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      skills: [],
      projects: [],
      collab: 'Yes',
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
    };
    const users = [];
    const statuses = ['In Progress', 'Planning', 'On Hold', 'Completed'];
    const memberships = ['Open', 'Closed', 'Invite Only'];
    const projects = new Array(projectTotal).fill(undefined).map((element, index) => ({
      id: uuid(),
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
      imageSrc: projectImage,
      comments: new Array(Math.floor(Math.random() * 10)).fill(undefined).map(() => {
        const commentUser = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          skills: [],
          projects: [],
          collab: 'No',
          email: faker.internet.email(),
          password: faker.internet.password(),
          position: faker.name.jobTitle(),
          location: `${faker.address.city()}, ${faker.address.state()}`,
          memberSince: faker.date.past(),
          phone: faker.phone.phoneNumber(),
          about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
          id: uuid(),
          avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
        };
        users.push(commentUser);
        return {
          user: commentUser,
          timestamp: new Date(faker.date.past()).getTime(),
          comment: faker.lorem.paragraph(),
          replies: new Array(Math.floor(Math.random() * 5)).fill(undefined).map(() => {
            const replyUser = {
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              skills: [],
              projects: [],
              collab: 'Yes',
              email: faker.internet.email(),
              password: faker.internet.password(),
              position: faker.name.jobTitle(),
              location: `${faker.address.city()}, ${faker.address.state()}`,
              memberSince: faker.date.past(),
              phone: faker.phone.phoneNumber(),
              about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
              id: uuid(),
              avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
            };
            users.push(replyUser);
            return {
              user: replyUser,
              timestamp: new Date(faker.date.past()).getTime(),
              comment: faker.lorem.paragraph()
            };
          })
        };
      }),
      members: new Array(Math.floor(Math.random() * 20) + 10).fill(undefined).map(() => {
        const memberUser = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          skills: [],
          projects: [],
          collab: 'Yes',
          email: faker.internet.email(),
          password: faker.internet.password(),
          id: uuid(),
          position: faker.name.jobTitle(),
          location: `${faker.address.city()}, ${faker.address.state()}`,
          memberSince: faker.date.past(),
          phone: faker.phone.phoneNumber(),
          about: faker.lorem.paragraphs(Math.floor(Math.random() * 3) + 1),
          avatar: `https://source.unsplash.com/${(sizeIndex += 1)}x${sizeIndex}/?portrait`
        };
        users.push(memberUser);
        return memberUser;
      })
    }));
    const demoData = {
      users,
      projects,
      fakeUser
    };
    return demoData;
  }
};

export default util;
