/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';

import { ArticleEdit } from '../../Article/ArticleEdit';
import articleService from '../../services/article';

const mockNewArticleResponse = {
  message: 'Article successfully posted',
  articleId: '281',
  createdOn: '2019-11-27T08:12:20.745Z',
  title: 'Non dolor asperiores necessitatibus et dolorem aut porro quasi quia.',
};

jest.mock('../../services/article', () => ({
  createArticle: jest.fn(() => Promise.resolve({
    status: 'success',
    data: mockNewArticleResponse,
  })),
}));

describe('handles input change and submission', () => {
  const testState = {
    title: 'Non dolor asperiores necessitatibus et dolorem aut porro quasi quia.',
    article: 'Et id dolorem qui quia et. Reiciendis voluptatum quia. Aut saepe inventore ut voluptates in consequatur in blanditiis nesciunt.\n'
     + 'Aperiam odit non quia et et. Accusamus consequuntur atque nihil et voluptas non. Autem voluptatem aliquid. Molestiae voluptatem fuga aspernatur aut id tempora reprehenderit autem quasi. Qui maxime qui qui culpa temporibus.\n'
     + 'Facere nam ex id. Corporis vitae unde et accusamus porro. Architecto molestias laudantium et et. Ipsum dignissimos quam recusandae veritatis praesentium. Consequatur eos id nemo voluptatum aut sit. Totam sit earum veniam impedit animi.',
  };

  const notify = jest.fn();
  const history = {
    push: jest.fn(),
  };

  const component = render(<ArticleEdit history={history} notify={notify} />);

  test('handles input event correctly and submits', async () => {
    Object.keys(testState).forEach((fieldId) => {
      const field = component.getByTestId(`${fieldId}`);
      const event = { target: { value: testState[`${field.id}`] } };
      fireEvent.change(field, event);
    });

    const form = component.getByTestId('articleForm');
    fireEvent.submit(form);

    await wait();

    expect(notify.mock.calls.length).toBe(1);
    expect(notify.mock.calls[0][0]).toBe(mockNewArticleResponse.message);

    expect(history.push.mock.calls.length).toBe(0);

    expect(articleService.createArticle.mock.calls.length).toBe(1);
    expect(articleService.createArticle.mock.calls[0][0]).toStrictEqual(testState);
  });
});
