import React from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer, FormHeader, Form, InputLabel, Input, Submit,
} from '../shared/Form';

const SignInForm = ({ handleChange, handleSubmit, state }) => (
  <FormContainer>
    <FormHeader>Sign In</FormHeader>
    <Form data-testid="signinForm" onSubmit={handleSubmit}>
      <InputLabel htmlFor="email">
        Email
        <Input
          data-testid="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={state.email}
          required
        />
      </InputLabel>

      <InputLabel htmlFor="password">
        Password
        <Input
          data-testid="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={state.password}
          required
        />
      </InputLabel>

      <Submit data-testid="submit-button" type="submit" value="Sign In" />
    </Form>
  </FormContainer>
);

SignInForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignInForm;
