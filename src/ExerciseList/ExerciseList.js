import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import ExerciseService from '../Services/ExerciseService';
import List from '../List/List';

class ExerciseList extends Component {
  state = {
    exercises: []
  };
  componentDidMount() {
    ExerciseService.getAllExercises().then((exercises) => {
      this.setState({
        exercises
      });
    });
  }
  render() {
    const { exercises } = this.state;
    return <List collection={exercises} listName='Exercises' />;
  }
}
export default withRouter(ExerciseList);
