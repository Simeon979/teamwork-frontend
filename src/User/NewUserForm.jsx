import React from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer, FormHeader, Form, InputLabel, Input, Submit,
} from '../shared/Form';

const NewUserForm = ({ handleChange, handleSubmit, state }) => (
  <FormContainer>
    <FormHeader>Create new Employee profile</FormHeader>
    <Form data-testid="newUserForm" onSubmit={handleSubmit}>
      <InputLabel htmlFor="firstName">
        First Name
        <Input
          data-testid="firstName"
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={state.firstName}
          required
        />
      </InputLabel>
      <InputLabel htmlFor="lastName">
        Last Name
        <Input
          data-testid="lastName"
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={state.lastName}
          required
        />
      </InputLabel>
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
      <InputLabel htmlFor="gender">
        Gender
        <Input
          data-testid="gender"
          id="gender"
          type="text"
          placeholder="Gender"
          onChange={handleChange}
          value={state.gender}
          required
        />
      </InputLabel>
      <InputLabel htmlFor="jobRole">
        Job Role
        <Input
          data-testid="jobRole"
          id="jobRole"
          type="text"
          placeholder="Job Role"
          onChange={handleChange}
          value={state.jobRole}
          required
        />
      </InputLabel>
      <InputLabel htmlFor="department">
        Department
        <Input
          data-testid="department"
          id="department"
          type="text"
          placeholder="Department"
          onChange={handleChange}
          value={state.department}
          required
        />
      </InputLabel>
      <InputLabel htmlFor="address">
        Address
        <Input
          data-testid="address"
          id="address"
          type="text"
          placeholder="Address"
          onChange={handleChange}
          value={state.address}
          required
        />
      </InputLabel>

      <Submit data-testid="submit-button" type="submit" value="Create" />
    </Form>
  </FormContainer>
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
