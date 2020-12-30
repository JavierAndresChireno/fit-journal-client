import React from 'react';
import ReactDOM from 'react-dom';
import ValidationError from './ValidationError';

it('render ValidationError component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ValidationError message='dd' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
