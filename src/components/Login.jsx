import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://password-reset-server-fbsl.onrender.com/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      // No redirection needed
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        alert('Error logging in');
      }
    }
  };

  return (
    <div className="flex justify-center bg-black text-white items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-[#262424ca] rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded active:bg-black active:translate-y-1 transition-transform">Login</button>
        <Link 
          to="/forget-password"
          className="mt-2 w-full p-2 bg-gray-500 text-white rounded block text-center active:bg-black active:translate-y-1 transition-transform"
        >
          Forgot Password
        </Link>
        <div className="mt-4">
          <span>Don't have an account?</span>
          <Link to="/register" className="text-blue-500 ml-1">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;