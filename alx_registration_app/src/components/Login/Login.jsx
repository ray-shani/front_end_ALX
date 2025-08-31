import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Link to="/forgot">Forgot Password?</Link>
      <Button text="Sign In" />
      <Link to="/register">Create an account</Link>
      <Button text="Sign In" onClick={() => navigate('/landing')} />
      <BackButton />
    </div>
  );
};

export default Login;