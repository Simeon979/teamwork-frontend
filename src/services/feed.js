import url from './url';
import authService from './auth';

const getAll = async () => {
  const feedUrl = url('/feed');

  try {
    const token = authService.getToken();
    const response = await fetch(feedUrl, {
      method: 'GET',
      headers: new Headers({
        token,
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'unable to get feeds' };
  }
};

export default { getAll };
