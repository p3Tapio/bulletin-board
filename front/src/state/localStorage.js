/* eslint-disable no-undef */
export const setUser = (user) => localStorage.setItem('userData', JSON.stringify(user));
export const getUser = () => JSON.parse(localStorage.getItem('userData'));
export const setToken = (token) => localStorage.setItem('accessToken', token);
export const getToken = (token) => localStorage.getItem('accessToken', token);
export const clearLocalStorage = () => localStorage.clear();
