import React from 'react';
import { Link, withRouter } from 'react-router';
// import ParkIndexItem from './park_index_item';

class ProductIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {

    return (
      <div>
        This is the product index
      </div>
    );
  }
}

export default withRouter(ProductIndex);