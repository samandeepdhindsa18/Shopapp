import React from 'react';
import './Header.css';
import { addProduct, createOrder } from '../actions';
import { connect } from 'react-redux';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  render() {
    const show = this.props.products;

    console.log(show);

    if (this.props.showIcon) {
      return (
        <div className="content">
          <i className="shopping bag big icon own-color">
            <sup className="own-color" onLoadStart={this.props.addProduct}>
              {this.props.number}
            </sup>
          </i>
          &nbsp; &nbsp;
          <text className="text"></text>
        </div>
      );
    }
    return (
      <div className="content">
        <div className="ui internally celled grid">
          <div className="row">
            <div className="sixteen wide column first">
              <div className="ui segment cart">
                <div className="ui four steps">
                  <div className="active step">
                    <i className="shopping bag icon"></i>
                    <div className="content">
                      <div className="title">
                        <text>My Bag</text>
                      </div>
                      <div className="description">
                        <desc>Place Order</desc>
                      </div>
                    </div>
                  </div>
                  <div className=" disabled step">
                    <i className="truck icon"></i>
                    <div className="content">
                      <div className="title">Shipping</div>
                      <div className="description">
                        Choose your shipping options
                      </div>
                    </div>
                  </div>
                  <div className=" disabled step">
                    <i className="payment icon"></i>
                    <div className="content">
                      <div className="title">Billing</div>
                      <div className="description">
                        Enter billing information
                      </div>
                    </div>
                  </div>
                  <div className="disabled step">
                    <i className="info icon"></i>
                    <div className="content">
                      <div className="title">Confirm Order</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui page internally celled grid">
          <div className="twelve wide column">
            {this.props.products.map((product) => (
              <div className="content">
                <div className="row">
                  <div class="ui relaxed horizontal list">
                    <div className="item">
                      <img
                        className="ui top aligned tiny image"
                        src={product.imgUrl}
                      />
                      <span> W brand</span>{' '}
                    </div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item">
                      <div className="ui tag labels">
                        <a className="ui label">CAD &nbsp;{product.price}</a>
                      </div>
                    </div>{' '}
                    <div className="item">
                      <i className="heart outline icon"></i>
                    </div>
                    <div className="item"></div>
                    <div className="item">
                      <div className="ui button steps">
                        <desc>Remove</desc>
                      </div>
                    </div>
                  </div>
                  <br />
                  {product.name}
                </div>
                <div className="ui divider"></div>
              </div>
            ))}{' '}
          </div>

          <div className="four wide column">
            {' '}
            <div className="row">
              <div class="ui right labeled left icon input">
                <i class="tags icon"></i>
                <input type="text" placeholder="APPLY COUPONS" />
                <a className="ui mini tag label"> COUPONS</a>
              </div>
            </div>{' '}
            <div className="ui right divider"></div>
            <div className="row">
              <font>PRICE DETAILS</font>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapsToStateProps = (state) => {
  console.log(state);

  return {
    number: state.products.cartProducts.length,
    products: state.products.cartProducts,
  };
};

export default connect(mapsToStateProps, { addProduct })(ShoppingCart);
