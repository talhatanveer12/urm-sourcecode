import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});
const axiosFile = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});

axiosInstance.defaults.headers.common["Accept"] = "application/json";
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axiosFile.defaults.headers.common["Accept"] = "application/json";
axiosFile.defaults.headers.common["Content-Type"] = "multipart/form-data";
axiosFile.defaults.headers.common["Access-Control-Allow-Origin"] = "*";


// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token ? token : ""}`;
  return config;
});

axiosFile.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token ? token : ""}`;
  return config;
});


export default axiosInstance;
export const axiosFileInstance = axiosFile;