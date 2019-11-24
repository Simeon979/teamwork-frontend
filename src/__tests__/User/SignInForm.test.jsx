/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SignIn from '../../User/SignIn';

describe('Renders sign in form', () => {
  const fields = [
    'Email',
    'Password',
  ];

  let component;
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  beforeEach(() => {
    component = render(<SignIn handleChange={onChange} handleSubmit={onSubmit} />);
  });

  fields.forEach((field) => {
    test(`input exist for ${field.toLowerCase()}`, () => {
      expect(component.getByLabelText(field)).toBeInTheDocument();
      expect(component.getByPlaceholderText(field)).toBeInTheDocument();
    });
  });

  test('submit button exist', () => {
    expect(component.getByDisplayValue('Sign In')).toBeInTheDocument();
    expect(component.getByDisplayValue('Sign In')).toHaveAttribute('type', 'submit');
  });
});
