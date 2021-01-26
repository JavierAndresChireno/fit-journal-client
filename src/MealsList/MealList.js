import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MealItem from '../MealItem/MealItem';
import MealService from '../Services/MealService';
import TokenService from '../Services/TokenService';
import './MealList.css';

class MealList extends Component {
  state = {
    meals: [],
    searchBy: '',
    error: null
  };
  componentDidMount() {
    if (!TokenService.hasToken()) this.props.history.push('/signup');
    MealService.getAllMeals()
      .then((meals) => {
        this.setState({
          meals
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error.error.message
        });
      });
  }
  handleFindChange(e) {
    this.setState({
      searchBy: e.target.value.trim()
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchBy } = this.state;
    if (searchBy === '') {
      MealService.getAllMeals()
        .then((meals) => {
          this.setState({
            meals
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error: error.error.message
          });
        });
    } else {
      MealService.getFilteredMeals(searchBy)
        .then((meals) => {
          this.setState({
            meals
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
  render() {
    const { error } = this.state;
    const items = this.state.meals.map((sendObject) => {
      return (
        <li key={sendObject.id}>
          <MealItem object={sendObject} />
        </li>
      );
    });
    return (
      <div className='meals'>
        <div className='title-add'>
          <h2>Meals</h2>
          <button
            type='button'
            className='add-meal '
            onClick={() => {
              this.props.history.push('/new/meal');
            }}
          >
            + New meal
          </button>
        </div>
        <form
          className='searchForm'
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor='searchBy'>Find:</label>
          <input
            type='text'
            name='searchBy'
            id='searchBy'
            value={this.state.searchBy}
            onChange={(e) => {
              this.handleFindChange(e);
            }}
          />
          <button type='submit' name='searchButton'>
            Search
          </button>
        </form>
        <div className='meal-error'>{error && <p>{error}</p>}</div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default withRouter(MealList);
