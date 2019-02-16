import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import nprogress from 'nprogress';
import { getState } from '../../StateProvider';
import { FormStyles } from '../styles';

import '../../assets/nprogress.css';
import savingIcon from '../../assets/loaders/svg-loaders/oval.svg';

function SignUp(props) {
  const { history } = props;
  const [{ loading }, dispatch] = getState();
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passConfirm: ''
  });
  const handleSubmit = ev => {
    ev.preventDefault();
    nprogress.start();
    dispatch({
      type: 'setLoading',
      newLoading: { ...loading, loading: true }
    });

    setTimeout(() => {
      dispatch({
        type: 'registerUser',
        newUser: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          avatar: 'https://source.unsplash.com/200x200/?portrait',
          authed: true
        }
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
          <h3 className="form__heading">Sign Up</h3>
        </div>
        <label className="form__label" htmlFor="firstName">
          First Name
          <input
            className="form__input"
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="form__label" htmlFor="lastName">
          Last Name
          <input
            className="form__input"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </label>
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
        <label className="form__label" htmlFor="password">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label className="form__label" htmlFor="passConfirm">
          Confirm
          <input
            className="form__input"
            type="password"
            name="passConfirm"
            value={form.passConfirm}
            onChange={handleChange}
          />
        </label>
        <button className="form__button" type="submit">
          {loading.loading ? <img className="loading__icon" alt="" src={savingIcon} /> : 'Sign Up'}
        </button>
      </form>
    </FormStyles>
  );
}

export default withRouter(SignUp);
