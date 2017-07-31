import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    if (window.location.hash === "#/") {
      return (
        <div id="products-selected">
          <div>Products</div>
          <Link to="/cart">Cart</Link>
      </div>
      );
    } else {
      return (
        <div id="cart-selected">
          <Link to="/">Products</Link>
          <div>Cart</div>
        </div>
      );
    }
  }

  render() {
    return(
      <div id="nav-bar">
        {this.renderNavTabs()}
      </div>
    );
  }
}

export default NavBar;