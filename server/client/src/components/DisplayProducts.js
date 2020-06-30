import React from 'react';
import './ImageList.css';
import { addProduct } from '../actions';
import { connect } from 'react-redux';
class DisplayProducts extends React.Component {
  renderContent() {
    return this.props.products.map((product) => {
      return (
        <div className="card">
          <div className="blurring dimmable image">
            <div className="image-list">
              <img key={product.name} alt={product.name} src={product.imgUrl} />
            </div>
          </div>
          <div className="content">
            <a className="middle">
              <div className="ui basic attached button">
                <i
                  className="icon add"
                  onClick={() => this.props.addProduct(product)}
                >
                  {' '}
                  Add to Cart
                </i>
              </div>
            </a>
            <div className="meta">
              <span className="name">{}</span>
            </div>
            <div className="content">
              <div className="left-content">
                <b>{product.price} CAD</b>
                <i className="right floated heart outline icon"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui secondary segment">
        <div className="ui grid container">
          <div className="row">
            <div className="ui four  cards">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return { product: state.product };
};

export default connect(mapStateToProps, { addProduct })(DisplayProducts);
