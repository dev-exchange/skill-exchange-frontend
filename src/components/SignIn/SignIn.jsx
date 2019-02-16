import React, { useState } from 'react';
import faker from 'faker';
import { withRouter } from 'react-router-dom';
import nprogress from 'nprogress';
import { FormStyles } from '../styles';
import { getState } from '../../StateProvider';

import savingIcon from '../../assets/loaders/svg-loaders/tail-spin.svg';

function SignIn(props) {
  const { history } = props;
  const [{ loading, users }, dispatch] = getState();
  const [form, setValues] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = ev => {
    ev.preventDefault();
    const matchedUser = users.filter(user => user.email === form.email)[0];
    if (matchedUser === undefined) {
      dispatch({ type: 'setAlert', message: 'No account found with that email address' });
      return;
    }
    if (matchedUser.password !== form.password) {
      dispatch({ type: 'setAlert', message: 'Password or email address incorrect' });
      return;
    }
    nprogress.start();
    dispatch({
      type: 'setLoading',
      newLoading: { ...loading, loading: true }
    });
    setTimeout(() => {
      dispatch({
        type: 'loginUser',
        newUser: matchedUser
      });
      dispatch({
        type: 'setLoading',
        newLoading: { ...loading, loading: false }
      });
      history.push('/');
      nprogress.done();
    }, 2000);
  };
  const handleChange = ev => {
    setValues({
      ...form,
      [ev.target.name]: ev.target.value
    });
  };
  return (
    <FormStyles>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__header">
          <h3 className="form__heading">Sign In</h3>
        </div>
        <label className="form__label form__label--wide" htmlFor="email">
          EMail Address
          <input
            className="form__input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="form__label form__label--wide" htmlFor="password">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button className="form__button" type="submit">
          {loading.loading ? <img className="loading__icon" alt="" src={savingIcon} /> : 'Sign In'}
        </button>
      </form>
    </FormStyles>
  );
}

export default withRouter(SignIn);
