import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    let currentUser = this.props.currentUser;
    //if the user that logs in is an admin, render these nav links
    if (currentUser && currentUser.is_admin === true) {
      return (
        <div id="nav">
          <h2 className="welcome-message">Hi, {currentUser.email}!</h2>
          <Link to="/" className="nav-link">Products</Link>
          <Link to={`/carts/${this.props.currentUser.cart.id}`} className="nav-link">Cart</Link>
          <Link to="/upload" className="nav-link">Upload Products</Link>
          <Link to="/addproduct" className="nav-link">Add Product</Link>
          <Link to="/users" className="nav-link">Customers</Link>
          <button className="logout-button hover" onClick={this.props.logout}>Log Out</button>
        </div>
      );
      //for the case is the user that logs in is not an admin
    } else if (currentUser && currentUser.is_admin === false){
      return (
        <div id="nav">
          <h2 className="welcome-message">Hi, {currentUser.email}!</h2>
          <Link to="/" className="nav-link">Products</Link>
          <Link to={`/carts/${this.props.currentUser.cart.id}`} className="nav-link">Cart</Link>
          <button onClick={this.props.logout}>
            Log Out
          </button>
        </div>
      );
    } else {
      //for the case when there is no logged in user
      return (
        <div id="nav">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="nav-header">
        <div className="nav-container">
        {this.renderNavTabs()}
        </div>
      </div>
    );
  }
}

export default NavBar;