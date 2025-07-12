import api from './api.js';

export const userService = {
  async getUsers(role = null) {
    const params = role ? { role } : {};
    const response = await api.get('/users', { params });
    return response.data;
  },

  async getDoctors() {
    const response = await api.get('/users/doctors');
    return response.data;
  },

  async getPatients() {
    const response = await api.get('/users/patients');
    return response.data;
  }
};