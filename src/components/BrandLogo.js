export default function BrandLogo() {
  return (
    <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="150" y2="50">
          <stop offset="0%" stopColor="#8A2BE2"/>
          <stop offset="100%" stopColor="#4F46E5"/>
        </linearGradient>
      </defs>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="url(#logoGradient)">
        NAMYAM
      </text>
    </svg>
  );
}