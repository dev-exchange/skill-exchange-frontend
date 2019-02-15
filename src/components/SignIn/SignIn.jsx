import React, { useEffect } from 'react';
import faker from 'faker';
import { withRouter } from 'react-router-dom';
import { FormStyles } from '../styles';
import { getState } from '../../StateProvider';

function SignIn(props) {
  const { history } = props;
  const [{ user }, dispatch] = getState();
  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch({
      type: 'loginUser',
      newUser: {
        name: faker.name.firstName(),
        avatar: 'https://source.unsplash.com/200x200/?portrait',
        authed: true
      }
    });
    history.push('/');
  };
  return (
    <FormStyles>
      <form className="form" onSubmit={handleSubmit}>
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

export default withRouter(SignIn);
