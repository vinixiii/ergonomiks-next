import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-ergonomiks.azurewebsites.net/v1/',
});
