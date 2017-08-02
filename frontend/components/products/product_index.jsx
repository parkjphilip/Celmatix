import React from 'react';
import { Link, withRouter } from 'react-router';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (Object.keys(this.props.products).length > 1) {
        return (
          <div>
            <ul>
              {this.props.products.map(product =>
                <ProductIndexItem
                  key={product.sku}
                  product={product}
                  currentUser={this.props.currentUser}
                  addToCart={this.props.addToCart}
                />)}
            </ul>
          </div>
        );
    } else {
      return <div />;
    }
  }
}

export default withRouter(ProductIndex);