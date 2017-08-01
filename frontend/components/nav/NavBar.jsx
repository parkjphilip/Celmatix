import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
	}

  renderNavTabs() {
    if (this.props.currentUser && this.props.currentUser.is_admin === true) {
      return (
        <div>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/upload">Upload Products</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
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