import auth from './auth';
import url from './url';

const getAll = async () => {
  const loginUrl = url('/feed');

  try {
    const token = auth.getToken();
    const response = await fetch(loginUrl, {
      method: 'GET',
      headers: new Headers({
        token,
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'unable to login, please try again' };
  }
};

export default { getAll };
