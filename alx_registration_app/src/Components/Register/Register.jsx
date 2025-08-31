import React from 'react';
import './Register.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import SocialLogin from '../shared/SocialLogin';
import BackButton from '../shared/BackButton';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Create an account</h1>
      <Input type="text" placeholder="Username or Email" icon="user" />
      <Input type="password" placeholder="Password" icon="lock" showEye />
      <Input type="password" placeholder="Confirm Password" icon="lock" showEye />
      <p className="terms">By clicking the Register button, you accept the public offer agreement.</p>
      <Button text="Register" arrow />
      <p className="sign-up-with">sign up with</p>
      <SocialLogin />
      <BackButton />
    </div>
  );
};

export default Register;