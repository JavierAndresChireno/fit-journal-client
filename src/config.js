const config = {
  API_ENDPOINT:
    process.env.REACT_APP_API_ENDPOINT ||
    `https://obscure-plains-76776.herokuapp.com/api/`,
  API_TOKEN: process.env.REACT_APP_API_TOKEN
};

export default config;
