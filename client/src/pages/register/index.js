import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '../../utils/mutations';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [register, { loading, error }] = useMutation(REGISTER_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ variables: { username, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Register'}
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default Register;
