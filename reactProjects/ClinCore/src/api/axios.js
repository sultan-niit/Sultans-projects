import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "https://tradeflow.niitwebdev.com.ng/tradeflow-api/admin/auth";

const api = axios.create({
  baseURL: baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
  headers: {
    Accept: "application/json",
  },
});

export default api;
