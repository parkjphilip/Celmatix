import React from 'react';
import { Link, withRouter } from 'react-router';

class ProductIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div>
        <div>{this.props.product.name}</div>
        <div>{this.props.product.brand}</div>
        <div>{this.props.product.model}</div>
        <div>{this.props.product.price}</div>
      </div>
    );
  }
}

export default withRouter(ProductIndexItem);