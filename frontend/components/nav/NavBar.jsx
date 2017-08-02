import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    let currentUser = this.props.currentUser;
    let cart = this.props.currentUser.cart;
    if (this.props.currentUser && currentUser.is_admin === true) {
      return (
        <div>
          <Link to="/">Products</Link>
          <Link to={`/carts/${cart.id}`}>Cart</Link>
          <Link to="/upload">Upload Products</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">Products</Link>
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