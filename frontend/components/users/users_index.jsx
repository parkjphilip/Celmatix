import React from 'react';
import { Link, withRouter } from 'react-router';
import UserIndexItem from './user_index_item';

class UsersIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (Object.keys(this.props.users).length === 0 ) {
      return (
        <div> </div>
      );
    } else {
        return (
          <div>
            <div className="users-index-message">
              Current Customer Listing
            </div>
            <ul className="users-index">
              {this.props.users.map(user =>
                <UserIndexItem
                  key={user.id}
                  user={user}
                />)}
            </ul>
          </div>
        );
    }
  }
}

export default withRouter(UsersIndex);