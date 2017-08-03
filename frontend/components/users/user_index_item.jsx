import React from 'react';
import { Link, withRouter } from 'react-router';

class UserIndexItem extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    let user = this.props.user;
    return (
      <div>
        <div className="user-index-email">{user.email}</div>
      </div>
    );
  }
}

export default withRouter(UserIndexItem);