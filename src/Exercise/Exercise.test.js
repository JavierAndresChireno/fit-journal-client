import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Exercise from './Exercise';

it('render Exercise without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Exercise />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
