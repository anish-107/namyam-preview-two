import Link from 'next/link';
import BrandLogo from './BrandLogo';

export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 gap-4 sm:gap-0">
        <Link href="/">
            <div className="w-32">
                <BrandLogo />
            </div>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/terms-and-conditions" className="text-sm text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="text-sm text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100 transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}