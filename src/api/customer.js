import { getIdToken } from '@/firebase/auth';
import { Customer } from '@/models';
import router from '@/router';
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const client = axios.create({
  baseURL: VITE_API_URL,
});

client.interceptors.request.use(async (config) => {
  const token = await getIdToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    router.push({ name: 'sign-out' });
  }
  return Promise.reject(error);
});

/**
 * @returns {Promise<Customer[]>}
 */
const list = async () => {
  const response = await client.get('/api/customers');
  return response.data.map((customer) => new Customer(customer));
};

/**
 * @returns {Promise<Customer>}
 */
const create = async (data) => {
  const response = await client.post('/api/customers', data);
  return new Customer(response.data);
};

/**
 * @returns {Promise<Customer>}
 */
const get = async (id) => {
  const response = await client.get(`/api/customers/${id}`);
  return new Customer(response.data);
};

/**
 * @returns {Promise<Customer>}
 */
const update = async (id, data) => {
  const response = await client.put(`/api/customers/${id}`, data);
  return new Customer(response.data);
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
