import axios from "axios";

const api = axios.create({ /* lib para consumir API */
  baseURL: "http://localhost:3333/", /* Rota base */
});

export default api;
