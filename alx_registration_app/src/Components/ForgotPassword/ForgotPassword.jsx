import React from 'react';
import './ForgotPassword.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <h1>Forgot password?</h1>
      <Input type="email" placeholder="Enter your email address" icon="user" />
      <p className="info">We will send you a message to set or reset your new password</p>
      <Button text="Send Code" arrow />
      <BackButton />
    </div>
  );
};

export default ForgotPassword;