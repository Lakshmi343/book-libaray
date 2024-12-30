import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/users", // Replace <PORT> with your backend port
});

// Automatically add token to headers for authenticated requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
