import styled from 'styled-components';

const HighlightListStyles = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 350px;

  .highlight {
    border-bottom: 1px solid var(--lightgrey);
    cursor: pointer;
    width: 100%;
    transition: background 150ms ease-out;
  }

  .highlight--tiny:first-child {
    /* border-top: 1px solid var(--lightgrey); */
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

  .highlight:hover {
    border-bottom: 1px solid var(--grey);
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

  .highlight:hover .highlight__title {
    color: var(--blue);
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

  .highlight--narrow .highlight__image__wrapper {
    height: 125px;
  }

  .highlight__image {
    object-position: center;
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

  .highlight--narrow .highlight__details {
    margin-bottom: 10px;
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

  .highlight--narrow .highlight__stats {
    margin-top: 20px;
  }
`;

export default HighlightListStyles;
