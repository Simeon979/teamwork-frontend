/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import FeedItem from '../../Feed/FeedItem';


const mockFeed = [
  {
    id: 14871,
    createdOn: '2019-04-18T04:17:22.736Z',
    title: 'Magni occaecati nisi voluptas odit numquam accusamus.',
    authorId: 9396,
    authorName: 'Balistreri, Nikita',
    article: `Itaque quam dolores mollitia omnis blanditiis.
Quia ut asperiores eaque voluptas qui molestias consequatur est.
Velit quidem ipsam laudantium.
Magnam voluptatem qui consequatur corrupti ea accusantium beatae sed voluptas.
Quasi blanditiis voluptas et nobis iure aut sint sapiente consequatur.`,
  },
  {
    id: 98895,
    createdOn: '2019-03-29T08:57:49.008Z',
    title: 'Ullam quos laboriosam qui.',
    authorId: 15880,
    authorName: 'Morar, Gordon',
    url: 'http://lorempixel.com/640/480/business',
  },
];

describe('FeedItem', () => {
  test('renders feed items gotten from backend', async () => {
    let component;

    afterEach(() => {
      cleanup();
    });

    mockFeed.forEach((feedItem) => {
      component = render(<FeedItem
        createdOn={feedItem.createdOn}
        title={feedItem.title}
        authorName={feedItem.authorName}
        feedType={feedItem.article ? 'article' : 'gif'}
        content={feedItem.article || feedItem.url}
      />);

      expect(component.container).toHaveTextContent(feedItem.title);
      expect(component.container).toHaveTextContent(feedItem.authorName);
      expect(component.container).toHaveTextContent((new Date(feedItem.createdOn)).toLocaleString());
      if (feedItem.article) {
        const lines = feedItem.article.split('\n');
        lines.forEach((line) => {
          expect(component.container).toHaveTextContent(line);
        });
      } else {
        expect(component.getByAltText(feedItem.title)).toBeInTheDocument();
      }
    });
  });
});
