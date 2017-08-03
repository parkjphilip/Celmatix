import React from 'react';
import { Link, withRouter } from 'react-router';

class AddProductForm extends React.Component {
  //set the original state of the component to an empty string for all fields
	constructor(props) {
		super(props);
		this.state = {
                  name: "",
                  brand: "",
                  model: "",
                  sku: "",
                  price: "",
                  desc: ""
                 };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  //every time a field is changed, this update function is called to update
  //the current state of the component to match the fields
	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  //when the fields are submitted, the fields are used to submit the product
  // the resetErrors function is commented out here because I was unable to make
  //it function correctly. the code is mostly written out, just was unable to finish it
	handleSubmit(e) {
		e.preventDefault();
    let integerPrice = Number(this.state.price);
    this.setState({ price: integerPrice });
		const product = this.state;
		this.props.addProduct(product);
    this.props.history.push("/#");
    // this.props.resetProductErrors
	}

  //this function is written and fully function but
  // not used because I was unable to clear the errors
	renderProductErrors() {
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
      <div className="add-product-container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="add-product-text">Please fill out the form to add a product</h1>
            <div >
              <input className="add-product-input" type="text" value={this.state.name} onChange={this.update("name")} placeholder="Product Name"/>
              <input className="add-product-input" type="text" value={this.state.brand} onChange={this.update("brand")} placeholder="Brand"/>
              <input className="add-product-input" type="text" value={this.state.model} onChange={this.update("model")} placeholder="Model"/>
              <input className="add-product-input" type="text" value={this.state.sku} onChange={this.update("sku")} placeholder="Sku"/>
              <input className="add-product-input" type="number" value={this.state.price} onChange={this.update("price")} placeholder="Price"/>
              <input className="add-product-input-desc" type="text" value={this.state.desc} onChange={this.update("desc")} placeholder="Description"/>
              <input className="add-product-submit hover" type="submit" value='Submit'/>
            </div>
          </form>
      </div>
		);
	}
}

// {this.renderProductErrors()}
export default withRouter(AddProductForm);

