import { connect } from 'react-redux';
import Cart from './Cart';
import { fetchCart } from '../../actions/cart_actions';

const mapStateToProps = ( state ) => {
  debugger
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    cart: state.cart
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchCart: (cartId) => dispatch(fetchCart(cartId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);