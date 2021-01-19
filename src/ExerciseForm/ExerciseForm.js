import React from 'react';
import { withRouter } from 'react-router-dom';
import './ExerciseForm.css';
import FormatService from '../Services/FormatService';
import ExerciseService from '../Services/ExerciseService';

class ExerciseForm extends React.Component {
  state = {
    title: '',
    url: '',
    description: '',
    muscle_groups: [],
    body_parts: [],
    body_part_id: '',
    muscle_groups_id: '',
    exercises_muscle_group: [],
    error: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
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

    if (id) {
      ExerciseService.getExercise(id)
        .then((exercise) => {
          this.setState({
            title: exercise.title || '',
            url: exercise.url || '',
            description: exercise.description || '',
            exercises_muscle_group: exercise.exercises_muscle_group || []
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: error.error.message
          });
        });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validateTitle = () => {
    let { title } = this.state;
    title = title.trim();
    if (!title.length) {
      return false;
    }
    return true;
  };
  handleBodyPartChange = (e) => {
    const body_part_id = e.target.value;
    this.setState({
      body_part_id
    });
    if (body_part_id) {
      // fill muscle group select by body part id

      ExerciseService.getMuscleGroupByBodyPartId(body_part_id).then(
        (muscle_groups) => {
          this.setState({
            muscle_groups
          });
        }
      );
    } else {
      this.setState({
        muscle_groups: [],
        muscle_groups_id: ''
      });
    }
  };
  handleSubmit = (e) => {
    const { title, url, description, exercises_muscle_group } = this.state;
    const { id } = this.props.match.params;
    e.preventDefault();
    this.setState({
      error: null
    });
    if (!this.validateTitle()) {
      this.setState({
        error: 'Should introduce title of exercise'
      });
    } else if (!exercises_muscle_group.length) {
      this.setState({
        error: 'Should add at least one muscle group'
      });
    } else {
      const muscle_ids = [];
      // store muscle_ids to only send the ids to the server
      exercises_muscle_group.forEach((muscle) => {
        muscle_ids.push({ muscle_group_id: muscle.id });
      });
      const newExercise = {
        title,
        url,
        description,
        muscle_ids
      };
      if (id) {
        ExerciseService.updateExercise(id, newExercise)
          .then(() => {
            this.props.history.push('/exercises');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error.message });
          });
      } else {
        ExerciseService.createExercise(newExercise)
          .then(() => {
            this.props.history.push('/exercises');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error.message });
          });
      }
    }
  };

  handleAdd = () => {
    const {
      muscle_groups_id,
      exercises_muscle_group,
      muscle_groups,
      body_part_id
    } = this.state;
    // get select muscle store in the state
    const muscleId = parseInt(muscle_groups_id);
    let findMuscle;
    // check that one muscle has been selected before adding to the array
    if (muscle_groups_id !== '') {
      // get all the details of the muscle to store it on exercise_muscles_groups and use it later to create string
      const muscle = muscle_groups.find((val) => val.id === muscleId);
      // Validate if the muscle group id is not already in the array of exercises_muscles_group
      findMuscle = exercises_muscle_group.find((val) => val.id === muscleId);
      // If the muscle has details and it is not already in the array add it
      if (!findMuscle && muscle !== undefined) {
        const newValues = exercises_muscle_group;
        newValues.push(muscle);
        this.setState({
          exercises_muscle_group: newValues
        });
      }
    }
  };

  handleClear = () => {
    this.setState({
      exercises_muscle_group: []
    });
  };

  render() {
    const {
      title,
      url,
      description,
      muscle_groups,
      body_parts,
      error,
      body_part_id,
      muscle_groups_id,
      exercises_muscle_group
    } = this.state;
    const { id } = this.props.match.params;
    let bodyPartsOptions = ExerciseService.createOption(body_parts);
    let muscleGroupsOptions = ExerciseService.createOption(muscle_groups);

    return (
      <div className='exercise-form-container'>
        <h2>Exercise</h2>
        <form
          action=''
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className='exercise-form-error'>{error && <p>{error}</p>}</div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            defaultValue={title}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
            required
          />
          <label htmlFor='body-part'>Select body part</label>
          <select
            name='body-part'
            id='body-part'
            onChange={(e) => {
              this.handleBodyPartChange(e);
            }}
            defaultValue={body_part_id}
          >
            <option value=''>--- Body parts ---</option>
            {/* Generate string of the body parts */}
            {bodyPartsOptions}
          </select>
          <label htmlFor='muscle_groups_id'>Select muscle group</label>
          <select
            name='muscle_groups_id'
            id='muscle_groups_id'
            defaultValue={muscle_groups_id}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
          >
            <option value=''>--- Muscle group ---</option>
            {/* Generate string of the muscle groups */}
            {muscleGroupsOptions}
          </select>
          <div>
            <button type='button' onClick={this.handleAdd}>
              Add
            </button>
            <button type='button' onClick={this.handleClear}>
              Clear
            </button>
          </div>
          <div className='exercise-form-muscles'>
            <span className='key-property'>Body parts:</span>{' '}
            {ExerciseService.createBodyPartsString(
              exercises_muscle_group,
              body_parts
            )}{' '}
            <br />
            <span className='key-property'>Muscle groups:</span>{' '}
            {ExerciseService.createMusclesString(exercises_muscle_group)}
          </div>

          <label htmlFor='url'>URL</label>
          <input
            type='url'
            id='url'
            name='url'
            defaultValue={url}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
          />
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            name='description'
            rows='4'
            cols='30'
            value={description}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
          ></textarea>

          <button>{id ? 'Update' : 'Create'}</button>
          <button type='button' onClick={this.props.history.goBack}>
            {' '}
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ExerciseForm);
