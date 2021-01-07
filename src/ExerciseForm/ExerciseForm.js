import React from 'react';
import { withRouter } from 'react-router-dom';
import './ExerciseForm.css';

class ExerciseForm extends React.Component {
  state = {
    title: '',
    url: '',
    description: '',
    muscle_group: [],
    body_part: [],
    body_part_id: '',
    muscle_group_id: '',
    error: null
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validateTitle = () => {
    let { title } = this.state;
    title = title.trim();
    if (!title.lenght) {
      return false;
    }
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateTitle()) {
      this.setState({
        error: 'Should introduce title of exercise'
      });
    }
  };

  render() {
    const {
      title,
      url,
      description,
      muscle_group,
      body_part,
      error
    } = this.state;
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
          <select name='body-part' id='body-part' required>
            <option value=''>--Body parts ---</option>
            <option value=''>chest</option>
            <option value=''>back</option>
            <option value=''>leg</option>
          </select>
          <label htmlFor='muscle-grouo'>Select muscle group</label>
          <select name='body-part' id='body-part'>
            <option value=''>--Muscle group ---</option>
            <option value=''>Calves</option>
            <option value=''>Hamstring</option>
            <option value=''>Quadriceps</option>
          </select>
          <div>
            <button type='button'>Add</button>
            <button type='button'>Clear</button>
          </div>
          <div className='exercise-form-muscles'>
            <span className='key-property'>Muscle group:</span> Calves,Hamstring
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

          <button>Create</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ExerciseForm);
