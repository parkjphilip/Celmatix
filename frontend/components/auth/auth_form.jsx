import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.history.push("/#");
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
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user)
							.then(() => this.props.history.push("/#"));
	}

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
      <div id="auth-container">
        <form onSubmit={this.handleSubmit}>
          <h1 id="auth-message">Please {this.props.formType}!</h1>
          <div id="auth-input-fields">
            <input className="auth-input" type="text" value={this.state.email} onChange={this.update("email")} placeholder="Username (email)"/>
            <input className="auth-input" type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
            <input className="auth-submit" type="submit" value='Submit'/>
          </div>
          {this.renderErrors()}
        </form>
      </div>
		);
	}
}

export default withRouter(AuthForm);




