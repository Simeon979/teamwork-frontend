import * as jwtDecode from 'jwt-decode';
import url from './url';

const login = async ({ email, password }) => {
  const loginUrl = url('/auth/signin');

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'unable to login, please try again' };
  }
};

const createUser = async ({
  firstName, lastName, email, password, gender, jobRole, department, address,
}) => {
  const loginUrl = url('/auth/create-user');

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        gender,
        jobRole,
        department,
        address,
      }),
      headers: new Headers({
        token: window.localStorage.getItem('token'),
        'Content-Type': 'application/json',
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'unable to login, please try again' };
  }
};

const setUser = (token) => {
  window.localStorage.setItem('token', token);
  const payload = jwtDecode(token);
  window.localStorage.setItem('user', JSON.stringify(payload));
};

const getToken = () => window.localStorage.getItem('token');

const getUser = () => JSON.parse(window.localStorage.getItem('user'));

export default {
  login,
  createUser,
  setUser,
  getUser,
  getToken,
};
