import axios from "axios";

const api = axios.create({
  baseURL: "https://shop-ease-backend-seven.vercel.app/api",
  withCredentials: true,
});

export default api;
