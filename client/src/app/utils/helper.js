import axios from 'axios';

export const setAuthHeader = token => {
  const FBToken = `Bearer ${token}`;
  localStorage.setItem('FBToken', FBToken);
  axios.defaults.headers.common['Authorization'] = FBToken;

  return;
};
