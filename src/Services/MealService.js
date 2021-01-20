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
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
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
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
      .then((meals) => meals);
  },
  getMealById(id) {
    return fetch(`${CONFIG.API_ENDPOINT}meals/${id}`, {
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
      .then((meal) => meal);
  },
  createMeal(values) {
    return fetch(`${CONFIG.API_ENDPOINT}meals/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getToken()}`
      },
      body: JSON.stringify(values)
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
      .then((meal) => meal);
  },
  deleteMeal(id) {
    return fetch(`${CONFIG.API_ENDPOINT}meals/${id}`, {
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
  updateMeal(id, values) {
    return fetch(`${CONFIG.API_ENDPOINT}meals/${id}`, {
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
  }
};

export default MealService;
