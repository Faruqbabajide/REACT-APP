// src/api/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // The URL where your NestJS app is running
});

export default instance;
