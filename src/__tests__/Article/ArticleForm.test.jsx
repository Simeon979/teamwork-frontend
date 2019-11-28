/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ArticleForm from '../../Article/ArticleForm';

describe('Renders create user form', () => {
  const fields = [
    'Title',
    'Article',
  ];

  let component;

  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const state = {
    title: '',
    article: '',
  };

  beforeEach(() => {
    component = render(
      <ArticleForm handleSubmit={onSubmit} handleChange={onChange} state={state} />,
    );
  });

  fields.forEach((field) => {
    test(`input exist for ${field.toLowerCase()}`, () => {
      expect(component.getByLabelText(field)).toBeInTheDocument();
      expect(component.getByPlaceholderText(field)).toBeInTheDocument();
    });
  });

  test('submit button exist', () => {
    expect(component.getByDisplayValue('Post')).toBeInTheDocument();
    expect(component.getByDisplayValue('Post')).toHaveAttribute('type', 'submit');
  });
});
