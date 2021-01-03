import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ListItem from './ListItem';

it('render ListItem without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ListItem />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
