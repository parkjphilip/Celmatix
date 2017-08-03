import React from 'react';
import Modal from 'react-modal';

import { Link, withRouter } from 'react-router';

class ProductIndexItem extends React.Component {
	constructor(props) {
		super(props);
    this.state = { modalIsOpen: false };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.renderAddToCartButton = this.renderAddToCartButton.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	}

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  handleAddToCart() {
    return () => {
      this.props.addToCart(this.props.product.id,
                           this.props.currentUser.cart.id);
    };
  }

  renderAddToCartButton(){
    if (this.props.currentUser) {
      return(
        <button onClick={this.handleAddToCart()} className="add-to-cart-button hover">
          Add To Cart
        </button>
      );
    }
  }

  render() {
    let product = this.props.product;
    return (
      <div className="product-index-item hover" onClick={this.openModal}>
        <div>Name: {product.name}</div>
        <div>Brand: {product.brand}</div>
        <div>Model: {product.model}</div>
        <div>Price: {product.price}</div>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        overlayClassName="Modal-Overlay"
        className="Modal"
        contentLabel="Product"
        >
          <div className="modal-contents">
            <div className="modal-content-item">Name: {product.name}</div>
            <div className="modal-content-item">Brand: {product.brand}</div>
            <div className="modal-content-item">Model: {product.model}</div>
            <div className="modal-content-item">Price: {product.price}</div>
            <div className="modal-content-item">Sku: {product.sku}</div>
            <div className="modal-content-item">Description: {product.desc}</div>
            {this.renderAddToCartButton()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ProductIndexItem);