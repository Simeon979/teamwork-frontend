import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import articleService from '../services/article';
import ArticleForm from './ArticleForm';

const ArticleEdit = ({ notify, history }) => {
  const cleanState = {
    title: '',
    article: '',
  };

  const [inputState, setInputState] = useState(cleanState);

  const handleChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await articleService.createArticle(inputState);
      if (response.status === 'error' && response.error.includes('expire')) {
      // expired token, redirect to login page
        notify(response.error);
        window.localStorage.clear();
        history.push('/signin');
      } else if (response.status === 'success') {
        notify(response.data.message);
        history.push(`/articles/${response.data.articleId}`);
      }
    } catch (error) {
      notify('cannot submit your input');
    }
  };

  return <ArticleForm handleChange={handleChange} handleSubmit={handleSubmit} state={inputState} />;
};

ArticleEdit.propTypes = {
  notify: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

const ArticleEditWithHistory = withRouter(ArticleEdit);

export default ArticleEditWithHistory;

// for testing
export { ArticleEdit };
