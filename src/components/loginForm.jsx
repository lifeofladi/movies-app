/** @format */
import React, { Component } from 'react';
import Input from './input';
import '../styles/LoginForm.css';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  //Destructured event object to access the currentTarget as input
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label='Username'
            name='username'
            type='text'
            value={account.name}
            onChange={this.handleChange}
          />
          <Input
            label='Password'
            name='password'
            type='password'
            value={account.password}
            onChange={this.handleChange}
          />
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
