import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';

it('renders SignUp component without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
