import { connect } from 'react-redux';
import Cart from './Cart';
// import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    // fetchProducts: () => dispatch(fetchProducts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);