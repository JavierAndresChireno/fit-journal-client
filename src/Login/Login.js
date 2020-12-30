import React, { Component } from 'react';
import UserService from '../Services/UserService';
import TokenService from '../Services/TokenService';
import { withRouter } from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  changeField = (target) => {
    const { id, value } = target;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    UserService.logIn(user)
      .then((res) => {
        TokenService.storeToken(res.authToken);
        this.setState({
          email: '',
          password: '',
          error: null
        });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <section className='sign-up-container'>
        <h2>Log in</h2>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className='alert'>{error && <p>{error}</p>}</div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={email}
            onChange={(e) => {
              this.changeField(e.target);
            }}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => {
              this.changeField(e.target);
            }}
            required
          />
          <button>Sign in</button>
        </form>
      </section>
    );
  }
}
export default withRouter(Login);
