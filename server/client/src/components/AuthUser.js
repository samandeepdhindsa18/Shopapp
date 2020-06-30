import React from 'react';
import './Header.css';

class AuthUser extends React.Component {
  render() {
    return (
      <div className="content">
        &nbsp; &nbsp; &nbsp; &nbsp;
        <i className="icon large user user-color"></i>
        <br />
        <a href="/auth/google" className="text">
          Login/Signup
        </a>
      </div>
    );
  }
}

export default AuthUser;
