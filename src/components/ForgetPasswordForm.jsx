import React, { useState } from 'react';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendResetEmail = async () => {
      try {
        const response = await fetch('https://password-reset-server-fbsl.onrender.com/api/forget-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          alert('Email sent');
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email');
      }
    };

    sendResetEmail();
  };

  return (
    <div className="flex justify-center bg-black text-white items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-[#262424ca] rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Forget Password</h2>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded active:bg-black active:translate-y-1 transition-transform">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;