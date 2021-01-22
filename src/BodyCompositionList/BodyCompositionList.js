import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import BodyCompositionItem from '../BodyCompositionItem/BodyCompositionItem';
import BodyCompositionService from '../Services/BodyCompositionService';
import './BodyCompositionList.css';

class BodyCompositionList extends Component {
  state = {
    bodyCompositions: [],
    fromDate: format(new Date(), 'yyyy-MM-dd'),
    toDate: format(new Date(), 'yyyy-MM-dd'),
    error: null
  };
  componentDidMount() {
    this.getAllBodyComposition();
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit(e) {
    const { fromDate, toDate } = this.state;
    e.preventDefault();

    BodyCompositionService.filterBodyComposition(fromDate, toDate)
      .then((bodyCompositions) => {
        this.setState({
          bodyCompositions
        });
      })
      .catch((error) => {
        this.setState({
          error: error.error || error
        });
      });
  }
  getAllBodyComposition() {
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

  handleAll = () => {
    this.getAllBodyComposition();
  };
  render() {
    const { error, fromDate, toDate } = this.state;
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
          <button
            type='button'
            className='add-body-composition'
            onClick={() => {
              this.props.history.push('/new/body-composition');
            }}
          >
            {' '}
            + Add
          </button>
        </div>
        <form
          className='searchForm'
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label htmlFor='fromDate'>From:</label>
          <input
            type='date'
            id='fromDate'
            name='fromDate'
            value={fromDate}
            max={new Date()}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
          />
          <label htmlFor='toDate'>To:</label>
          <input
            type='date'
            id='toDate'
            name='toDate'
            value={toDate}
            max={new Date()}
            onChange={(e) => {
              this.handleInputChange(e);
            }}
          />
          <button type='submit' name='searchButton'>
            Search
          </button>
          <button type='button' name='allButton' onClick={this.handleAll}>
            All
          </button>
        </form>
        <div className='body-composition-form-error'>
          {error && <p>{error}</p>}
        </div>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default withRouter(BodyCompositionList);
