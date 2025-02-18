import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://password-reset-server-fbsl.onrender.com/api/update-password', {
        email,
        newPassword,
        token,
      });
      if (response.status === 200) {
        alert('Password updated successfully');
      } else {
        alert('Error updating password: ' + response.data);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password');
    }
  };

  return (
    <div className="flex justify-center bg-black text-white items-center h-screen">
        <form onSubmit={handleSubmit} className="p-6 bg-[#262424ca] rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <label className="block mb-4 text-white">
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded active:bg-black active:translate-y-1 transition-transform">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;