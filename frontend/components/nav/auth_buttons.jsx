import React from 'react';
import { Link } from 'react-router-dom';

class AuthButtons extends React.Component {
  constructor(props) {
		super(props);
	}

  renderAuthButtons() {
    let location = window.location.hash;
    let authLink = (location === "#/signup") ? 'login' : 'signup';
    if (this.props.loggedIn) {
      return (
        <div>
          <h2>Hi, {this.props.currentUser.email}!</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else if (location !== "#/signup" && location !== "#/login") {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      );
    } else if (location === `#/login` || location === "#/signup") {
      return (
        <div>
          <div> Or <Link to={`/${authLink}`}>{authLink}</Link> instead </div>
        </div>
      );
    }
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