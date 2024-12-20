import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export const getRepositories = async (username = 'frontsennin') => {
  const response = await api.get(`/repos/${username}`);
  return response.data;
};

export default api; 