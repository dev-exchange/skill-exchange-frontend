import { withRouter } from 'react-router-dom';
import { getState } from '../../StateProvider';

function SignOut(props) {
  const { history } = props;
  const [{ authed }, dispatch] = getState();
  if (authed) {
    dispatch({
      type: 'logoutUser'
    });
    history.push('/');
    return null;
  }
  history.push('/');
  return null;
}

export default withRouter(SignOut);
