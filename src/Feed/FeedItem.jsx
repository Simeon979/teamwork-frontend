import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Item = styled.article`
  min-height: 40px;
  min-width: 80%;
  padding: 2em;
  background-color: #bc4873;
  margin-bottom: 3em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: none;
  }
`;

const FeedItem = ({
  id, title, feedType, authorName, createdOn, content,
}) => (
  <StyledLink to={`/${feedType === 'article' ? 'articles' : 'gifs'}/${id}`}>
    <Item data-testid="feed-item">
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
    </Item>
  </StyledLink>
);

const FeedArticle = ({ article }) => {
  const lines = article.split('\n');
  return lines.map((line, index) => <p key={index.toString()}>{line}</p>);
};

FeedItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  feedType: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeedItem;
