import config from '../config';
const TokenService = {
  storeToken(token) {
    window.localStorage.setItem(config.API_TOKEN, token);
  }
};
export default TokenService;
