import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "https://drakionoil.com/api/niit-api-testing";

const api = axios.create({
  baseURL: baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl,
  headers: {
    Accept: "application/json",
  },
});

export default api;
