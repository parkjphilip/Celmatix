import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AuthButtons from './auth_buttons';


const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    logout: user => dispatch(logout(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButtons);