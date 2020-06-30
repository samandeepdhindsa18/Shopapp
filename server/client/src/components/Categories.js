import React from 'react';
import ProductList from './ProductsList';
import DisplayProducts from './DisplayProducts';

class Categories extends React.Component {
  state = { products: [], product_selected: false };

  displayData = (data) => {
    this.setState({ products: data, product_selected: true });

    console.log(this.state.product_selected);
  };

  render() {
    if (!this.state.product_selected) {
      return (
        <div className="ui container">
          <ProductList onClick={this.displayData} />
          found {this.state.products.length}
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <DisplayProducts products={this.state.products} />
        </div>
      );
    }
  }
}
export default Categories;
