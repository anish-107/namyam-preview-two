import Image from 'next/image';

/**
 * A reusable component to display the brand logo.
 * It uses the Next.js Image component for optimized image loading.
 */
export default function BrandLogo() {
  return (
    <Image
      src="/logo.svg"
      alt="Namyam Logo"
      width={160}
      height={160}
      className="w-full h-auto" // Ensures the image is responsive within its container.
      priority // Tells Next.js to prioritize loading this image, as it's likely LCP.
    />
  );
}