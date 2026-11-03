import axios from "axios";

const baseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "https://clincore.niitwebdev.com.ng/clincore-api/admin/auth";

const api = axios.create({
  baseURL: baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    if (typeof response.data === "string") {
      const trimmed = response.data.trim();
      const cleanJson = trimmed.replace(/;+$/, "").trim();
      if (
        (cleanJson.startsWith("{") && cleanJson.endsWith("}")) ||
        (cleanJson.startsWith("[") && cleanJson.endsWith("]"))
      ) {
        try {
          response.data = JSON.parse(cleanJson);
        } catch {
          // Keep raw response.data if not valid JSON
        }
      }
    }
    return response;
  },
  (error) => {
    if (error.response && typeof error.response.data === "string") {
      const trimmed = error.response.data.trim();
      const cleanJson = trimmed.replace(/;+$/, "").trim();
      if (
        (cleanJson.startsWith("{") && cleanJson.endsWith("}")) ||
        (cleanJson.startsWith("[") && cleanJson.endsWith("]"))
      ) {
        try {
          error.response.data = JSON.parse(cleanJson);
        } catch {
          // Keep raw error data
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
