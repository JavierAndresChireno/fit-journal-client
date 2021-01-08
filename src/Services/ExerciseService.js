import React from 'react';
import CONFIG from '../config';
import TokenService from '../Services/TokenService';
import FormatService from './FormatService';
const ExerciseService = {
  getAllExercises() {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => res.json())
      .then((exercises) => exercises);
  },
  getExercise(exerciseId) {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/${exerciseId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => res.json())
      .then((exercise) => exercise);
  },
  getAllBodyParts() {
    return fetch(`${CONFIG.API_ENDPOINT}body-parts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => res.json())
      .then((bodyparts) => bodyparts);
  },
  getMuscleGroupByBodyPartId(bodyPartId) {
    return fetch(
      `${CONFIG.API_ENDPOINT}muscle-groups/body-parts/${bodyPartId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TokenService.getToken()}`
        }
      }
    )
      .then((res) => res.json())
      .then((musclegroups) => musclegroups);
  },
  createOption(array) {
    // return options for the select from array
    return array.map((val) => {
      return (
        <option key={val.id} value={val.id}>
          {FormatService.firstLetterUpperCase(val.name)}
        </option>
      );
    });
  },
  createMusclesString(exercises_muscles) {
    const muscles = exercises_muscles.map((val) => {
      return FormatService.firstLetterUpperCase(val.name || '');
    });
    return muscles.join(', ');
  },
  createBodyPartsString(muscles, bodyPartsArray) {
    const bodyParts = [];
    muscles.forEach((val) => {
      const body = bodyPartsArray.find((body) => body.id === val.body_part_id);
      const bodyName = FormatService.firstLetterUpperCase(body.name);
      if (!bodyParts.includes(bodyName)) {
        bodyParts.push(bodyName);
      }
    });
    return bodyParts.join(', ');
  }
};

export default ExerciseService;
