import React from 'react';
import './SignUp.css';
export default class SignUp extends React.Component {
  render() {
    return (
      <div className='sign-up-container'>
        <h2>Sign up</h2>
        <form action=''>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='user-name' />
          <label htmlFor='lastname'>Lastname</label>
          <input type='text' id='lastname' name='user-lastname' />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
          <label htmlFor='repeat-password'> Repeat password</label>
          <input type='password' id='repeat-password' name='repeat-password' />
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}
