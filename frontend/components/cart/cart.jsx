import React from 'react';
import { Link, withRouter } from 'react-router';
import CartIndexItem from './cart_index_item';

class Cart extends React.Component {
	constructor(props) {
		super(props);
    this.renderBuyButton = this.renderBuyButton.bind(this);
    this.handleBuyItems = this.handleBuyItems.bind(this);
	}

  componentDidMount() {
    this.props.fetchCartItems(this.props.currentUser.cart.id);
  }

  handleBuyItems() {
    let currentUser = this.props.currentUser;
    let cartItems = this.props.cartItems;
    return () => {
      this.props.buyItems(currentUser.id, cartItems);
    };
  }

  renderBuyButton(){
    return(
      <div>
        <button className="cart-buy-button hover" onClick={this.handleBuyItems()} >
          Buy Items
        </button>
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.cartItems).length === 0 ) {
      return (
        <div />
      );
    } else {
        return (
          <div className="cart-index-container">
            <div id="cart-title">
              Your Cart Items
            </div>
            <ul className="cart-index">
              {this.props.cartItems.map(cartItem =>
                <CartIndexItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  cart={this.props.currentUser.cart}
                  deleteCartItem={this.props.deleteCartItem}
                />)}
            </ul>
            {this.renderBuyButton()}
          </div>
        );
    }
  }
}

export default withRouter(Cart);