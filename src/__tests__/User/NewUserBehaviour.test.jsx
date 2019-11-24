/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import NewUser from '../../User/NewUser';

const Wrapper = ({ state, handleSubmit }) => {
  const onChange = (event) => {
    state[`${event.target.id}`] = event.target.value;
  };

  return (
    <NewUser state={state} handleChange={onChange} handleSubmit={handleSubmit} />
  );
};

describe('handles input change and submission', () => {
  const testState = {
    firstName: 'Tester',
    lastName: 'Tester',
    email: 'value@input.test',
    password: 'tester',
    gender: 'male',
    jobRole: 'tester',
    department: 'testing',
    address: 'Test Ave',
  };

  const state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
    address: '',
  };

  const onSubmit = jest.fn();

  let component;
  beforeEach(() => {
    component = render(<Wrapper state={state} handleSubmit={onSubmit} />);
  });

  test('handles input event correctly and submits', () => {
    Object.keys(state).forEach((fieldId) => {
      const field = component.getByTestId(`${fieldId}`);
      const event = { target: { value: testState[`${field.id}`] } };
      fireEvent.change(field, event);
    });

    expect(state).toEqual(testState);

    const form = component.getByTestId('newUserForm');
    fireEvent.submit(form);

    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
