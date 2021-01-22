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
  },
  createBodyComposition(values) {
    return fetch(`${CONFIG.API_ENDPOINT}body-compositions/`, {
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
      .then((bodyComposition) => bodyComposition);
  },
  deleteBodyCompositionById(id) {
    return fetch(`${CONFIG.API_ENDPOINT}body-compositions/${id}`, {
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
  updateBodyComposition(id, values) {
    return fetch(`${CONFIG.API_ENDPOINT}body-compositions/${id}`, {
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
  filterBodyComposition(fromDate, toDate) {
    return fetch(
      `${CONFIG.API_ENDPOINT}body-compositions/find/${fromDate}/${toDate}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TokenService.getToken()}`
        }
      }
    )
      .then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw res;
          });
        }
        return res.json();
      })
      .then((bodyCompositions) => bodyCompositions);
  }
};

export default BodyCompositionService;
