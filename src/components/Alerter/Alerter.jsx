import React from 'react';
import styled from 'styled-components';
import { getState } from '../../StateProvider';

const AlerterStyles = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${props => (props.alert ? 1 : 0)};
  pointer-events: ${props => (props.alert ? 'all' : 'none')};
  position: fixed;
  top: 0;
  transition: opacity 250ms ease-in-out;
  width: 100vw;
  z-index: 2000;

  .alert__wrapper {
    align-items: center;
    background: var(--white);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .alert__message {
    margin-bottom: 20px;
    text-align: center;
  }

  .alert__control {
    background: var(--blue);
    border: none;
    border-radius: 3px;
    color: var(--white);
    cursor: pointer;
    outline: none;
    padding: 10px;
    width: 100%;
  }
`;

export default function Alerter() {
  const [{ alert }, dispatch] = getState();
  return (
    <AlerterStyles alert={alert.show}>
      {alert.show ? (
        <div className="alert__wrapper">
          <span className="alert__message">{alert.message}</span>
          <button
            type="button"
            className="alert__control"
            onClick={() => dispatch({ type: 'clearAlert' })}
          >
            Okay
          </button>
        </div>
      ) : null}
    </AlerterStyles>
  );
}
