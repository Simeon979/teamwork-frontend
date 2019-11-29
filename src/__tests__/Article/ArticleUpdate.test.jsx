/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, wait } from '@testing-library/react';

import { ArticleUpdate } from '../../Article/ArticleUpdate';
import articleService from '../../services/article';

const mockUpdateArticleResponse = {
  message: 'Article successfully updated',
  title: 'Voluptatem officiis sint explicabo placeat aut voluptates et.',
  article: 'Suscipit blanditiis cupiditate hic. Dolor quidem minus delectus itaque soluta quisquam tempora. Quasi esse labore quis.\n'
  + 'Esse alias rerum. Sed incidunt amet. Nulla et eum est et dignissimos. Voluptatum facilis ut laborum assumenda quis.\n'
  + 'Quidem ut voluptas beatae aut explicabo veritatis incidunt quibusdam. Facere recusandae suscipit tempore. Atque dolores nihil quidem sint incidunt consequatur. Aut recusandae dignissimos corporis sunt. Architecto voluptatem quibusdam est molestiae et voluptate quaerat. Est rerum voluptatum quam architecto temporibus.',
};

jest.mock('../../services/article', () => ({
  updateArticle: jest.fn(() => Promise.resolve({
    status: 'success',
    data: mockUpdateArticleResponse,
  })),

  getArticle: jest.fn((id) => Promise.resolve({
    status: 'success',
    data: {
      id,
      createdOn: '2019-11-27T08:12:20.745Z',
      title: 'Non dolor asperiores necessitatibus et dolorem aut porro quasi quia.',
      article: 'Et id dolorem qui quia et. Reiciendis voluptatum quia. Aut saepe inventore ut voluptates in consequatur in blanditiis nesciunt.\n'
     + 'Aperiam odit non quia et et. Accusamus consequuntur atque nihil et voluptas non. Autem voluptatem aliquid. Molestiae voluptatem fuga aspernatur aut id tempora reprehenderit autem quasi. Qui maxime qui qui culpa temporibus.\n'
     + 'Facere nam ex id. Corporis vitae unde et accusamus porro. Architecto molestias laudantium et et. Ipsum dignissimos quam recusandae veritatis praesentium. Consequatur eos id nemo voluptatum aut sit. Totam sit earum veniam impedit animi.',
      comments: [],
    },
  })),
}));

describe('Article update', () => {
  const updatedState = {
    title: 'Voluptatem officiis sint explicabo placeat aut voluptates et.',
    article: 'Suscipit blanditiis cupiditate hic. Dolor quidem minus delectus itaque soluta quisquam tempora. Quasi esse labore quis.\n'
  + 'Esse alias rerum. Sed incidunt amet. Nulla et eum est et dignissimos. Voluptatum facilis ut laborum assumenda quis.\n'
  + 'Quidem ut voluptas beatae aut explicabo veritatis incidunt quibusdam. Facere recusandae suscipit tempore. Atque dolores nihil quidem sint incidunt consequatur. Aut recusandae dignissimos corporis sunt. Architecto voluptatem quibusdam est molestiae et voluptate quaerat. Est rerum voluptatum quam architecto temporibus.',
  };

  const notify = jest.fn();
  const history = {
    push: jest.fn(),
  };

  const articleId = 812;

  const component = render(
    <ArticleUpdate history={history} notify={notify} articleId={articleId} />,
  );
  component.rerender(<ArticleUpdate history={history} notify={notify} articleId={articleId} />);

  test('handles input event correctly and submits', async () => {
    Object.keys(updatedState).forEach((fieldId) => {
      const field = component.getByTestId(`${fieldId}`);
      const clearEvent = { target: { value: '' } };
      const inputEvent = { target: { value: updatedState[`${field.id}`] } };
      fireEvent.change(field, clearEvent);
      fireEvent.change(field, inputEvent);
    });

    const form = component.getByTestId('articleForm');
    fireEvent.submit(form);

    await wait();

    expect(notify.mock.calls.length).toBe(1);
    expect(notify.mock.calls[0][0]).toBe(mockUpdateArticleResponse.message);

    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0][0]).toBe(`/articles/${articleId}`);

    expect(articleService.updateArticle.mock.calls.length).toBe(1);
    expect(articleService.updateArticle.mock.calls[0][0]).toStrictEqual({...updatedState, articleId });
  });
});
