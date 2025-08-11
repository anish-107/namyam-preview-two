// BrandLogo.js
import Image from 'next/image';

/**
 * A reusable component to display the brand's main SVG logo.
 * It accepts a className prop to allow for flexible sizing and styling.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional CSS classes to apply to the image.
 */
export default function BrandLogo({ className }) {
  return (
    <Image
      src="/logo.svg"
      alt="Namyam Logo"
      width={160}
      height={160}
      className={className || "w-auto h-auto"} // Default or passed-in classes
      priority // Keep priority for key logo instances
    />
  );
}