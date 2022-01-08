import axios from "axios";
import config from "../config.json";

export const httpClient = axios.create({
  baseURL: config.api.url,
});
