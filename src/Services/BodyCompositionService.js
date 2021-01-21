import CONFIG from '../config';
import TokenService from '../Services/TokenService';

const BodyCompositionService = {
  getAllBodyComposition() {
    return fetch(`${CONFIG.API_ENDPOINT}body-compositions/`, {
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
      .then((bodyCompositions) => bodyCompositions);
  },
  getBodyCompositionById(id) {
    return fetch(`${CONFIG.API_ENDPOINT}body-compositions/${id}`, {
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
      .then((bodyComposition) => bodyComposition);
  }
};

export default BodyCompositionService;
