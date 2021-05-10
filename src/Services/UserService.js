import config from '../config';
import TokenService from './TokenService';

const UserService = {
  createUser(user) {
    return fetch(`${config.API_ENDPOINT}users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((res) => {
          return Promise.reject(res.error);
        });
      }
      return res.json();
    });
  },
  logIn(user) {
    return fetch(`${config.API_ENDPOINT}users/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        origin: 'https://fit-journal-client-yefenny.vercel.app'
      },
      body: JSON.stringify(user)
    }).then((res) =>
      !res.ok ? res.json().then((res) => Promise.reject(res.error)) : res.json()
    );
  },
  getFullName() {
    return fetch(`${config.API_ENDPOINT}users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TokenService.getToken()}`
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
      .then((res) => res);
  }
};
export default UserService;
