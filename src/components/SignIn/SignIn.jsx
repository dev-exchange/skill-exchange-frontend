import React, { useEffect } from 'react';
import faker from 'faker';
import { withRouter } from 'react-router-dom';
import nprogress from 'nprogress';
import { FormStyles } from '../styles';
import { getState } from '../../StateProvider';
import '../../assets/nprogress.css';
import savingIcon from '../../assets/loaders/svg-loaders/tail-spin.svg';

function SignIn(props) {
  const { history } = props;
  const [{ loading }, dispatch] = getState();
  const handleSubmit = ev => {
    ev.preventDefault();
    nprogress.start();
    dispatch({
      type: 'setLoading',
      newLoading: { ...loading, loading: true }
    });
    setTimeout(() => {
      dispatch({
        type: 'loginUser',
        newUser: {
          name: faker.name.firstName(),
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
          {loading.loading ? <img className="loading__icon" alt="" src={savingIcon} /> : 'Sign In'}
        </button>
      </form>
    </FormStyles>
  );
}

export default withRouter(SignIn);
