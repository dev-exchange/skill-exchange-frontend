import styled from 'styled-components';

const BrowserListStyles = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px;

  .browser__list__item {
    cursor: pointer;
    border-bottom: 1px solid var(--lightgrey);
    display: flex;
    padding: 20px;
    padding-left: 20px;
    transition: background 150ms ease-out;
  }

  .browser__list__item:hover {
    background: var(--lightblue);
    border-bottom: 1px solid var(--lightgrey);
    border-left: 3px solid var(--blue);
    padding-left: 17px;
  }

  .browser__list__item--active {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    padding-left: 17px;
  }

  .browser__list__item--active:hover {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    cursor: default;
  }

  .browser__list__item--active:hover .browser__list__item__title {
    color: var(--black);
  }

  .browser__list__item__image__wrapper {
    background: linear-gradient(135deg, var(--blue), var(--teal));
    border-radius: 3px;
    flex-shrink: 0;
    height: 100px;
    margin-right: 10px;
    mask-image: radial-gradient(white, black);
    overflow: hidden;
    width: 100px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  .browser__list__item__image {
    height: 100px;
    object-position: center center;
    object-fit: cover;
    width: 100%;
    transition: all 300ms ease-out;
    display: ${props => (props.type === 'users' ? 'inline' : 'none')};
  }

  .browser__list__item__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }

  .browser__list__item__title {
    margin: 0;
    transition: all 150ms ease-out;
  }

  .browser__list__item__subtitle {
    color: var(--grey);
    font-size: 0.9rem;
    margin: 0;
    margin-top: -20px;
  }

  .browser__list__item__stats {
    color: var(--grey);
    display: flex;
    font-size: 0.7rem;
    margin: 0;
    width: 100%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 250px;
    .browser__list__item {
      flex-direction: column;
    }
    .browser__list__item__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 10px;
      margin-top: 20px;
    }
    .browser__list__item__subtitle {
      margin: 0;
    }

    .browser__list__item__image__wrapper {
      height: 100px;
      margin: 0;
      width: 100%;
    }
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 175px;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    .browser__list__item {
      flex-direction: row;
    }
    .browser__list__item__image__wrapper {
      height: 100px;
      margin: 0;
      width: 100px;
    }
    .browser__list__item__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 5px;
      margin-top: 0px;
      margin-left: 10px;
    }
  }
`;

export default BrowserListStyles;
