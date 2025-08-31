import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Create an account</h1>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button text="Register" />
      <BackButton />
    </div>
  );
};

export default Register;