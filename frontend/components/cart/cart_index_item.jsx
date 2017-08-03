import React from 'react';
import { Link, withRouter } from 'react-router';

class CartIndexItem extends React.Component {
	constructor(props) {
		super(props);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
	}

  handleDeleteProduct() {
    return () => {
      this.props.deleteCartItem(this.props.cart.id, this.props.cartItem.id);
    };
  }

  renderDeleteButton() {
    return(
      <button className="delete-cart-item-button hover" onClick={this.handleDeleteProduct()} >
        Delete Item
      </button>
    );
  }

  render() {
    let item = this.props.cartItem;
    return (
      <div className="cart-index-item">
        <div>{item.product.name}</div>
        <div>{item.product.brand}</div>
        <div>{item.product.model}</div>
        <div>{item.product.price}</div>
        {this.renderDeleteButton()}
      </div>
    );
  }
}

export default withRouter(CartIndexItem);