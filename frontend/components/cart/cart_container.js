import { connect } from 'react-redux';
import Cart from './Cart';
import { fetchCartItems } from '../../actions/cart_actions';

const mapStateToProps = ( state ) => {
  debugger
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    cartItems: state.cartItems
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);