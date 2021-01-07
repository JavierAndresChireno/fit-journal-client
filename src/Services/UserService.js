import config from '../config';

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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) =>
      !res.ok ? res.json().then((res) => Promise.reject(res.error)) : res.json()
    );
  }
};
export default UserService;
