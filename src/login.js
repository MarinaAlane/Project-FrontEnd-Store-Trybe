// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="email"
          />
          <input
            type="password"
            placeholder="senha"
          />
        </div>
        <Link
          to="/clients">
          Entre
        </Link>
      </div>
    );
  }
}

export default Login