import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <div className='List'>
        <div class='title-add'>
          <h2>Meals</h2>
          <button type='button' className='add'>
            {' '}
            + Add
          </button>
        </div>
        <form class='searchForm'>
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
            <a>
              <h3>Apple pie</h3>
            </a>
            <p>Apple pie with little calories and great macros.</p>
          </li>
          <li>
            <a>
              <h3>Apple pie</h3>
            </a>
            <p>Apple pie with little calories and great macros.</p>
          </li>
          <li></li>
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
