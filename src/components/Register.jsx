import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://password-reset-server-fbsl.onrender.com/api/users/register', {
        username, email, password
      });
      alert(response.data.msg);
    } catch (error) {
      console.error('Error registering:', error);
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        alert('Error registering');
      }
    }
  };

  return (
    <div className="flex justify-center bg-black text-white items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-[#262424ca] rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <label className="block mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
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
        <label className="block mb-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded active:bg-black active:translate-y-1 transition-transform">Register</button>
      </form>
    </div>
  );
};

export default Register;