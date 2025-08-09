import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-orange-50/80 dark:bg-orange-900/40 backdrop-blur-lg border-t border-orange-200 dark:border-orange-700 transition-colors">
      <div className="container mx-auto text-center px-6 py-8 md:py-10">

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={process.env.NEXT_PUBLIC_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-100 transition-colors duration-300"
          >
            <FaYoutube size={26} />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-100 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-100 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed max-w-xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold">NAMYAM</span>. All rights reserved. Your spiritual journey, made easy.
          </p>
          <p className="mt-1">
            For inquiries, contact:{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-100 transition-colors duration-300"
            >
              contact@namyam.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
