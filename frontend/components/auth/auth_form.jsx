import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	componentWillReceiveProps(newProps){
		if (newProps.formType !== this.props.formType){
			this.props.resetErrors();
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
    debugger
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user)
							.then(() => this.props.history.push("/#"));
              // .then(() => history.go(0));
	}

	// navLink() {
	// 	if (this.props.formType === "login") {
	// 		return <Link to="/signup">sign up</Link>;
	// 	} else {
	// 		return <Link to="/login">log in</Link>;
	// 	}
	// }

	renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
          {error}
          </li>
        ))}
        </ul>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
	}

	render() {
		return (
      <div>
          <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
            <h1>Please {this.props.formType}</h1>
            <div className="login-signup-form">
              <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Username (email)"/>
              <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
              <input type="submit" value={this.props.formType}/>
            </div>
          </form>
      </div>
		);
	}
}

export default withRouter(AuthForm);