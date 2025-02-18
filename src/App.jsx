import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgetPasswordForm from './components/ForgetPasswordForm';
import ResetPassword from './components/ResetPassword';
import Register from './components/Register';
import Login from './components/Login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPasswordForm />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  </Router>
);

export default App;