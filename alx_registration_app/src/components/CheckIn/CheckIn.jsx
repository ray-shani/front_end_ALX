import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CheckIn.css';
import Input from '../shared/Input';
import Button from '../shared/Button';
import BackButton from '../shared/BackButton';

const hubs = ['Westlands', 'Nairobi Central', 'Karen', 'Gigiri'];

const CheckIn = () => {
  const { role } = useParams();
  const [email, setEmail] = useState('');
  const [hub, setHub] = useState(hubs[0]);
  const [status, setStatus] = useState('Check-In');

  const handleSubmit = () => {
    alert(`✅ ${role.toUpperCase()} successfully submitted:\nEmail: ${email}\nHub: ${hub}\nAction: ${status}`);
    // Here you can call the API to validate email
  };

  return (
    <div className="checkin-container">
      <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Check-In</h1>
      <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <select className="hub-select" value={hub} onChange={(e) => setHub(e.target.value)}>
        {hubs.map((h) => <option key={h} value={h}>{h}</option>)}
      </select>
      <select className="status-select" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Check-In">Check-In</option>
        <option value="Check-Out">Check-Out</option>
      </select>
      <Button text="Submit" onClick={handleSubmit} />
      <BackButton />
    </div>
  );
};

export default CheckIn;
