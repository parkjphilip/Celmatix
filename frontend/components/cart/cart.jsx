import React from 'react';
import { Link, withRouter } from 'react-router';

class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    // this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        Your cart is here
      </div>
    );
  }
}

export default withRouter(Cart);