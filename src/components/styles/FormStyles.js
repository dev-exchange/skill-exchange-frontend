import styled from 'styled-components';

const FormStyles = styled.div`
  padding: 30px;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  .form {
    border: 1px solid var(--lightgrey);
    border-radius: 3px;
    display: grid;
    flex-grow: 0;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    min-width: 300px;
  }

  .form__header {
    grid-column: span 2;
  }

  .form__label {
    color: var(--grey);
    display: grid;
    font-size: 0.7rem;
    grid-auto-flow: row;
    grid-gap: 5px;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .form__label--wide {
    grid-column: span 2;
  }

  .form__input {
    border: 1px solid var(--lightgrey);
    border-radius: 3px;
    color: var(--black);
    font-size: 1rem;
    padding: 5px;
    outline: none;
  }

  .form__button {
    background: var(--blue);
    border: none;
    border-radius: 3px;
    color: var(--white);
    cursor: pointer;
    font-size: 0.9rem;
    grid-column: span 2;
    letter-spacing: 1px;
    outline: none;
    padding: 10px;
  }

  .form__button:active {
    box-shadow: inset 1px 1px 2px var(--grey);
    outline: none;
    border: none;
  }
`;

export default FormStyles;
