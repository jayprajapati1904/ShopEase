import axios from "axios";

const api = axios.create({
  baseURL: "https://shop-ease-backend-seven.vercel.app/",
  withCredentials: true,
});

export default api;
