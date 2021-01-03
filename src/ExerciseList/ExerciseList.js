import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import List from '../List/List';

class ExerciseList extends Component {
  render() {
    return <List />;
  }
}
export default withRouter(ExerciseList);
