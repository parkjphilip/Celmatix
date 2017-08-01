import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';
import { addToCart } from '../../actions/cart_actions';

const mapStateToProps = ( state ) => {
  return ({
    products: state.products,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart:
      (product, cartId, userId) => dispatch(addToCart(product, cartId, userId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);