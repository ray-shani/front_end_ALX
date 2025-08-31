import React from 'react';
import './ForgotPassword.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';

const ForgotPassword = () => {
  return (
    <div className="forgot-container page-card ">
      <h1>Forgot Password?</h1>
      <Input placeholder="Email" />
      <Button text="Send Code" />
      <BackButton />
    </div>
  );
};

export default ForgotPassword;