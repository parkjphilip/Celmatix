import React from 'react';
import { Link, withRouter } from 'react-router';
// import ParkIndexItem from './park_index_item';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
	}

  updateFile(e) {
    var file = e.currentTarget.files[0];
    this.setState({ file: file });
    // var fileReader = new FileReader();
    // fileReader.onloadend = function () {
    //   this.setState({ file: file });
    // }.bind(this);
    // if (file) {
    //   fileReader.readAsDataURL(file);
    // }
    // debugger
  }

  handleSubmit(e) {

  }
  
  render() {

    return (
      <div>
        <input type="file" onChange={this.updateFile}/>
      </div>
    );
  }
}

export default withRouter(UploadForm);