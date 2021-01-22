import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BodyCompositionForm from './BodyCompositionForm';

it('render BodyCompositionForm without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BodyCompositionForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
