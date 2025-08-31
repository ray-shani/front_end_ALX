import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import Button from '../shared/Button';

const Landing = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/checkin/${role}`);
  };

  return (
    <div className="landing-container">
      <h1>Welcome to ALX Hub Westlands</h1>
      <p>Please identify yourself to continue:</p>
      <div className="role-buttons">
        <Button text="Student" onClick={() => handleSelect('student')} />
        <Button text="Staff" onClick={() => handleSelect('staff')} />
        <Button text="Community Member" onClick={() => handleSelect('community')} />
        <Button text="Alumni" onClick={() => handleSelect('alumni')} />
      </div>
    </div>
  );
};

export default Landing;
