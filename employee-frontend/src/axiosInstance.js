import axios from 'axios';

const axiosInstance = axios.create({
  // Hardcoding the production Render URL since the Vercel environment variable is failing to load
  baseURL: 'https://employee-1-nfu9.onrender.com/api',
});

export default axiosInstance;
