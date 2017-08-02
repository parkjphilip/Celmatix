import React from 'react';
import { Link, withRouter } from 'react-router';

class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    let currentUser = this.props.currentUser;
    this.props.fetchCart(currentUser.cart.id, currentUser.id);
  }

  render() {
    debugger
    return (
      <div>
        Your cart is here
      </div>
    );
  }
}

export default withRouter(Cart);