import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import authService from '../services/auth';
import NewUserForm from './NewUserForm';

const NewUser = ({ notify, history }) => {
  const cleanState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
    address: '',
  };

  const [inputState, setInputState] = useState(cleanState);

  const handleChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.createUser(inputState);
      if (response.status === 'error' && response.error.includes('expire')) {
      // expired token, redirect to login page
        notify(response.error);
        window.localStorage.clear();
        history.push('/signin');
      } else if (response.status === 'success') {
        notify(response.data.message);
        setInputState(cleanState);
      }
    } catch (error) {
      notify('cannot submit your input');
    }
  };

  return <NewUserForm handleChange={handleChange} handleSubmit={handleSubmit} state={inputState} />;
};

NewUser.propTypes = {
  notify: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

const NewUserWithHistory = withRouter(NewUser);

export default NewUserWithHistory;

// for testing
export { NewUser };
