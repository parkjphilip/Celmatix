import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import UsersIndex from './users_index';


const mapStateToProps = ( state ) => {
  return ({
    users: state.users
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchUsers: () => dispatch(fetchUsers())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex);