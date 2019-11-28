
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import authService from '../services/auth';
import SignInForm from './SignInForm';

const SignIn = ({ notify, history }) => {
  const cleanState = {
    email: '',
    password: '',
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
      const response = await authService.login(inputState);
      if (response.status === 'success') {
        authService.setUser(response.data.token);
        notify('Welcome');
        history.push('/feed');
      } else if (response.status === 'error') {
        notify(response.error);
        setInputState(cleanState);
      }
    } catch (error) {
      console.warn(error);
      notify('cannot submit your input');
    }
  };

  return <SignInForm handleChange={handleChange} handleSubmit={handleSubmit} state={inputState} />;
};

SignIn.propTypes = {
  notify: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

const SignInWithHistory = withRouter(SignIn);

export default SignInWithHistory;

// for testing
export { SignIn };
