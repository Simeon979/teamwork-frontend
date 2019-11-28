import React from 'react';
import PropTypes from 'prop-types';

const SignInForm = ({ handleChange, handleSubmit, state }) => (
  <form data-testid="signinForm" onSubmit={handleSubmit}>
    <label htmlFor="email">
        Email
      <input
        data-testid="email"
        id="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={state.email}
        required
      />
    </label>

    <label htmlFor="password">
        Password
      <input
        data-testid="password"
        id="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={state.password}
        required
      />
    </label>

    <input data-testid="submit-button" type="submit" value="Sign In" />
  </form>
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
