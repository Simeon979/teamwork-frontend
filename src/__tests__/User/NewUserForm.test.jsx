/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NewUser from '../../User/NewUser';

describe('Renders create user form', () => {
  const fields = [
    'First Name',
    'Last Name',
    'Email',
    'Password',
    'Gender',
    'Job Role',
    'Department',
    'Address',
  ];

  let component;

  beforeEach(() => {
    component = render(<NewUser />);
  });

  fields.forEach((field) => {
    test(`input exist for ${field.toLowerCase()}`, () => {
      expect(component.getByLabelText(field)).toBeInTheDocument();
      expect(component.getByPlaceholderText(field)).toBeInTheDocument();
    });
  });

  test('submit button exist', () => {
    expect(component.getByDisplayValue('Create')).toBeInTheDocument();
    expect(component.getByDisplayValue('Create')).toHaveAttribute('type', 'submit');
  });
});
