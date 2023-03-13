import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Dashboard from '../dashboard';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      sessionStorage.setItem('token', data.login.token);
      setIsLoggedIn(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { username, password } });
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="text"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
