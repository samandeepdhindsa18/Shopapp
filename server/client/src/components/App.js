import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import './App.css';
import Dashboard from './Dashboard';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/ShoppingCart"
            component={() => <ShoppingCart showIcon={false} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
