import { connect } from 'react-redux';
import Cart from './Cart';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_actions';
import { buyItems } from '../../actions/order_actions';

const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    cartItems: state.cartItems
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchCartItems: (cartId) => dispatch(fetchCartItems(cartId)),
    deleteCartItem: (cartId, cartItemId) =>
                          dispatch(deleteCartItem(cartId, cartItemId)),
    buyItems: (userId, orderItems) => dispatch(buyItems(userId, orderItems))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);