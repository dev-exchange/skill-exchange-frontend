import { withRouter } from 'react-router-dom';
import { getState } from '../../StateProvider';

function SignOut(props) {
  const { history } = props;
  const [{ user }, dispatch] = getState();
  if (user.authed) {
    dispatch({
      type: 'logoutUser',
      newUser: {
        authed: false
      }
    });
    history.push('/');
    return null;
  }
  history.push('/');
  return null;
}

export default withRouter(SignOut);
