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
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <h1>Please {this.props.formType}</h1>
          <div >
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




