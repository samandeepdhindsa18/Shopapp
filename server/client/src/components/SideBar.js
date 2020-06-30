import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
  render() {
    return (
      <div className="ui grey inverted vertical menu ">
        <div className="item">
          <div className="header">
            <h4>Manage Products</h4>
          </div>
          <div className="menu">
            <a className="item">
              <h5>Search</h5>
            </a>
            <a className="item">
              <h5>My Products</h5>
            </a>
          </div>
          <div className="header">
            <h4> Manage Orders</h4>
          </div>
          <div className="menu">
            <a className="item">
              <h5>Search</h5>
            </a>
            <a className="item">
              <h5>Orders</h5>
            </a>
          </div>
          <div className="header">
            <h4>Our Policy</h4>
          </div>
          <div className="header">
            <h4>About us</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
