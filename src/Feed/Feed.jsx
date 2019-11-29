import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FeedItem from './FeedItem';
import feedService from '../services/feed';

const FeedDisplay = ({ feed }) => (
  feed.status === 'error'
    ? <p>{feed.error}</p>
    : feed.data.map((feedItem) => (
      <FeedItem
        key={feedItem.id}
        id={feedItem.id}
        createdOn={feedItem.createdOn}
        title={feedItem.title}
        authorName={feedItem.authorName}
        feedType={feedItem.article ? 'article' : 'gif'}
        content={feedItem.article || feedItem.url}
      />
    ))
);

FeedDisplay.propTypes = {
  feed: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdOn: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      authorName: PropTypes.string.isRequired,
      article: PropTypes.string,
      url: PropTypes.string,
    }).isRequired).isRequired,
  }).isRequired,
};

const FeedContainer = styled.main`
  min-height: 80vh;
`;

const FeedHeader = styled.h1`
  margin-bottom: 5em;
`;

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const serverFeed = await feedService.getAll();
        setFeed(serverFeed);
        setIsLoading(false);
      } catch (err) {
        setFeed({ status: 'error', error: 'Unable to get feed' });
        setIsLoading(false);
      }
    };
    fetchFeed();
  }, []);

  return (
    <FeedContainer>
      <header>
        <FeedHeader>Feed</FeedHeader>
      </header>
      <main>
        { feed.data && feed.data.length === 0 && !isLoading && <p>Nothing here at the moment</p>}
        { isLoading
          ? <p>Loading feeds</p>
          : <FeedDisplay feed={feed} />}
      </main>
    </FeedContainer>
  );
};


export default Feed;
