import { connect } from 'react-redux';
import { login, logout, signup, resetErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';


const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  let processForm;
  if (formType === 'login') {
    processForm = login;
  } else {
    processForm = signup;
  }
  return ({
    processForm: user => dispatch(processForm(user)),
    resetErrors: () => dispatch(resetErrors()),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);