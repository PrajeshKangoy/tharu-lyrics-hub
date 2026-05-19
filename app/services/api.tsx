import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FASTAPI_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;