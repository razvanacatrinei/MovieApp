import axios from "axios";
import Settings from "../config/Settings";

export const getDetails = (id) => {
  const { API_URL, API_KEY } = Settings;
  const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
  return axios.get(url);
};
