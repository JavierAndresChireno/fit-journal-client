import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BodyCompositionService from '../Services/BodyCompositionService';
import './BodyComposition.css';
class BodyComposition extends Component {
  state = {
    bodyComposition: {},
    error: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    BodyCompositionService.getBodyCompositionById(id)
      .then((bodyComposition) => {
        this.setState({
          bodyComposition
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  handleDelete() {
    const { id } = this.props.match.params;

    BodyCompositionService.deleteBodyCompositionById(id)
      .then(() => {
        this.props.history.push('/body-composition');
      })
      .catch((error) => {
        this.setState({
          error: error.error.message
        });
      });
  }
  handleEdit() {
    const { id } = this.props.match.params;
    this.props.history.push(`/edit/body-composition/${id}`);
  }
  render() {
    const {
      left_arm,
      right_arm,
      chest,
      waist,
      hips,
      left_thigh,
      right_thigh,
      left_calf,
      right_calf,
      weight,
      body_fat,
      error
    } = this.state.bodyComposition;
    return (
      <div className='body-composition-container'>
        <h2>Body composition</h2>
        <div className='body-composition-form-error'>
          {error && <p>{error}</p>}
        </div>
        <div className='body-composition-details'>
          <h3>Arms</h3>
          <span className='key-name'>Left: </span> {left_arm} inches
          <span className='key-name'>Right: </span> {right_arm} inches
        </div>
        <div className='body-composition-details'>
          <h3>Chest</h3>
          <span className='key-name'>Chest: </span> {chest} inches
        </div>
        <div className='body-composition-details'>
          <h3>Waist</h3>
          <span className='key-name'>Waist: </span> {waist} inches
        </div>
        <div className='body-composition-details'>
          <h3>Hips</h3>
          <span className='key-name'>Hips: </span> {hips} inches
        </div>
        <div className='body-composition-details'>
          <h3>Thighs</h3>
          <span className='key-name'>Left: </span> {left_thigh} inches
          <span className='key-name'>Right: </span> {right_thigh} inches
        </div>
        <div className='body-composition-details'>
          <h3>Calves</h3>
          <span className='key-name'>Left: </span> {left_calf} inches
          <span className='key-name'>Right: </span> {right_calf} inches
        </div>
        <div className='body-composition-details'>
          <h3>Weight</h3>
          <span className='key-name'>Weight: </span> {weight} pounds
        </div>
        <div className='body-composition-details'>
          <h3>Body fat percent</h3>
          <span className='key-name'>Body fat percent: </span> {body_fat} %
        </div>
        <div className='body-composition-buttons'>
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

export default withRouter(BodyComposition);
