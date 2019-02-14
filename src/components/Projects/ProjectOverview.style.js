import styled from 'styled-components';

const ProjectOverviewStyles = styled.div`
  /* .project__overview { */
  border-left: 1px solid var(--lightgrey);
  display: flex;
  flex-direction: column;
  padding: 30px;
  /* } */

  .project__section__title {
    border-bottom: 1px solid var(--lightgrey);
    color: var(--grey);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0;
    margin-bottom: 20px;
    padding-bottom: 5px;
    text-transform: uppercase;
  }

  /* PROJECT BANNER */
  .project__banner {
    border-radius: 3px;
    height: 400px;
    overflow: hidden;
    width: 100%;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  .project__banner__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  /* PROJECT DETAILS */
  .project__details {
    align-items: start;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 175px;
    grid-template-areas:
      'info stat'
      'disc disc';
    padding-top: 30px;
  }

  /* PROJECT INFO */

  .project__info {
    display: flex;
    flex-direction: column;
    font-weight: 300;
    grid-area: info;
  }

  .project__title {
    font-weight: 400;
    margin: 0;
  }

  .project__subtitle {
    color: var(--grey);
  }

  .project__description {
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.25rem;
  }

  /* PROJECT STATS */
  .project__stats {
    display: grid;
    grid-area: stat;
    grid-auto-flow: row;
  }

  .project__stat {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .project__stat__name {
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 300;
  }

  .project__stat__value {
    font-size: 0.9rem;
    font-weight: 400;
  }

  /* PROJECT DISCUSSION */
  .project__discussion {
    display: flex;
    flex-direction: column;
    grid-area: disc;
  }

  .comment {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .comment:last-child {
    margin-bottom: 0;
  }

  .comment__header {
    align-items: center;
    display: flex;
    height: 60px;
  }

  .comment__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }

  .comment__user__name {
    font-size: 0.9rem;
    margin-bottom: 5px;
  }

  .comment__timestamp {
    color: var(--grey);
    font-size: 0.8rem;
  }

  .comment__content {
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.25rem;
  }

  .comment__replies {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 50px;
  }

  .profile__menu {
    border: 3px solid var(--blue);
    border-radius: 50%;
    cursor: pointer;
    height: 50px;
    overflow: hidden;
    width: 50px;
  }

  .profile__menu__image {
    height: 100%;
  }
`;

export default ProjectOverviewStyles;
