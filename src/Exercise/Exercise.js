import React from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseService from '../Services/ExerciseService';
import FormatService from '../Services/FormatService';
import TokenService from '../Services/TokenService';
import './Exercise.css';
class Exercise extends React.Component {
  state = {
    exercise: {},
    exercises_muscle_group: [],
    body_parts: [],
    error: null
  };
  componentDidMount() {
    const exerciseId = this.props.match.params.id || '';
    if (!TokenService.hasToken()) this.props.history.push('/signup');
    ExerciseService.getExercise(exerciseId)
      .then((exercise) => {
        this.setState({
          exercise,
          exercises_muscle_group: exercise.exercises_muscle_group || []
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
    ExerciseService.getAllBodyParts()
      .then((body_parts) => {
        this.setState({
          body_parts
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  handleDelete() {
    const exerciseId = this.props.match.params.id || '';
    ExerciseService.deleteExercise(exerciseId)
      .then(() => {
        this.props.history.push('/exercises');
      })
      .catch((error) => {
        this.setState({
          error: error.error.message
        });
      });
  }
  handleEdit() {
    const exerciseId = this.props.match.params.id;
    this.props.history.push(`/edit/exercise/${exerciseId}`);
  }

  render() {
    const { title, description, url, exercises_muscle_group } =
      this.state.exercise;
    return (
      <div className='exercise-container'>
        <h2>Exercise</h2>
        <h3>{FormatService.firstLetterUpperCase(title)}</h3>
        <div className='exercise-muscles'>
          <span className='key-property'>Body parts:</span>{' '}
          {ExerciseService.createBodyPartsString(
            exercises_muscle_group,
            this.state.body_parts
          )}{' '}
          <br />
          <span className='key-property'>Muscle groups:</span>{' '}
          {ExerciseService.createMusclesString(exercises_muscle_group)}
        </div>
        <p>{FormatService.firstLetterUpperCase(description)}</p>
        {url ? (
          <a href={url} rel='noreferrer' target='_blank'>
            Visit a {title} reference
          </a>
        ) : (
          ''
        )}
        <div className='exercise-buttons'>
          <button
            onClick={() => {
              this.handleDelete();
            }}
          >
            Delete{' '}
          </button>
          <button
            onClick={() => {
              this.handleEdit();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Exercise);
