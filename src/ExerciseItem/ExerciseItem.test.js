import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ListItem from './ExerciseItem';

it('render ListItem without problem', () => {
  const object = {
    title: 'test'
  };
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ListItem object={object} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
