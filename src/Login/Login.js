import React, { Component } from 'react';
import UserService from '../Services/UserService';
import TokenService from '../Services/TokenService';
import { withRouter, Link } from 'react-router-dom';
import './Login.css';
class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null
  };
  componentDidMount = () => {
    if (TokenService.hasToken()) this.props.history.push('/');
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
        window.location = '/';
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
          <span className='login-create'>
            Don't have an account? <Link to='/signup'> Create account</Link>
          </span>
          <span className='login-user'>Test user: dunder@gmail.com</span>
          <span className='login-user'>Password: 'password'</span>
        </form>
      </section>
    );
  }
}
export default withRouter(Login);
