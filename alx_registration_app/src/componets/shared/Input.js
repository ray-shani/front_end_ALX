import React, { useState } from 'react';
import './Input.css';

const Input = ({ type, placeholder, icon, showEye }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      <span className={`icon ${icon}`}></span>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        className="custom-input"
      />
      {showEye && (
        <span
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          
        </span>
      )}
    </div>
  );
};

export default Input;