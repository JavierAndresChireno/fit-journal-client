import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ExerciseList from './ExerciseList';

it('render ExerciseList without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ExerciseList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
