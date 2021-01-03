import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <h3> Apple pie</h3>
        </Link>
        <p>Apple pie with little calories and great macros.</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  object: PropTypes.object
};

export default withRouter(ListItem);
