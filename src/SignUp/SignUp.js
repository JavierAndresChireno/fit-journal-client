import React from 'react';
import './SignUp.css';
import ValidationError from './../ValidationError/ValidationError';
import UserService from '../Services/UserService';
import TokenService from '../Services/TokenService';
export default class SignUp extends React.Component {
  state = {
    name: {
      value: '',
      touched: false
    },
    lastname: {
      value: '',
      touched: false
    },
    email: {
      value: '',
      touched: false
    },
    password: {
      value: '',
      touched: false
    },
    repeatPassword: {
      value: '',
      touched: false
    },
    error: null
  };
  changeField = (target) => {
    const { id, value } = target;
    this.setState({
      [id]: {
        value,
        touched: true
      }
    });
  };

  validateName = () => {
    const { name } = this.state;

    if (name.touched) {
      if (name.value.length < 1) {
        return 'Name should have at least 1 character ';
      }
    }
  };
  validateLastName = () => {
    const { lastname } = this.state;

    if (lastname.touched) {
      if (lastname.value.length < 1) {
        return 'Lastname should have at least 1 character ';
      }
    }
  };
  validateEmail = () => {
    const { email } = this.state;

    if (email.touched) {
      if (email.value.length < 1) {
        return 'email should have at least 1 character ';
      }
    }
  };

  validatePassword = () => {
    const { password } = this.state;

    if (password.touched) {
      if (password.value.length < 6) {
        return 'Password should have at least 6 character';
      }
    }
  };

  validateRepeatPassword = () => {
    const { repeatPassword, password } = this.state;

    if (repeatPassword.touched) {
      if (repeatPassword.value !== password.value) {
        return `Passwords don't match`;
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastname, email, password } = this.state;
    console.log(process.env.REACT_APP_API_ENDPOINT);
    const user = {
      email: email.value,
      password: password.value,
      full_name: `${name.value} ${lastname.value}`
    };
    console.log(user);
    UserService.createUser(user)
      .then((res) => {
        TokenService.storeToken(res.authToken);
        this.setState({
          name: {
            value: '',
            touched: false
          },
          lastname: {
            value: '',
            touched: false
          },
          email: {
            value: '',
            touched: false
          },
          password: {
            value: '',
            touched: false
          },
          repeatPassword: {
            value: '',
            touched: false
          },
          error: null
        });
      })
      .catch((res) => {
        this.setState({ error: res.message });
      });
  };

  render() {
    const nameError = this.validateName();
    const lastnameError = this.validateLastName();
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();
    const { error } = this.state;
    return (
      <div className='sign-up-container'>
        <h2>Sign up</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='alert'>{error && <p>{error}</p>}</div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='user-name'
            onChange={(e) => {
              this.changeField(e.target);
            }}
            required
          />
          <ValidationError message={nameError} />
          <label htmlFor='lastname'>Lastname</label>
          <input
            type='text'
            id='lastname'
            name='user-lastname'
            onChange={(e) => {
              this.changeField(e.target);
            }}
            required
          />
          <ValidationError message={lastnameError} />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={(e) => {
              this.changeField(e.target);
            }}
            required
          />
          <ValidationError message={emailError} />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e) => {
              this.changeField(e.target);
            }}
            required
          />
          <ValidationError message={passwordError} />
          <label htmlFor='repeatPassword'> Repeat password</label>
          <input
            type='password'
            id='repeatPassword'
            name='repeatPassword'
            required
            onChange={(e) => {
              this.changeField(e.target);
            }}
          />
          <ValidationError message={repeatPasswordError} />
          <button
            type='submit'
            disabled={
              this.validateEmail() ||
              this.validateName() ||
              this.validateLastName() ||
              this.validatePassword() ||
              this.validateRepeatPassword()
            }
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
