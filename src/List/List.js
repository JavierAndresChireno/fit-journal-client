import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className='list'>
        <div className='title-add'>
          <h2>Meals</h2>
          <button type='button' className='add'>
            {' '}
            + Add
          </button>
        </div>
        <form className='searchForm'>
          <label htmlFor='searchBy'>Find:</label>
          <input
            type='text'
            name='searchBy'
            id='searchBy'
            placeholder='Apple pie..'
          />
          <button type='button' name='searchButton'>
            Search
          </button>
        </form>
        <ul>
          <li>
            <ListItem />
          </li>
        </ul>
      </div>
    );
  }
}

List.prototypes = {
  listName: PropTypes.string,
  collection: PropTypes.arrayOf(PropTypes.object)
};
export default withRouter(List);
