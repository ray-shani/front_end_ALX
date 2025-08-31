import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/landing'); // navigate to landing
  };

  return (
    <div className="login-container page-card">
      <h1>Welcome Back!</h1>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Link to="/forgot">Forgot Password?</Link>
      <Button text="Sign In" onClick={handleSignIn} />
      <Link to="/register">Create an account</Link>
      <BackButton />
    </div>
  );
};

export default Login;
