import url from './url';
import authService from './auth';

const createArticle = async ({ title, article }) => {
  const articleUrl = url('/articles');
  const token = authService.getToken();

  try {
    const response = await fetch(articleUrl, {
      method: 'POST',
      body: JSON.stringify({
        title,
        article,
      }),
      headers: new Headers({
        token,
        'Content-Type': 'application/json',
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'unable to post article' };
  }
};

const updateArticle = async ({ title, article, articleId }) => {
  const articleUrl = url(`/articles/${articleId}`);
  const token = authService.getToken();

  try {
    const response = await fetch(articleUrl, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        article,
      }),
      headers: new Headers({
        token,
        'Content-Type': 'application/json',
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'An error occured while updating the article' };
  }
};

const getArticle = async (articleId) => {
  const articleUrl = url(`/articles/${articleId}`);
  const token = authService.getToken();

  try {
    const response = await fetch(articleUrl, {
      method: 'GET',
      headers: new Headers({
        token,
      }),
    });

    return response.json();
  } catch (err) {
    return { status: 'error', error: 'An error occured retrieving the article' };
  }
};

export default { createArticle, updateArticle, getArticle };
