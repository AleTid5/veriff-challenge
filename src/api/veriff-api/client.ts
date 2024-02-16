import axios from 'axios';

const BASE_URL = 'https://api.veriff.internal';

const Client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default Client;
