import axios from "axios";

const API = axios.create({
  baseURL: "https://lumpiest-karis-biochemically.ngrok-free.dev",
});

export const predictHeart = (data) => API.post("/predict", data);