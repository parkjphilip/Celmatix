import React from 'react';
import { Link, withRouter } from 'react-router';
// import ParkIndexItem from './park_index_item';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {

    return (
      <div>
        This is the the upload form
      </div>
    );
  }
}

export default withRouter(UploadForm);