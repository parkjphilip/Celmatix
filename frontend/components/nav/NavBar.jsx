import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    let currentUser = this.props.currentUser;
    if (this.props.currentUser && currentUser.is_admin === true) {
      return (
        <div>
          <Link to="/">Products</Link>
          <Link to={`/carts/${this.props.currentUser.cart.id}`}>Cart</Link>
          <Link to="/upload">Upload Products</Link>
          <Link to="/users">Customers</Link>
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