import React from 'react';
import './LandingPage.css';
import muscle from '../images/muscle.svg';
export default function LandingPage() {
  return (
    <div className='home'>
      <h2>Welcome to Fit Journal!</h2>
      <p>
        Stop losing time looking for recipes and exercises, store them in your
        fit journal and find them easily!
      </p>
      <img src={muscle} alt='' />
    </div>
  );
}
