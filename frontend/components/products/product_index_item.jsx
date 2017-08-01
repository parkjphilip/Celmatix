import React from 'react';
import { Link, withRouter } from 'react-router';

class ProductIndexItem extends React.Component {
	constructor(props) {
		super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.renderAddToCartButton = this.renderAddToCartButton.bind(this);
	}

  handleAddToCart() {
    return () => {
      this.props.addToCart(this.props.product.id,
                           this.props.currentUser.cart.id,
                           this.props.currentUser.id);
    };
  }

  renderAddToCartButton(){
    if (this.props.currentUser) {
      return(
        <button onClick={this.handleAddToCart()} />
      );
    }
  }

  render() {
    let product = this.props.product;
    return (
      <div>
        <div>{product.name}</div>
        <div>{product.brand}</div>
        <div>{product.model}</div>
        <div>{product.price}</div>
        {this.renderAddToCartButton()}
      </div>
    );
  }
}

export default withRouter(ProductIndexItem);