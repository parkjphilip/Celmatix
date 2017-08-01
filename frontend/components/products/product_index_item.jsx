import React from 'react';
import { Link, withRouter } from 'react-router';

class ProductIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    let product = this.props.product;
    let currentUser = this.props.currentUser;
    let cart = this.props.currentUser.cart;
    if (!this.props.currentUser) {
      return (
        <div>
          <div>{product.name}</div>
          <div>{product.brand}</div>
          <div>{product.model}</div>
          <div>{product.price}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{product.name}</div>
          <div>{product.brand}</div>
          <div>{product.model}</div>
          <div>{product.price}</div>
          <button onClick={this.props.addToCart(product, cart.id)} />
        </div>
      );
    }
  }
}

export default withRouter(ProductIndexItem);