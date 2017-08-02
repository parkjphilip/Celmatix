import { connect } from 'react-redux';
import { addProduct } from '../../actions/product_actions';
import AddProductForm from './add_product_form';


const mapStateToProps = ( state ) => {
  return ({
    // loggedIn: Boolean(state.session.currentUser),
    // errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    addProduct: product => dispatch(addProduct(product)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);