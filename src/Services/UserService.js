import config from '../config';

const UserService = {
  createUser(user) {
    console.log(config.API_ENDPOINT);
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
  }
};
export default UserService;
