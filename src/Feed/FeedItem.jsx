import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({
  title, feedType, authorName, createdOn, content,
}) => (
  <article data-testid="feed-item">
    <header>
      <h3>{title}</h3>
    </header>
    <main>
      { feedType === 'article'
        ? <FeedArticle article={content} />
        : <img src={content} alt={title} />}
    </main>
    <footer>
      <address>
        {authorName}
        <time>{(new Date(createdOn)).toLocaleString()}</time>
      </address>
    </footer>
  </article>
);

const FeedArticle = ({ article }) => {
  const lines = article.split('\n');
  return lines.map((line, index) => <p key={index.toString()}>{line}</p>);
};

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  feedType: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeedItem;
