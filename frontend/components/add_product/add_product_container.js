import { connect } from 'react-redux';
import { addProduct, resetProductErrors } from '../../actions/product_actions';
import AddProductForm from './add_product_form';

const mapStateToProps = ( state ) => {
  return ({
    errors: state.products.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    resetProductErrors: () => dispatch(resetProductErrors()),
    addProduct: product => dispatch(addProduct(product)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);