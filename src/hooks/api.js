import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,

  timeout: 10000, // 10 seconds timeout
  headers: {
    // 'User-Agent': 'Apidog/1.0.0 (https://apidog.com)',
    "Content-Type": "application/json",
    Accept: "*/*",
    // Host: "localhost:3000",
    // Connection: "keep-alive",
  },
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor for logging
api.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error(
      "Response Error:",
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);

export default api;
