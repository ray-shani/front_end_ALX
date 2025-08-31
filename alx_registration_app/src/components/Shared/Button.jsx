import React from 'react';
import './Button.css';

const Button = ({ text, arrow }) => {
  return (
    <button className="custom-button">
      {text}
      {arrow && <span className="arrow"> →</span>}
    </button>
  );
};

export default Button;