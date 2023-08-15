import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-financa.onrender.com'//'http://10.0.0.113:3333',
});

export default api;
