import axios from 'axios';

const API_URL = 'http://localhost:7000/api';
const api = axios.create({baseURL: API_URL});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const authAPI = {
  login: (email, password) => api.post('/auth/login', {email, password}),
  register: (name, email, password) => api.post('/auth/register', {name, email, password}),
  getMe: () => api.get('/auth/me')
};

export const doctorsAPI = {
  getAll: () => api.get('/doctors'),
  create: (data) => api.post('/doctors', data),
  update: (id, data) => api.put(`/doctors/${id}`, data),
  approve: (id, isApproved) => api.patch(`/doctors/${id}/approve`, {isApproved}),
  delete: (id) => api.delete(`/doctors/${id}`)
};

export const patientsAPI = {
  getAll: () => api.get('/patients'),
  create: (data) => api.post('/patients', data),
  update: (id, data) => api.put(`/patients/${id}`, data),
  delete: (id) => api.delete(`/patients/${id}`)
};

export const appointmentsAPI = {
  getAll: () => api.get('/appointments'),
  create: (data) => api.post('/appointments', data),
  updateStatus: (id, status) => api.patch(`/appointments/${id}/status`, {status}),
  delete: (id) => api.delete(`/appointments/${id}`)
};

export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
  getRecentAppointments: () => api.get('/dashboard/recent-appointments')
};