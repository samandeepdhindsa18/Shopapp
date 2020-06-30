import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import AuthUser from './AuthUser';
import ShoppingCart from './ShoppingCart';
import CountdownTimer from '../services/Timer';

class Header extends React.Component {
  //helper method
  renderContent() {
    console.log(this.props.auth);

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <span>
            <a href="/auth/google" className="text">
              Login/Signup
            </a>
          </span>
        );
      default:
        return [
          <span>
            <a href="/api/logout" className="text">
              Logout
            </a>
          </span>,
        ];
    }
  }
  render() {
    return (
      <div className="ui inverted menu">
        <div className="left menu bar">
          <a className="active item">
            <h3>Home</h3>
          </a>
          <a className="center item">
            <h3 className="trans">$5 OFF On Orders Of $59+</h3>
          </a>
        </div>
        <div className="center menu">
          <a className="item">
            <CountdownTimer />
          </a>
        </div>
        <div className="right menu bar">
          <a className="item">
            <h3>Code: SUNSHINE20</h3>
          </a>
          <a className="item" href="/ShoppingCart">
            <ShoppingCart showIcon={true} />
          </a>
          <a className="item">
            <i className="icon large user user-color"></i>
            <br />
            {this.renderContent()}
          </a>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth: auth };
}
export default connect(mapStateToProps)(Header);
