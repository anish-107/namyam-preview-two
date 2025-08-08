import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto text-center p-6 md:p-8">
            <div className="flex justify-center space-x-6 mb-6">
                <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                    <FaTwitter size={24} />
                </a>
                <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                    <FaInstagram size={24} />
                </a>
                <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                    <FaFacebook size={24} />
                </a>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} NAMYAM. All rights reserved. Your spiritual journey, made easy.</p>
                <p className="mt-1">
                    For inquiries, contact: <a href={process.env.NEXT_PUBLIC_CONTACT_EMAIL} className="text-orange-600 dark:text-orange-400 hover:underline">info@namyam.com</a>
                </p>
            </div>
        </div>
    </footer>
  );
}