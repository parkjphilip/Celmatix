import React from 'react';
import { Link, withRouter } from 'react-router';

class ProductIndexItem extends React.Component {
	constructor(props) {
		super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
	}

  handleAddToCart() {
    return () => {
      this.props.addToCart(this.props.product,
                           this.props.currentUser.cart.id,
                           this.props.currentUser.id);
    };
  }

  render() {
    let product = this.props.product;
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
          <button onClick={this.handleAddToCart()} />
        </div>
      );
    }
  }
}

export default withRouter(ProductIndexItem);