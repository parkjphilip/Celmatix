import React from 'react';
import { Link } from 'react-router-dom';

class AuthButtons extends React.Component {
  constructor(props) {
		super(props);
	}

  renderAuthButtons() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      );
  }

  render() {
    return(
      <div id="nav-bar">
        {this.renderAuthButtons()}
      </div>
    );
  }
}

export default AuthButtons;