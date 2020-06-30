import React from 'react';
import './SideBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui secondary segment ">
        <form className="ui form search-segment">
          <div className="field">
            <label> Search Products:</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
