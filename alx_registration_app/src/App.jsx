import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import Landing from './components/Landing/Landing.jsx';
import CheckIn from './components/CheckIn/CheckIn.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/checkin/:role" element={<CheckIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;