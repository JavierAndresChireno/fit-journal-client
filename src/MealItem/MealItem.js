import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MealItem extends Component {
  render() {
    const { object } = this.props;
    const title =
      typeof object.title === 'string'
        ? object.title.charAt(0).toUpperCase() + object.title.slice(1)
        : object.title;
    const linkTo = `meal/${object.id}`;
    return (
      <div>
        <Link to={linkTo}>
          <h3>{title}</h3>
        </Link>
        <p>{object.description}</p>
      </div>
    );
  }
}

MealItem.propTypes = {
  object: PropTypes.object
};

export default withRouter(MealItem);
