import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getEvents = () => axios.get(`${API_URL}/events`);
export const addEvent = (event, token) => axios.post(`${API_URL}/events`, event, { headers: { Authorization: `Bearer ${token}` } });
export const updateEvent = (id, event, token) => axios.put(`${API_URL}/events/${id}`, event, { headers: { Authorization: `Bearer ${token}` } });
export const deleteEvent = (id, token) => axios.delete(`${API_URL}/events/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const searchEvents = (query) => axios.get(`${API_URL}/events/search?query=${query}`);
export const filterEvents = (category, date) => axios.get(`${API_URL}/events/filter?category=${category}&date=${date}`);
export const registerUser = (user) => axios.post(`${API_URL}/users/register`, user);
export const loginUser = (user) => axios.post(`${API_URL}/users/login`, user);
