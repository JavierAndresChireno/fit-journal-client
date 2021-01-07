import CONFIG from '../config';
import TokenService from '../Services/TokenService';
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
  }
};

export default ExerciseService;
