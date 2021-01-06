import config from '../config';
const TokenService = {
  storeToken(token) {
    localStorage.setItem(config.API_TOKEN, token);
  },
  getToken() {
    const token = localStorage.getItem(config.API_TOKEN);
    return token;
  }
};
export default TokenService;
