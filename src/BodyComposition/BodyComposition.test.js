import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BodyComposition from './BodyComposition';

it('render BodyComposition without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BodyComposition />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
