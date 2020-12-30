import React from 'react';
import ReactDOM from 'react-dom';
import './ValidationError.css';

export default function ValidationError(props) {
  if (props.message) {
    return <div className='error'>{props.message}</div>;
  }
  return <></>;
}
