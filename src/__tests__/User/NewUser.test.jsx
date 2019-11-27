/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';

import { NewUser } from '../../User/NewUser';
import authService from '../../services/auth';

const mockNewUserResponse = {
  message: 'User account successfully created',
  token: '7fzER6hjyWRgHw3EwsiprqBWVIWyY5UNnpCnb2oS',
  userId: '424',
};

jest.mock('../../services/auth', () => ({
  createUser: jest.fn(() => Promise.resolve({
    status: 'success',
    data: mockNewUserResponse,
  })),
}));

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

  const notify = jest.fn();
  const history = {
    push: jest.fn(),
  };

  const component = render(<NewUser history={history} notify={notify} />);

  test('handles input event correctly and submits', async () => {
    Object.keys(testState).forEach((fieldId) => {
      const field = component.getByTestId(`${fieldId}`);
      const event = { target: { value: testState[`${field.id}`] } };
      fireEvent.change(field, event);
    });

    const form = component.getByTestId('newUserForm');
    fireEvent.submit(form);

    await waitForDomChange();

    expect(notify.mock.calls.length).toBe(1);
    expect(notify.mock.calls[0][0]).toBe(mockNewUserResponse.message);

    expect(history.push.mock.calls.length).toBe(0);

    expect(authService.createUser.mock.calls.length).toBe(1);
    expect(authService.createUser.mock.calls[0][0]).toStrictEqual(testState);
  });
});
