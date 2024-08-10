import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const client = axios.create({
  baseURL: VITE_API_URL,
});

const list = async () => {
  const response = await client.get('/api/customers');
  return response.data;
};

const create = async (data) => {
  const response = await client.post('/api/customers', data);
  return response.data;
};

const get = async (id) => {
  const response = await client.get(`/api/customers/${id}`);
  return response.data;
};

const update = async (id, data) => {
  const response = await client.put(`/api/customers/${id}`, data);
  return response.data;
};

const destroy = async (id) => {
  await client.delete(`/api/customers/${id}`);
};

export {
  create,
  destroy,
  get,
  list,
  update,
};
