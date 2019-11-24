import React from 'react';

export default ({ handleChange, handleSubmit }) => (
  <form data-testid="newUserForm" onSubmit={handleSubmit}>
    <label htmlFor="firstName">
        First Name
      <input data-testid="firstName" id="firstName" type="text" placeholder="First Name" onChange={handleChange} />
    </label>
    <label htmlFor="lastName">
        Last Name
      <input data-testid="lastName" id="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
    </label>
    <label htmlFor="email">
        Email
      <input data-testid="email" id="email" type="email" placeholder="Email" onChange={handleChange} />
    </label>
    <label htmlFor="password">
        Password
      <input data-testid="password" id="password" type="password" placeholder="Password" onChange={handleChange} />
    </label>
    <label htmlFor="gender">
        Gender
      <input data-testid="gender" id="gender" type="text" placeholder="Gender" onChange={handleChange} />
    </label>
    <label htmlFor="jobRole">
        Job Role
      <input data-testid="jobRole" id="jobRole" type="text" placeholder="Job Role" onChange={handleChange} />
    </label>
    <label htmlFor="department">
        Department
      <input data-testid="department" id="department" type="text" placeholder="Department" onChange={handleChange} />
    </label>
    <label htmlFor="address">
        Address
      <input data-testid="address" id="address" type="text" placeholder="Address" onChange={handleChange} />
    </label>

    <input data-testid="submit-button" type="submit" value="Create" />
  </form>
);
