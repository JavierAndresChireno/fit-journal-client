import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BodyCompositionItem from '../BodyCompositionItem/BodyCompositionItem';
import BodyCompositionService from '../Services/BodyCompositionService';
import './BodyCompositionList.css';

class BodyCompositionList extends Component {
  state = {
    bodyCompositions: [],
    error: null
  };
  componentDidMount() {
    BodyCompositionService.getAllBodyComposition()
      .then((bodyCompositions) => {
        if (bodyCompositions) {
          this.setState({
            bodyCompositions
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: error.error
        });
      });
  }
  render() {
    const items = this.state.bodyCompositions.map((val) => {
      return (
        <li key={val.id}>
          <BodyCompositionItem object={val} />
        </li>
      );
    });
    return (
      <div className='body-composition'>
        <div className='title-add'>
          <h2>Body composition</h2>
          <button type='button' className='add-body-composition'>
            {' '}
            + Add
          </button>
        </div>
        <form className='searchForm'>
          <label htmlFor='date-start'>From:</label>
          <input
            type='date'
            id='start'
            name='date-start'
            value='2018-07-22'
            min='2018-01-01'
            max='2018-12-31'
          />
          <label htmlFor='date-end'>To:</label>
          <input
            type='date'
            id='start'
            name='date-end'
            value='2018-07-22'
            min='2018-01-01'
            max='2018-12-31'
          />
          <button type='button' name='searchButton'>
            Search
          </button>
        </form>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default withRouter(BodyCompositionList);
