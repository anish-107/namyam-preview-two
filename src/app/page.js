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
        headers: { 'Content-Type': 'application/json' },
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
    <div className="text-center px-4 sm:px-8 py-10 sm:py-16 max-w-3xl mx-auto">
      {/* Title */}
      <h1
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-light tracking-tight"
        style={{ fontFamily: 'serif' }}
      >
        <div className="w-20 sm:w-28 md:w-36 flex-shrink-0">
          <BrandLogo />
        </div>
        <span className="text-center sm:text-left">is Coming Soon!</span>
      </h1>




      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Your ultimate online marketplace for authentic Puja Samagri Kits and spiritual products is almost here.
        Prepare to enrich your rituals and celebrations with ease.
      </p>

      {/* Email Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get notified"
          className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
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

      {/* Status Message */}
      {message && (
        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">{message}</p>
      )}
    </div>
  );
}
