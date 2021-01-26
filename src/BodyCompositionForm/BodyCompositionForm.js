import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BodyCompositionService from '../Services/BodyCompositionService';
import TokenService from '../Services/TokenService';
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
  componentDidMount = () => {
    const { id } = this.props.match.params;
    if (!TokenService.hasToken()) this.props.history.push('/');
    if (id) {
      BodyCompositionService.getBodyCompositionById(id).then((val) => {
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
          body_fat
        } = val;
        this.setState({
          leftArm: left_arm,
          rightArm: right_arm,
          leftThigh: left_thigh,
          rightThigh: right_thigh,
          leftCalf: left_calf,
          rightCalf: right_calf,
          bodyFat: body_fat,
          chest,
          waist,
          hips,
          weight
        });
      });
    }
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
        BodyCompositionService.updateBodyComposition(id, newBodyComposisiton)
          .then(() => {
            this.props.history.push('/body-composition');
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
            this.setState({ error: error.error.message || error });
          });
      }
    }
  };
  render() {
    const { error } = this.state;
    const { id } = this.props.match.params;
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
              step='0.01'
              defaultValue={this.state.leftArm}
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
              step='0.01'
              defaultValue={this.state.rightArm}
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
              step='0.01'
              defaultValue={this.state.chest}
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
              step='0.01'
              defaultValue={this.state.waist}
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
              step='0.01'
              defaultValue={this.state.hips}
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
              step='0.01'
              defaultValue={this.state.leftThigh}
              type='number'
              id='leftThigh'
              name='leftThigh'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
            <label htmlFor='rightThigh'>Right (inches):</label>
            <input
              step='0.01'
              defaultValue={this.state.rightThigh}
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
              step='0.01'
              defaultValue={this.state.leftCalf}
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
              step='0.01'
              defaultValue={this.state.rightCalf}
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
              step='0.01'
              defaultValue={this.state.weight}
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
              step='0.01'
              defaultValue={this.state.bodyFat}
              min='0'
              type='number'
              id='bodyFat'
              name='bodyFat'
              onChange={(e) => {
                this.handleInputChange(e);
              }}
            />
          </div>
          <button>{id ? 'Update' : 'Create'}</button>
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
