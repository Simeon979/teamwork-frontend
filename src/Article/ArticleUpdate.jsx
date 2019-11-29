import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import articleService from '../services/article';
import ArticleForm from './ArticleForm';

const ArticleUpdate = ({ notify, history, articleId }) => {
  console.log('id', articleId)
  const cleanState = {
    title: '',
    article: '',
  };

  const [inputState, setInputState] = useState(cleanState);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleToUpdate = async () => {
      try {
        const response = await articleService.getArticle(articleId);
        if (response.status === 'error') {
          console.log('neigh', response.error)
          setError(response.error);
        } else {
          console.log('yay', response.data);
          setInputState({
            title: response.data.title,
            article: response.data.article,
          });
        }
      } catch (error) {
        console.warn(error);
        setError('An error occured retrieving the article');
      }
    };

    fetchArticleToUpdate();
  }, [articleId]);

  const handleChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await articleService.updateArticle({ ...inputState, articleId });
      if (response.status === 'error' && response.error.includes('expire')) {
      // expired token, redirect to login page
        notify(response.error);
        window.localStorage.clear();
        history.push('/signin');
      } else if (response.status === 'success') {
        notify(response.data.message);
        history.push(`/articles/${articleId}`);
      }
    } catch (error) {
      notify('cannot submit your input');
    }
  };

  return error
    ? <p>{error}</p>
    : <ArticleForm handleChange={handleChange} handleSubmit={handleSubmit} state={inputState} isUpdate />;
};

ArticleUpdate.propTypes = {
  notify: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  articleId: PropTypes.number.isRequired,
};

const ArticleUpdateWithHistory = withRouter(ArticleUpdate);

export default ArticleUpdateWithHistory;

// for testing
export { ArticleUpdate };
