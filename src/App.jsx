import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgetPasswordForm from './components/ForgetPasswordForm';
import ResetPassword from './components/ResetPassword';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ForgetPasswordForm />} />
      <Route path="/forget-password" element={<ForgetPasswordForm />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  </Router>
);

export default App;