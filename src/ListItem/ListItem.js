import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    const { object } = this.props;
    const title =
      typeof object.title === 'string'
        ? object.title.charAt(0).toUpperCase() + object.title.slice(1)
        : object.title;
    return (
      <div>
        <Link to='/'>
          <h3>{title}</h3>
        </Link>
        <p>{object.description}</p>
      </div>
    );
  }
}

ListItem.propTypes = {
  object: PropTypes.object
};

export default withRouter(ListItem);
