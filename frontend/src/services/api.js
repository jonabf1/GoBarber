import axios from "axios";

const environment_mode =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "REACT_APP_BASE_URL";

const api = axios.create({
  baseURL: environment_mode
});

export default api;
