import axios from "axios";
const apiUrl = "http://localhost:8080";
const axiosInstance = axios.create({
  baseURL: apiUrl,
  // timeout: 10000, // Tiempo límite de solicitud en milisegundos
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
