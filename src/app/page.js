"use client";

import { useState } from 'react';
import BrandLogo from '../components/BrandLogo';

export const dynamic = 'force-dynamic';

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
    <div className="text-center p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="w-full max-w-[180px] sm:max-w-xs mx-auto mb-8">
         <BrandLogo />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-600 dark:text-orange-400" style={{ fontFamily: 'serif' }}>
        NAMYAM is Coming Soon!
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        Your ultimate online marketplace for authentic Puja Samagri Kits and spiritual products is almost here. Prepare to enrich your rituals and celebrations with ease.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get notified"
          className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/70 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 disabled:bg-orange-300"
        >
          {isLoading ? 'Subscribing...' : 'Notify Me!'}
        </button>
      </form>

      {message && <p className="mt-4 text-gray-600 dark:text-gray-400">{message}</p>}
    </div>
  );
}
