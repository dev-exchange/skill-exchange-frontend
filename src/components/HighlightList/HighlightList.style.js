import styled from 'styled-components';

const HighlightListStyles = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px;

  .highlight {
    cursor: pointer;
    transition: background 150ms ease-out;
  }

  .highlight--tiny {
    border-bottom: 1px solid var(--lightgrey);
    display: flex;
    padding: 20px;
    padding-left: 20px;
  }

  .highlight--tiny--active {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    padding-left: 17px;
  }

  .highlight--tiny .highlight__image__wrapper {
    flex-shrink: 0;
    height: 100px;
    margin-right: 10px;
    width: 100px;
  }

  .highlight--tiny:hover {
    background: var(--lightblue);
    border-bottom: 1px solid var(--lightgrey);
    border-left: 3px solid var(--blue);
    padding-left: 17px;
  }

  .highlight--tiny--active:hover {
    background: var(--lightblue);
    border-left: 3px solid var(--blue);
    cursor: default;
  }

  .highlight--tiny--active:hover .highlight__title {
    color: var(--black);
  }

  .highlight__image__wrapper {
    background: linear-gradient(135deg, var(--blue), var(--teal));
    border-radius: 3px;
    height: 175px;
    mask-image: radial-gradient(white, black);
    overflow: hidden;
    width: 100%;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  .highlight__image {
    object-position: bottom;
    object-fit: cover;
    width: 100%;
    transition: all 300ms ease-out;
    display: ${props => (props.type === 'users' ? 'inline' : 'none')};
  }

  .highlight__details {
    margin-bottom: 20px;
  }

  .highlight--tiny .highlight__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }

  .highlight--tiny .highlight__title {
    margin: 0;
  }

  .highlight__title {
    margin-bottom: 5px;
    transition: all 150ms ease-out;
  }

  .highlight--tiny .highlight__subtitle {
    margin: 0;
    margin-top: -20px;
  }

  .highlight__subtitle {
    color: var(--grey);
    font-size: 0.9rem;
    margin-top: 5px;
  }

  .highlight--tiny .highlight__stats {
    margin: 0;
  }

  .highlight__stats {
    color: var(--grey);
    display: flex;
    font-size: 0.7rem;
    margin-top: 40px;
    width: 100%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 250px;
    .highlight--tiny {
      flex-direction: column;
    }
    .highlight--tiny .highlight__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 10px;
      margin-top: 20px;
    }
    .highlight--tiny .highlight__subtitle {
      margin: 0;
    }

    .highlight--tiny .highlight__image__wrapper {
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
    .highlight--tiny {
      flex-direction: row;
    }
    .highlight--tiny .highlight__image__wrapper {
      height: 100px;
      margin: 0;
      width: 100px;
    }
    .highlight--tiny .highlight__details {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 5px;
      margin-top: 0px;
      margin-left: 10px;
    }
  }
`;

export default HighlightListStyles;
