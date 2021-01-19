import React from 'react';
import CONFIG from '../config';
import TokenService from '../Services/TokenService';
import FormatService from './FormatService';
const MealService = {
  getAllMeals() {
    return fetch(`${CONFIG.API_ENDPOINT}meals/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => res.json())
      .then((meals) => meals);
  },
  getFilteredMeals(query) {
    return fetch(`${CONFIG.API_ENDPOINT}meals/find/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      }
    })
      .then((res) => res.json())
      .then((meals) => meals);
  }
};

export default MealService;
