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
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
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
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
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
  createExercise(values) {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      },
      body: JSON.stringify(values)
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((res) => {
          throw res;
        });
      }
    });
  },
  updateExercise(id, values) {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      },
      body: JSON.stringify(values)
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((res) => {
          throw res;
        });
      }
    });
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
    if (exercises_muscles) {
      const muscles = exercises_muscles.map((val) => {
        return FormatService.firstLetterUpperCase(val.name || '');
      });
      return muscles.join(', ');
    }
  },
  createBodyPartsString(muscles, bodyPartsArray) {
    const bodyParts = [];
    if (muscles && bodyPartsArray) {
      muscles.forEach((val) => {
        const body = bodyPartsArray.find(
          (body) => body.id === val.body_part_id
        );

        if (body) {
          const bodyName = FormatService.firstLetterUpperCase(body.name);

          if (!bodyParts.includes(bodyName)) {
            bodyParts.push(bodyName);
          }
        }
      });
      return bodyParts.join(', ');
    }
  },
  deleteExercise(id) {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((res) => {
          throw res;
        });
      }
    });
  },
  filterExercise(query) {
    return fetch(`${CONFIG.API_ENDPOINT}exercises/find/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
      .then((exercises) => exercises);
  }
};

export default ExerciseService;
