import Image from 'next/image';

export default function BrandLogo() {
  return (
    <Image
      src="/logo.svg"
      alt="Namyam Logo"
      width={160}  // just a base, actual size comes from wrapper
      height={160}
      className="w-full h-auto"
      priority
    />
  );
}
