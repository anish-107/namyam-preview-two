"use client"; // This directive is necessary for using hooks like useState

import { useState } from 'react';
import BrandLogo from '../components/BrandLogo';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Thank you for subscribing! We will notify you on launch.');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <BrandLogo />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">We're Launching Soon!</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8">
        Our new website is under construction but we are getting ready to launch.
        Sign up to be the first to know when we go live. No spam, we promise.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full sm:w-80 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Notify Me'}
        </button>
      </form>

      {message && <p className="mt-4 text-gray-300">{message}</p>}
    </div>
  );
}
