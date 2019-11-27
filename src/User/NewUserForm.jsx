import React from 'react';
import PropTypes from 'prop-types';

const NewUserForm = ({ handleChange, handleSubmit, state }) => (
  <form data-testid="newUserForm" onSubmit={handleSubmit}>
    <label htmlFor="firstName">
        First Name
      <input
        data-testid="firstName"
        id="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        value={state.firstName}
        required
      />
    </label>
    <label htmlFor="lastName">
        Last Name
      <input
        data-testid="lastName"
        id="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        value={state.lastName}
        required
      />
    </label>
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
    <label htmlFor="gender">
        Gender
      <input
        data-testid="gender"
        id="gender"
        type="text"
        placeholder="Gender"
        onChange={handleChange}
        value={state.gender}
        required
      />
    </label>
    <label htmlFor="jobRole">
        Job Role
      <input
        data-testid="jobRole"
        id="jobRole"
        type="text"
        placeholder="Job Role"
        onChange={handleChange}
        value={state.jobRole}
        required
      />
    </label>
    <label htmlFor="department">
        Department
      <input
        data-testid="department"
        id="department"
        type="text"
        placeholder="Department"
        onChange={handleChange}
        value={state.department}
        required
      />
    </label>
    <label htmlFor="address">
        Address
      <input
        data-testid="address"
        id="address"
        type="text"
        placeholder="Address"
        onChange={handleChange}
        value={state.address}
        required
      />
    </label>

    <input data-testid="submit-button" type="submit" value="Create" />
  </form>
);

NewUserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    jobRole: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewUserForm;
