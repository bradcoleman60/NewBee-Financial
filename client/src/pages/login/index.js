import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Dashboard from '../dashboard';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [login, { loading, error }] = useMutation(LOGIN_USER, {
  //   onCompleted: (data) => {
  //     sessionStorage.setItem('token', data.login.token);
  //     setIsLoggedIn(true);
  //   },
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login({ variables: { username, password } });
  // };

  // if (isLoggedIn) {
  //   return <Dashboard />;
  // }

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/register">← Go to Register</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;