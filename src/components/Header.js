import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-center items-center">
        <div className="space-x-6">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </nav>
    </header>
  );
}