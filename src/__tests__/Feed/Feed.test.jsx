/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement } from '@testing-library/react';

import Feed from '../../Feed/Feed';
import feedService from '../../services/feed';

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
    Quasi blanditiis voluptas et nobis iure aut sint sapiente consequatur.
    `,
  },
  {
    id: 98895,
    createdOn: '2019-03-29T08:57:49.008Z',
    title: 'Ullam quos laboriosam qui.',
    authorId: 15880,
    authorName: 'Morar, Gordon',
    url: 'http://lorempixel.com/640/480/business',
  },
  {
    id: 94965,
    createdOn: '2019-10-28T06:07:19.872Z',
    title: 'Autem sed qui quis dolorem modi.',
    authorId: 28058,
    authorName: 'Simonis, Brycen',
    url: 'http://lorempixel.com/640/480/sports',
  },
  {
    id: 64149,
    createdOn: '2019-06-17T11:42:45.148Z',
    title: 'Voluptatem voluptate ut commodi ex qui qui fugiat.',
    authorId: 93716,
    authorName: 'Kuvalis, Eliezer',
    article: `
    Est perferendis minima. Et eaque pariatur ut aliquam eum est. 
    Sit assumenda ipsam quia doloribus iure occaecati. 
    Fugiat cupiditate dolor libero tempora sint modi illum. 
    Esse est doloremque quo quibusdam placeat est tempore consequuntur ad.'
    `,
  },
  {
    id: 49885,
    createdOn: '2019-08-25T19:16:16.045Z',
    title: 'Enim expedita et.',
    authorId: 66990,
    authorName: 'Gerhold, Francis',
    article: `
    'Commodi delectus minus necessitatibus quae perferendis. Labore dolor amet quo mollitia. 
    Magni ab accusamus consectetur cupiditate itaque qui autem eius debitis. Id sit itaque laborum.'
    `,
  },
];


jest.mock('../../services/feed', () => ({
  getAll: jest.fn(() => Promise.resolve({ status: 'success', data: mockFeed })),
}));

describe('Feed', () => {
  test('renders feed items gotten from backend', async () => {
    const component = render(<Feed />);
    component.rerender(<Feed />);
    const feedItems = await waitForElement(() => component.getAllByTestId('feed-item'));
    expect(feedItems.length).toEqual(5);
    expect(feedItems[0]).toHaveTextContent(mockFeed[0].title);
    expect(feedItems[1]).toHaveTextContent(mockFeed[1].title);
    expect(feedItems[2]).toHaveTextContent(mockFeed[2].title);
    expect(feedItems[3]).toHaveTextContent(mockFeed[3].title);
    expect(feedItems[4]).toHaveTextContent(mockFeed[4].title);

    expect(feedService.getAll.mock.calls.length).toBe(1);
  });
});
