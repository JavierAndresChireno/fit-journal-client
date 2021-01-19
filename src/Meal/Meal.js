import React from 'react';
import { withRouter } from 'react-router-dom';
import MealService from '../Services/MealService';
import FormatService from '../Services/FormatService';
import './Meal.css';
class Meal extends React.Component {
  state = {
    meal: {},
    error: null
  };
  componentDidMount() {
    const mealId = this.props.match.params.id || '';
    MealService.getMealById(mealId)
      .then((meal) => {
        this.setState({
          meal
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  handleDelete() {
    const mealId = this.props.match.params.id || '';
    MealService.deleteMeal(mealId)
      .then(() => {
        this.props.history.push('/meals');
      })
      .catch((error) => {
        this.setState({
          error: error.error.message
        });
      });
  }
  handleEdit() {
    const mealId = this.props.match.params.id;
    this.props.history.push(`/edit/meal/${mealId}`);
  }

  render() {
    const { title, description, url } = this.state.meal;
    return (
      <div className='meal-container'>
        <h2>Meal</h2>
        <h3>{FormatService.firstLetterUpperCase(title)}</h3>
        <p>{FormatService.firstLetterUpperCase(description)}</p>
        {url ? <a href={url}> Visit a {title} reference</a> : ''}
        <div className='meal-buttons'>
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

export default withRouter(Meal);
