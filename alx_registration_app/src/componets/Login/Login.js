import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import SocialLogin from '../shared/SocialLogin';
import BackButton from '../shared/BackButton';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <Input type="text" placeholder="Username or Email" icon="user" />
      <Input type="password" placeholder="Password" icon="lock" showEye />
      <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
      <Button text="Sign In" arrow />
      <p className="sign-in-with">sign in with</p>
      <SocialLogin />
      <Link to="/register" className="create-account-link">Create an account</Link>
      <BackButton />
    </div>
  );
};

export default Login;