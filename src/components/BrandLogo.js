import Image from 'next/image';

export default function BrandLogo() {
  return (
    <Image
      src="/logo.svg" // Assumes logo.svg is in your /public folder
      alt="Namyam Logo"
      width={400}    // Increased width for a bigger logo
      height={400}    // Increased height for a bigger logo
      className="mx-auto" // Ensures the logo itself is centered within its container
      priority
    />
  );
}
