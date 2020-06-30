import React from 'react';
import axios from 'axios';
const products_data = require('../datasources/products');
class Products extends React.Component {
  productDisplay() {
    const products_display = products_data;
    // products_display.map((product) => {
    //   return (
    //     <div>
    //       <ui>
    //         <li index="{product.name">value= {product}</li>
    //       </ui>
    //     </div>
    //   );
    // });
    products_display.women_clothing.map((women_product) => {
      // console.log(women_product.imgUrl);
    });
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.productDisplay()} className="ui form">
          <div className="field">
            <label> Search Products:</label>
            <input type="text" />
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Products;
