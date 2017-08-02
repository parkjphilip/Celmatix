import React from 'react';
import { Link, withRouter } from 'react-router';
// import ParkIndexItem from './park_index_item';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  updateFile(e) {
    var file = e.currentTarget.files[0];
    this.setState({ file: file });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProducts(this.state.file);
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
        {this.renderErrors()}
        <input type="file" onChange={this.updateFile}/>
        <button onClick={this.handleSubmit}>Submit File</button>
      </div>
    );
  }
}

export default withRouter(UploadForm);