import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//components
import Header from './Header';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import Categories from './Categories';
import Slideshow from './Slideshow';
import ShoppingCart from './ShoppingCart';
import './App.css';

class Dashboard extends React.Component {
  state = { lat: null, errorMessage: '', checkout: false };
  componentDidMount() {
    this.props.fetchUser();
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  checkoutStatus = (check) => {
    this.setState({ checkout: check });
  };
  render() {
    if (!this.state.checkout) {
      return (
        <div className="ui grid" style={{ marginTop: '10px' }}>
          <div className="row">
            <div className="sixteen wide column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <Slideshow />
            </div>
          </div>
          <div className="row">
            <div className=" three wide column">
              <SideBar />
            </div>
            <div className=" thirteen wide column">
              <div className="row">
                <SearchBar />
              </div>
              <div className="row">
                <Categories />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="ui grid" style={{ marginTop: '10px' }}>
        <div className="row">
          <div className="sixteen wide column">
            <ShoppingCart showIcon={false} />
          </div>
        </div>
      </div>
    );
  }
}

//once we will pass actions, they are assigned to app as props.then in app component we will call action creators.
export default connect(null, actions)(Dashboard);
