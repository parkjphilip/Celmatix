import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    let currentUser = this.props.currentUser;
    if (currentUser && currentUser.is_admin === true) {
      return (
        <div>
          <h2>Hi, {currentUser.email}!</h2>
          <Link to="/">Products</Link>
          <Link to={`/carts/${this.props.currentUser.cart.id}`}>Cart</Link>
          <Link to="/upload">Upload Products</Link>
          <Link to="/addproduct">Add Product</Link>
          <Link to="/users">Customers</Link>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else if (currentUser && currentUser.is_admin === true){
      return (
        <div>
          <h2>Hi, {currentUser.email}!</h2>
          <Link to="/">Products</Link>
          <Link to={`/carts/${this.props.currentUser.cart.id}`}>Cart</Link>
          <button onClick={this.props.logout.then(() => this.props.history.push("/#"))}>
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
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