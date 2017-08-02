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
    let orderItems = this.props.cartItems;
    return () => {
      this.props.buyItems(currentUser.id, orderItems);
    };
  }

  renderBuyButton(){
    return(
      <button onClick={this.handleBuyItems()} />
    );
  }

  render() {
    if (Object.keys(this.props.cartItems).length === 0 ) {
      return (
        <div> No cart items yet </div>
      );
    } else {
        return (
          <div>
            <ul>
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