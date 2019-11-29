import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FeedItem from '../Feed/FeedItem';
import articleService from '../services/article';

const ArticleDisplay = ({ article }) => (
  article.status === 'error'
    ? <p>{article.error}</p>
    : (
      <FeedItem
        id={article.data.id}
        createdOn={article.data.createdOn}
        title={article.data.title}
        authorName={article.data.authorName}
        feedType={article.data.article ? 'article' : 'gif'}
        content={article.data.article || article.data.url}
      />
    )
);

ArticleDisplay.propTypes = {
  article: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdOn: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      article: PropTypes.string,
      url: PropTypes.string,
    }),
  }).isRequired,
};

const Article = ({ articleId, notify }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const serverArticle = await articleService.getArticle(articleId);
        setArticle(serverArticle);
        setIsLoading(false);
      } catch (err) {
        notify('Unable to get feed');
        setArticle({ status: 'error', error: 'Unable to get article' });
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, [articleId, notify]);

  return (
    <main>
      { isLoading
        ? <p>Loading articles</p>
        : <ArticleDisplay article={article} />}
    </main>
  );
};

Article.propTypes = {
  articleId: PropTypes.number.isRequired,
  notify: PropTypes.func.isRequired,
};

export default Article;
