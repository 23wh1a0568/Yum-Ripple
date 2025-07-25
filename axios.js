// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",  // <-- Your Spring Boot backend URL with /api prefix
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
