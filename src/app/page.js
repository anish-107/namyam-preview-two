"use client";

import { useState } from 'react';
import BrandLogo from '../components/BrandLogo';

// Ensures the page is rendered dynamically on the server for every request.
export const dynamic = 'force-dynamic';

/**
 * The main Home page component for the "Coming Soon" landing page.
 * Features an email subscription form.
 */
export default function Home() {
  // State for the email input field.
  const [email, setEmail] = useState('');
  // State for displaying status/error messages to the user.
  const [message, setMessage] = useState('');
  // State to manage the loading status of the form submission.
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles the form submission for email subscriptions.
   * @param {React.FormEvent} e - The form event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior.

    // Basic validation to ensure the email field is not empty.
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Send a POST request to the subscription API endpoint.
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      // Handle the response from the API.
      if (res.ok) {
        setMessage('Thank you for subscribing! We will notify you on launch.');
        setEmail(''); // Clear the email field on success.
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      // Ensure the loading state is reset regardless of the outcome.
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center px-4 sm:px-8 py-10 sm:py-16 max-w-3xl mx-auto">
      {/* Main Title Section */}
      <h1
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary tracking-tight"
        style={{ fontFamily: 'serif' }}
      >
        <div className="w-20 sm:w-28 md:w-36 flex-shrink-0">
          <BrandLogo />
        </div>
        <span className="text-center sm:text-left">    is Coming Soon!</span>
      </h1>

      {/* Subtitle / Tagline */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
        Your ultimate online marketplace for authentic Puja Samagri Kits and spiritual products is almost here.
        Prepare to enrich your rituals and celebrations with ease.
      </p>

      {/* Email Subscription Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to get notified"
          className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/80 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors cursor-pointer duration-300 disabled:bg-orange-300"
        >
          {isLoading ? 'Subscribing...' : 'Notify Me!'}
        </button>
      </form>

      {/* Form Status Message Area */}
      {message && (
        <p className="mt-6 text-sm text-gray-600">{message}</p>
      )}
    </div>
  );
}