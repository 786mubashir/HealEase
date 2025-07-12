import api from './api.js';

export const appointmentService = {
  async createAppointment(appointmentData) {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },

  async getAppointments() {
    const response = await api.get('/appointments');
    return response.data;
  },

  async getAllAppointments() {
    const response = await api.get('/appointments/all');
    return response.data;
  },

  async updateAppointment(id, updateData) {
    const response = await api.put(`/appointments/${id}`, updateData);
    return response.data;
  },

  async cancelAppointment(id) {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  }
};