/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SignInForm from '../../User/SignInForm';

describe('Renders sign in form', () => {
  const fields = [
    'Email',
    'Password',
  ];

  let component;
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const state = {
    email: '',
    password: '',
  };

  beforeEach(() => {
    component = render(
      <SignInForm handleChange={onChange} handleSubmit={onSubmit} state={state} />,
    );
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
