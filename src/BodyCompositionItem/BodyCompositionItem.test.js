import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BodyCompositionItem from './BodyCompositionItem';

it('render BodyCompositionItem without problem', () => {
  const div = document.createElement('div');
  const obj = {
    id: 1,
    date_created: new Date()
  };
  ReactDOM.render(
    <BrowserRouter>
      <BodyCompositionItem object={obj} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
