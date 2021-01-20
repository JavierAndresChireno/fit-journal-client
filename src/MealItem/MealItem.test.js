import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MealItem from './MealItem';

it('render MealItem without problem', () => {
  const div = document.createElement('div');
  const object = { title: 'meal test' };
  ReactDOM.render(
    <BrowserRouter>
      <MealItem object={object} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
