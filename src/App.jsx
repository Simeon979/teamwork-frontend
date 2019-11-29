import React, { useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';

import Main from './Main';
import SignInWithHistory from './User/SignIn';
import NewUserWithHistory from './User/NewUser';

toast.configure({
  autoClose: 3000,
  draggable: false,
});

const isExpiredToken = (expiration) => {
  const bestBefore = new Date(expiration * 1000);
  return bestBefore - Date.now() < 0;
};

const App = () => {
  const [notification, setNotification] = useState('');
  if (notification) {
    toast.info(notification);
    setNotification(null);
  }


  const resolveRoute = () => {
    const token = window.localStorage.getItem('token');
    if (!token) {
      setNotification('You have to log in first');
      return <Redirect to="/signin" />;
    }
    try {
      const payload = jwtDecode(token);
      if (isExpiredToken(payload.exp)) {
        window.localStorage.clear();
        return <Redirect to="/signin" />;
      }
      if (payload.dept === 'admin') {
        return <NewUserWithHistory notify={setNotification} />;
      }
      return <Main notify={setNotification} />;
    } catch (err) {
      return <Redirect to="/signin" />;
    }
  };

  return (
    <Switch>
      <Route exact path="/signin" render={() => <SignInWithHistory notify={setNotification} />} />
      <Route exact path="/" render={resolveRoute} />
      <Route exact path="/new-user" render={resolveRoute} />
      <Route path="/feed" render={resolveRoute} />
      <Route path="/articles/new" render={resolveRoute} />
      <Route path="/articles/:articleId" render={resolveRoute} />
      <Route path="/articles/:articleId/edit" render={resolveRoute} />
    </Switch>
  );
};

export default App;
