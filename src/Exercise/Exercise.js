import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseService from '../Services/ExerciseService';
import FormatService from '../Services/FormatService';
import './Exercise.css';
class Exercise extends React.Component {
  state = {
    exercise: {},
    error: null
  };
  componentDidMount() {
    const exerciseId = this.props.match.params.id || '';
    ExerciseService.getExercise(exerciseId)
      .then((exercise) => {
        this.setState({
          exercise
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }

  render() {
    const { title, description, url } = this.state.exercise;
    return (
      <div className='exercise-container'>
        <h2>Exercise</h2>
        <h3>{FormatService.firstLetterUpperCase(title)}</h3>
        <p>{FormatService.firstLetterUpperCase(description)}</p>
        {url ? <a href={url}> Visit a {title} reference</a> : ''}
        <div className='exercise-buttons'>
          <button>Delete </button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Exercise);
