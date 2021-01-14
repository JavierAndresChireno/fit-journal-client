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
    const { title, description, url } = this.state.exercise;
    return (
      <div className='exercise-container'>
        <h2>Exercise</h2>
        <h3>{FormatService.firstLetterUpperCase(title)}</h3>
        <p>{FormatService.firstLetterUpperCase(description)}</p>
        {url ? <a href={url}> Visit a {title} reference</a> : ''}
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
