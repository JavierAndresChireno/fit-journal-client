import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BodyCompositionService from '../Services/BodyCompositionService';
import './BodyCompositionForm.css';
class BodyCompositionForm extends Component {
  state = {
    leftArm: '',
    rightArm: '',
    chest: '',
    waist: '',
    hips: '',
    leftThigh: '',
    rightThigh: '',
    leftCalf: '',
    rightCalf: '',
    weight: '',
    bodyFat: '',
    error: null
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  validateWeight = () => {
    if (this.state.weight === '') {
      return false;
    }
    return true;
  };
  handleSubmit = (e) => {
    const {
      leftArm,
      rightArm,
      chest,
      waist,
      hips,
      leftThigh,
      rightThigh,
      leftCalf,
      rightCalf,
      weight,
      bodyFat
    } = this.state;
    const { id } = this.props.match.params;
    e.preventDefault();

    if (!this.validateWeight) {
      this.setState({
        error: 'Weight is required'
      });
    } else {
      const newBodyComposisiton = {
        left_arm: leftArm,
        right_arm: rightArm,
        left_thigh: leftThigh,
        right_thigh: rightThigh,
        left_calf: leftCalf,
        right_calf: rightCalf,
        body_fat: bodyFat,
        weight,
        chest,
        waist,
        hips
      };
      if (id) {
        BodyCompositionService.updateMeal(id, newBodyComposisiton)
          .then(() => {
            this.props.history.push('/meals');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error });
          });
      } else {
        BodyCompositionService.createBodyComposition(newBodyComposisiton)
          .then(() => {
            this.props.history.push('/body-composition');
          })
          .catch((error) => {
            console.log(error);
            this.setState({ error: error.error.message });
          });
      }
    }
  };
  render() {
    const { error } = this.state;
    return (
      <div className='body-composition-container'>
        <h2>Body Composition</h2>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className='body-composition-form-error'>
            {error && <p>{error}</p>}
          </div>
          <div className='body-group'>
            <h3>Arms</h3>
            <label htmlFor='leftArm'>Left (inches):</label>
            <input
              min='0'
              type='number'
              id='leftArm'
              name='leftArm'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
            <label htmlFor='leftArm'>Right (inches):</label>
            <input
              min='0'
              type='number'
              id='rightArm'
              name='rightArm'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Chest</h3>
            <label htmlFor='chest'>Chest (inches):</label>
            <input
              type='number'
              id='chest'
              name='chest'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Waist</h3>
            <label htmlFor='waist'>Waist (inches):</label>
            <input
              type='number'
              id='waist'
              name='waist'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Hips</h3>
            <label htmlFor='hips'>Hips (inches):</label>
            <input
              type='number'
              id='hips'
              name='hips'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Thighs</h3>
            <label htmlFor='leftThigh'>Left (inches):</label>
            <input
              type='number'
              id='leftThigh'
              name='leftThigh'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
            <label htmlFor='left-thigh'>Right (inches):</label>
            <input
              type='number'
              id='rightThigh'
              name='rightThigh'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Calves</h3>
            <label htmlFor='leftCalf'>Left (inches):</label>
            <input
              min='0'
              type='number'
              id='leftCalf'
              name='leftCalf'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
            <label htmlFor='leftCalf'>Right (inches):</label>
            <input
              min='0'
              type='number'
              id='rightCalf'
              name='rightCalf'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Weight</h3>
            <label htmlFor='weight'>Weight (pounds):</label>
            <input
              min='0'
              type='number'
              id='weight'
              name='weight'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <div className='body-group'>
            <h3>Body fat</h3>
            <label htmlFor='bodyFat'>Body fat (percent):</label>
            <input
              min='0'
              type='number'
              id='bodyFat'
              name='bodyFat'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <button>Create</button>
          <button
            type='button'
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(BodyCompositionForm);
