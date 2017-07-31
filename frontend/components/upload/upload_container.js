import { connect } from 'react-redux';
import { createProducts } from '../../actions/product_actions';
import UploadForm from './upload_form';


const mapStateToProps = ( state ) => {
  return ({

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    createProducts: file => dispatch(createProducts(file))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);