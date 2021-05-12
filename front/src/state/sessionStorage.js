/* eslint-disable no-undef */
export const setUser = (user) => sessionStorage.setItem('loggedUser', JSON.stringify(user));
export const getUser = () => JSON.parse(sessionStorage.getItem('loggedUser'));
