import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import './List.css';

class List extends Component {
  render() {
    const items = this.props.collection.map((sendObject) => {
      return (
        <li key={sendObject.id}>
          <ListItem object={sendObject} />
        </li>
      );
    });
    return (
      <div className='list'>
        <div className='title-add'>
          <h2>{this.props.listName}</h2>
          <button type='button' className='add'>
            {' '}
            + Add
          </button>
        </div>
        <form className='searchForm'>
          <label htmlFor='searchBy'>Find:</label>
          <input type='text' name='searchBy' id='searchBy' />
          <button type='button' name='searchButton'>
            Search
          </button>
        </form>
        <ul>{items}</ul>
      </div>
    );
  }
}

List.prototypes = {
  listName: PropTypes.string,
  collection: PropTypes.arrayOf(PropTypes.object)
};
export default withRouter(List);
