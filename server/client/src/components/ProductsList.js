import React from 'react';
const products_data = require('../datasources/products');

class ProductList extends React.Component {
  //state = { product: [] };
  renderWomenProdcuts = (event) => {
    const women_products_data = products_data.women_clothing;
    // this.setState({ product: men_products_data });
    //console.log(this.state.product);
    this.props.onClick(women_products_data);
  };
  render() {
    return (
      <div className="ui tertiary  segment">
        <div className="ui grid container">
          <div className="row">
            <div className="four wide column">
              <i className="female icon"></i>
              <a onClick={this.renderWomenProdcuts}>Women Clothing</a>
            </div>
            <div className="four wide column">
              <i className="utensils icon"></i>
              Dishes
            </div>
            <div className="four wide column">
              <i className="book icon"></i>
              Novels/Books
            </div>
            <div className="four wide column">
              <i className="gift icon"></i>
              Gifts{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
