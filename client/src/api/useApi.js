// client/src/useApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust port if your backend uses a different one
});

// Optionally, you can add an interceptor for auth tokens
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
