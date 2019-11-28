/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForDomChange, wait } from '@testing-library/react';

import { SignIn } from '../../User/SignIn';
import authService from '../../services/auth';

const mockSignInResponse = {
  token: '7fzER6hjyWRgHw3EwsiprqBWVIWyY5UNnpCnb2oS',
  userId: '424',
};

jest.mock('../../services/auth', () => ({
  login: jest.fn(() => Promise.resolve({
    status: 'success',
    data: mockSignInResponse,
  })),

  setUser: jest.fn(),
}));

describe('handles input change and submission', () => {
  const testState = {
    email: 'value@input.test',
    password: 'tester',
  };

  const notify = jest.fn();
  const history = {
    push: jest.fn(),
  };

  const component = render(<SignIn history={history} notify={notify} />);

  test('handles input event correctly and submits', async () => {
    Object.keys(testState).forEach((fieldId) => {
      const field = component.getByTestId(`${fieldId}`);
      const event = { target: { value: testState[`${field.id}`] } };
      fireEvent.change(field, event);
    });

    const form = component.getByTestId('signinForm');
    fireEvent.submit(form);

    await wait();

    expect(notify.mock.calls.length).toBe(1);
    expect(notify.mock.calls[0][0]).toBe('Welcome');

    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0][0]).toBe('/feed');

    expect(authService.login.mock.calls.length).toBe(1);
    expect(authService.login.mock.calls[0][0]).toStrictEqual(testState);

    expect(authService.setUser.mock.calls.length).toBe(1);
    expect(authService.setUser.mock.calls[0][0]).toBe(mockSignInResponse.token);
  });
});
