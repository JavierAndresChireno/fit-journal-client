import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Chart from './Chart';

it('render Chart without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Chart />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
