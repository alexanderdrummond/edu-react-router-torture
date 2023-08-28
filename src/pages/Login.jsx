import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAuth(true);
      navigate('/protected');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="page-container login-container">
      <h1>Login</h1>
      <input 
        type="text"
        className="login-input"
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        className="login-input"
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="login-button">Login</button>
      <p className="hint">Hint: Username is 'admin', Password is 'password'</p>
    </div>
  );
};

export default Login;
