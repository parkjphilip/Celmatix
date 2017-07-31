import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    return (
      <div id="products-selected">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/upload">Upload Products></Link>
      </div>
    );
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