import axios from 'axios';

export const API_URL = 'https://twittercloneinvozone.herokuapp.com';
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export function Login(data = {}) {
  return api
    .post(`${API_URL}/api/login/`, JSON.stringify(data))
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('isAuthenticated', true);
      }
      return response.data;
    });
}
export function Register(data = {}) {
  return api.post(`${API_URL}/api/register/`, JSON.stringify(data));
}
export function Logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('isAuthenticated');
}
export function GetCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}
