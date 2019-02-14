import React from 'react';
import { FormStyles } from '../styles';

export default function SignUp() {
  return (
    <FormStyles>
      <form className="form">
        <div className="form__header">
          <h3 className="form__heading">Sign Up</h3>
        </div>
        <label className="form__label" htmlFor="firstName">
          First Name
          <input className="form__input" type="text" name="firstName" />
        </label>
        <label className="form__label" htmlFor="lastName">
          Last Name
          <input className="form__input" type="text" name="lastName" />
        </label>
        <label className="form__label form__label--wide" htmlFor="email">
          EMail Address
          <input className="form__input" type="email" name="email" />
        </label>
        <label className="form__label" htmlFor="password">
          Password
          <input className="form__input" type="password" name="password" />
        </label>
        <label className="form__label" htmlFor="passConfirm">
          Confirm
          <input className="form__input" type="password" name="passConfirm" />
        </label>
        <button className="form__button" type="submit">
          Sign Up
        </button>
      </form>
    </FormStyles>
  );
}
