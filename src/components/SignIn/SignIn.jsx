import React from 'react';
import { FormStyles } from '../styles';

export default function SignIn() {
  return (
    <FormStyles>
      <form className="form">
        <div className="form__header">
          <h3 className="form__heading">Sign In</h3>
        </div>
        <label className="form__label form__label--wide" htmlFor="email">
          EMail Address
          <input className="form__input" type="email" name="email" />
        </label>
        <label className="form__label form__label--wide" htmlFor="password">
          Password
          <input className="form__input" type="password" name="password" />
        </label>
        <button className="form__button" type="submit">
          Sign In
        </button>
      </form>
    </FormStyles>
  );
}
