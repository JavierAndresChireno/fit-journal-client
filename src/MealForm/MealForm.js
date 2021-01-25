import React from 'react';
import { withRouter } from 'react-router-dom';
import './MealForm.css';

import MealService from '../Services/MealService';
import TokenService from '../Services/TokenService';

class MealForm extends React.Component {
  state = {
    title: '',
    url: '',
    description: '',
    error: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (!TokenService.hasToken()) this.props.history.push('/signup');
    if (id) {
      MealService.getMealById(id)
        .then((meal) => {
          this.setState({
            title: meal.title || '',
            url: meal.url || '',
            description: meal.description || ''
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

  handleSubmit = (e) => {
    const { title, url, description } = this.state;
    const { id } = this.props.match.params;
    e.preventDefault();
    this.setState({
      error: null
    });
    if (!this.validateTitle()) {
      this.setState({
        error: 'Should introduce title of meal'
      });
    } else {
      const newMeal = {
        title,
        url,
        description
      };
      if (id) {
        MealService.updateMeal(id, newMeal)
          .then(() => {
            this.props.history.push('/meals');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error });
          });
      } else {
        MealService.createMeal(newMeal)
          .then(() => {
            this.props.history.push('/meals');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error.message });
          });
      }
    }
  };

  render() {
    const { title, url, description, error } = this.state;
    const { id } = this.props.match.params;

    return (
      <div className='meal-form-container'>
        <h2>Meal</h2>
        <form
          action=''
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className='meal-form-error'>{error && <p>{error}</p>}</div>
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

export default withRouter(MealForm);
