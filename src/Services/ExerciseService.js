import React from 'react';
import CONFIG from '../config';
import TokenService from '../Services/TokenService';
const ExerciseService = {
  getAllExercises() {
    const token = TokenService.getToken();
    return fetch(`${CONFIG.API_ENDPOINT}exercises/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((exercises) => exercises);
  }
};

export default ExerciseService;
